
import React, { createContext, useState, useRef, useEffect } from 'react';
import { Image, Modal, Platform, TouchableWithoutFeedback, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Text from '../components/Text';
import Button from '../components/Button';
import colors from '../constants/appcolors';
import AppModal from '../components/AppModal';
import Loading from '../components/Loading';
import env from '../constants/env';
const qs = require('qs');
import { showAlertRef, showDialogRef, showSnackbarRef } from '../hooks/appRefs';


const AppContext = createContext({});

const AppContextProvider = ({ children }) => {

	// snack bar
	const [snack, setSnack] = useState(false);
	const [snackMessage, setSnackMessage] = useState(null);
	const showSnackbar = (message) => {
		setSnackMessage(message);
		setSnack(true);
		setTimeout(() => {
			setSnack(false);
		}, 800);
	}
	// end: snack bar

	// alert
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState();
	const showAlert = (message) => {
		setAlertMessage(message);
		setAlertOpen(true);
	}
	// end: alert

	// dialog
	const [ dialogOpen, setDialogOpen ] = useState(false);
	const [ dialogData, setDialogData ] = useState();
	const showDialog = (data) => {
		setDialogData(data);
		setDialogOpen(true);
	}
	// end: dialog

	// loding
	const [loading, setLoading] = useState(false);

	// image picker
	const [imagePickerModalOpen, setImagePickerModalOpen] = useState(false);
	const [photoLimit, setPhotoLimit] = useState();
	const updateImageRef = useRef();
	const openImagePicker = (limit, callback) => {
		setPhotoLimit(limit);
		updateImageRef.current = callback;
		setImagePickerModalOpen(true);
	};
	const handlePhotoPress = async (method) => {
		setImagePickerModalOpen(false);

		// ios 에서 갤러리가 열리지 않는문제: 모달이 중첩되기 때문이라면 시간지연을 조금 줌
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 500);
		})
		
		const options = {
            mediaType: 'photo',
        };
		let result;
		if (method === 'camera') {
			result = await launchCamera(options);
		}
		else {
			options['selectionLimit'] = photoLimit;
			result = await launchImageLibrary(options);
		}
        
        if (result.didCancel) return;
        if (result.errorMessage) showSnackbar(result.errorMessage);
        if (!result.assets) return;

		updateImageRef.current(result.assets);
	}
	// end: image picker

	// params: { method, suburl, options }
	// division: default, json, form, query
	const simplefetch = async (method, url, options) => {
		let division, body, params;
		if (options) {
			division = options.division;
			body = options.body;
			params = options.params;
		} 
		
		let apiurl = `${env.baseURL}/api${url}`;

		let contentType;
		if (params) {
			const querystring = qs.stringify(params);
			apiurl += '?' + querystring;
		}
		if (division === 'json') {
			contentType = 'application/json';
			body = JSON.stringify(body);
		}
		else if (division === 'form') {
			contentType = 'multipart/form-data';
		}
		else {
			contentType = 'application/x-www-form-urlencoded';
			body = qs.stringify(body);
		}

		const token = await AsyncStorage.getItem('token');
		const headers = {
			'Content-Type': contentType,
			'os': Platform.OS,
			'app_version': env.version * 10,
		}
		if (token) headers['Authorization'] = `Bearer ${token}`;

		const options_a = {
			method, 
			body,
			headers,
		};
		
		return apifetch(apiurl, options_a);
	}

	const apifetch = (url, options) => {
		console.log(url, options);

		return fetch(url, options)
		.then((response) => {
			if (response.ok) {
				// 성공적으로 응답을 받았다. 하지만 에러메시지일 수도 있다.
				console.log('api success', response.url);
				return response.json();
			}
			else {
				// 여기서의 예외는 모두 code 값을 주어 throw 한다.
				let error;
				switch (response.status) {
					case 404:
						error = new Error('없는 API 주소입니다.');
						error.code = '404';
						throw error;
					default:
						console.error('status code:' + response.status);
						error = new Error('해석할 수 없는 응답입니다.');
						error.code = 'unknown';
						throw error;
				}
			}
		})
		.then(response => {
			// 응답을 받았으며 parsing 까지 성공
			console.log('api success data', url, response);

			if (response.result === 'success') {
				return Promise.resolve(response.data);
			}
			else if (response.result === 'fail') {
				const error = new Error(response.data);
				error.code = response.code || '500';
				throw error
			}
			else if (response.result === 'null') {
				const message = response.data?.length > 0 ? `${response.data[0]} 은(는) 필수 입력값입니다.` : '값이 입력되지 않았습니다.';
				const error = new Error(message);
				error.code = 'null';
				throw error
			}
			else {
				const error = new Error('해석할 수 없는 응답입니다.');
				throw error;
			}
		})
		.catch(error => {
			console.error(error);
			if (error.code) {
				console.log('error code: ', error.code);
				switch (error.code) {
					case '500': 
						showAlert(error.message); 
						break;
					case '404': showAlert('존재하지 않는 주소에 요청되었습니다.'); break;
					case 'null': showAlert(error.message); break;
					case 'unknown': showAlert('에러가 발생했습니다. 관리자에게 문의해주세요.'); break;
					case 'need_app_update': showAlert('앱 업데이트가 필요합니다. 마켓에서 업데이트 해주세요.');
					default: break;    // code error handler 가 처리할 수 있도록 아무것도 안함
				}
			}
			else {
				// 서버오류일 수 있고(json parsing 문제), 네트워크 오류일 수 있다.
				if (error.message === 'Network request failed') {
					showAlert('네트워크 요청에 실패했습니다. 네트워크 연결을 확인해주세요.');
				}
				else {
					const data = { 
						division: 'error', 
						code: 'app', 
						message: error.message
					};
					dbLog(data);
				}
			}
			throw error;
		})
	}

	// data: { division*, code*, message, stack }
	const dbLog = (data) => {
        simplefetch('post', '/common/db_log.php', { body: data });
	}


	useEffect(() => {
		showSnackbarRef.current = showSnackbar;
		showAlertRef.current = showAlert;
		showDialogRef.current = showDialog;
	}, []);


	return (
		<AppContext.Provider
			value={{
				showSnackbar,

				showAlert,

				showDialog,

				setLoading,

				openImagePicker,

				apifetch,
				simplefetch,
				dbLog,
			}}
		>
			{children}

			{/* snackbar */}
			<AppModal
				visible={snack}
				setVisible={setSnack}
			>
				<View style={{ alignItems: 'center', paddingVertical: 54, paddingHorizontal: 30 }}>
					<Text style={{ fontSize: 16 }}>{snackMessage}</Text>
				</View>
			</AppModal>

			{/* alert */}
			<AppModal
				visible={alertOpen}
				setVisible={setAlertOpen}
			>
				<View style={{ paddingTop: 60, paddingHorizontal: 30, paddingBottom: 30 }}>
					<Text style={{ marginBottom: 40, alignSelf: 'center', fontSize: 16 }}>{alertMessage}</Text>
					<Button onPress={() => { setAlertOpen(false); }}>확인</Button>
					<TouchableWithoutFeedback onPress={() => { setAlertOpen(false); }}>
						<Image style={{ width: 32, height: 32, right: 11, top: 11, position: 'absolute' }} />
					</TouchableWithoutFeedback>
				</View>
			</AppModal>

			{/* dialog */}
			{dialogData && <AppModal
				visible={dialogOpen}
				setVisible={setDialogOpen}
			>
				<View style={{ paddingTop: 60, paddingHorizontal: 30, paddingBottom: 30 }}>
					<Text style={{ marginBottom: 40, alignSelf: 'center', fontSize: 16 }}>{dialogData.message}</Text>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1, marginRight: 10 }}><Button mode="outlined" style={{ borderColor: '#D2DCE8' }} textStyle={{ color: '#555555', fontWeight: 'bold' }} onPress={() => {
							setDialogOpen(false);
							if (dialogData.second?.onPress) dialogData.second.onPress();
						}}>{dialogData.second?.text || '취소'}</Button></View>
						<View style={{ flex: 1 }}><Button mode="outlined" style={{ borderColor: colors.primary }} textStyle={{ color: colors.primary, fontWeight: 'bold' }} onPress={() => {
							setDialogOpen(false);
							dialogData.first.onPress();
						}}>{dialogData.first.text || '확인'}</Button></View>
					</View>
					<TouchableWithoutFeedback onPress={() => { setDialogOpen(false); }}>
						<Image style={{ width: 32, height: 32, right: 11, top: 11, position: 'absolute' }} />
					</TouchableWithoutFeedback>
				</View>
			</AppModal>}

			{/* loading */}
			<Modal visible={loading} setVisible={setLoading} transparent={true}>
				<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
					<Loading />
				</View>
			</Modal>

			{/* image picker */}
			<Modal
				transparent={true}
				visible={imagePickerModalOpen}
				onRequestClose={() => { setImagePickerModalOpen(false); }}
			>
				<TouchableWithoutFeedback onPress={() => { setImagePickerModalOpen(false); }}>
					<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
						<TouchableWithoutFeedback onPress={() => {
							// nothing
						}}>
							<View style={[{ backgroundColor: 'white', marginHorizontal: 22, paddingTop: 30, paddingBottom: 30, paddingHorizontal: 30, borderRadius: 10, }]}>
								<Text style={{ fontSize: 14 }}>이미지를 가져올 방법을 선택하세요.</Text>

								<View style={{ marginTop: 24, flexDirection: 'row' }}>
									<View style={{ flex: 1, marginRight: 10 }}><Button style={{ borderRadius: 5, height: 40 }} textStyle={{ fontSize: 14 }} onPress={() => { handlePhotoPress('gallery') }}>갤러리</Button></View>
									<View style={{ flex: 1 }}><Button style={{ borderRadius: 5, height: 40, backgroundColor: colors.gray600 }} textStyle={{ fontSize: 14 }} onPress={() => { handlePhotoPress('camera') }}>카메라</Button></View>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

		</AppContext.Provider>
	);
};

export {
	AppContext,
	AppContextProvider
};
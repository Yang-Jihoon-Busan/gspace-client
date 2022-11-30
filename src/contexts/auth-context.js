import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect, useContext } from 'react';
// import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { AppContext } from './app-context';



const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
	const { simplefetch, dbLog } = useContext(AppContext);

	const [me, setMe] = useState();

	// 앱 실행될때 마다 내정보 싱크
	useEffect(() => {
		syncAuth();
	}, []);

	const syncAuth = async () => {
		const token = await AsyncStorage.getItem('token');
		const block_auto_login = await AsyncStorage.getItem('block_auto_login');

		if (token && !block_auto_login) await fetchMyinfo();
		else clearAuthInfo();
	}

	const setAuthInfo = async (authInfo) => {
		try {
			await AsyncStorage.setItem('token', authInfo.token);
			setMe(authInfo.user);
		}
		catch (error) {
			console.error(error);
		}
	}

	const pairWithAppInstance = async () => {
		// if (Platform.OS === 'ios') {
		// 	// Requesting permission
		// 	const authorizationStatus = await messaging().requestPermission();
		// }

		// const token = await messaging().getToken();
		// if (token) {
		// 	const body = {
		// 		fcm_token: token,
		// 	}
		// 	await simplefetch('post', '/user/pair_with_app_instance.php', { body });
		// }
		// else {
		// 	console.error('no FCM token.');
		// 	const data = { 
		// 		division: 'error', 
		// 		code: 'no_fcm_token', 
		// 	};
		// 	dbLog(data);
		// }
	}

	const clearAuthInfo = async () => {
		try {
			await AsyncStorage.setItem('token', '');
			setMe(null);
		}
		catch (error) {
			console.error(error);
		}
	};

	// call after myinfo changed
	const fetchMyinfo = async () => {
		try {
			const authinfo = await simplefetch('get', '/auth/myinfo.php')
			await setAuthInfo(authinfo);
		}
		catch (error) {
			// 에러발생시 로그아웃
			console.error(error);
			clearAuthInfo();
		}
	}

	return (
		<AuthContext.Provider
			value={{
				me,
				setAuthInfo,
				clearAuthInfo,
				fetchMyinfo,
				pairWithAppInstance,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export {
	AuthContext,
	AuthContextProvider
};
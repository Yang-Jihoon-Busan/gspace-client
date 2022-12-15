import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';
import { AppContext } from '../../contexts/app-context';
import { AuthContext } from '../../contexts/auth-context';
import { basicErrorHandler } from '../../config/http-error-handler';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import AppModal from '../../components/AppModal';



const MyProfileEditScreen = ({ route, navigation }) => {
    const { simplefetch, showSnackbar, openImagePicker } = useContext(AppContext);
    const { me, fetchMyinfo } = useContext(AuthContext);

    const [ nickname, setNickname ] = useState(me.nickname);

    const checkNicknameDuplicate = () => {
        if (nickname === me.nickname) return showSnackbar('사용가능한 닉네임입니다.');

        const params = { nickname };
        simplefetch('get', '/user/check_duplicate.php', { params })
        .then(() => {
            showSnackbar('사용가능한 닉네임입니다.');
        })
        .catch(basicErrorHandler);
    }
    
    // profile image
    const [ menuModalOpen, setMenuModalOpen ] = useState(false);
    const [ photoPicked, setPhotoPicked ] = useState();
    const [ emptyPhotoFlag, setEmptyPhotoFlag ] = useState(false);

    const handlePhotoUpdate = () => {
        setMenuModalOpen(false);
        setTimeout(() => {
            openImagePicker(1, assets => {
                setPhotoPicked(assets[0]);
                setEmptyPhotoFlag(false);
            });    
        }, 500);
    }
    const handlePhotoBase = () => {
        setMenuModalOpen(false);
        setPhotoPicked(null);
        setEmptyPhotoFlag(true);
    }
    // end: profile image

    const handleModify = async () => {
        try {
            if (nickname !== me.nickname) {
                const body = { nickname };
                await simplefetch('post', '/user/modify_nickname.php', { body })
            }
            
            if (photoPicked) {
                const data = new FormData();
                data.append('image', {
                    name: photoPicked.fileName,
                    type: photoPicked.type,
                    uri: photoPicked.uri,
                });
                const options = {
                    division: 'form',
                    body: data,
                };
                await simplefetch('post', '/user/update_my_profile_image.php', options)
            }
            else if (emptyPhotoFlag) {
                await simplefetch('post', '/user/remove_my_profile_image.php')
            }
    
            await fetchMyinfo();
            showSnackbar('수정했습니다.');
            setPhotoPicked(null);
            setEmptyPhotoFlag(false);
        }
        catch(error) {
            basicErrorHandler(error);
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'프로필변경'} />

            <View style={{ flex: 1, paddingVertical: 40, paddingHorizontal: 20 }}>
                <View style={{ alignSelf: 'center', width: 90, height: 90 }}>
                    <Image 
                        style={{ width: 90, height: 90, borderRadius: 45, marginHorizontal: 'auto' }}
                        source={{ uri: photoPicked ? photoPicked.uri : me.image }}
                    />
                    <TouchableOpacity onPress={() => { setMenuModalOpen(true); }} style={{ width: 30, height: 30, position: 'absolute', right: -6, bottom: -6, backgroundColor: 'blue' }}>
                        <Text>here</Text>

                        {/* <RNPickerSelect
                            onValueChange={(value) => {
                                if (value === 'photo_update') onPhotoPress();
                            }}
                            items={[
                                { label: '사진선택', value: 'photo_update' },
                                { label: '기본이미지', value: 'no_photo' },
                            ]}
                            value={setting}
                            onDonePress={handleSettingDone}
                        >
                            <Text style={{ backgroundColor: 'blue' }}>here</Text>
                        </RNPickerSelect> */}
                    </TouchableOpacity>

                    <AppModal
                        visible={menuModalOpen}
                        setVisible={setMenuModalOpen}
                    >
                        <View style={{ paddingHorizontal: 30, paddingVertical: 30, flexDirection: 'row' }}>
                            <View 
                                style={{ flex: 1, marginRight: 10 }}><Button mode="outlined" style={{ borderColor: '#D2DCE8' }}
                                onPress={handlePhotoUpdate}
                            >사진선택</Button></View>
                            <View 
                                style={{ flex: 1, marginRight: 10 }}><Button mode="outlined" style={{ borderColor: '#D2DCE8' }}
                                onPress={handlePhotoBase}
                            >기본이미지</Button></View>
                        </View>
                    </AppModal>
                </View>

                <View style={{ marginVertical: 30, flexDirection: 'row' }}>
                    <TextInput
                        style={[cstyles.input, { marginRight: 10, flex: 1 }]}
                        placeholder={'닉네임을 입력해 주세요.'}
                        placeholderTextColor={colors.placeholderColor}
                        textContentType={'nickname'}
                        returnKeyType="search"
                        onSubmitEditing={() => { checkNicknameDuplicate(); }}
                        onChangeText={setNickname}
                        value={nickname}
                    />
                    <TouchableOpacity style={{ width: 85, height: 44, borderColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={checkNicknameDuplicate}>
                        <Text style={{ fontWeight: 'bold' }}>중복확인</Text>
                    </TouchableOpacity>
                </View>

                <Button onPress={handleModify}>수정</Button>
            </View>

			
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default MyProfileEditScreen;
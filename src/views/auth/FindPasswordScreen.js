import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';
import env from '../../constants/env';
import { AppContext } from '../../contexts/app-context';
import { AuthContext } from '../../contexts/auth-context';
import { basicErrorHandler } from '../../config/http-error-handler';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import MobileAuth from './MobileAuth';
import Label from '../../components/Label';
import * as yup from 'yup';



const FindPasswordScreen = ({ route, navigation }) => {
    const { simplefetch, showAlert } = useContext(AppContext);

    const [ email, setEmail ] = useState('');
    const [ id, setId ] = useState();
    const [ mobile, setMobile ] = useState();
    const [ mobileError, setMobileError ] = useState();

    const onMobileAuthenticated = ({ id, mobile }) => {
        setId(id);
        setMobile(mobile);
    }

    const handleConfirm = async () => {
        try {
            await yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.').validate(email);
            if (!mobile || !id) throw new Error('휴대폰 인증을 완료해주세요.');

            // TODO: 입력한 이메일의 아이디가 있는지 확인
            const params = { email, mobile };
            simplefetch('get', '/user/is_user_exist.php', { params })
            .then((user) => {
                navigation.navigate('ChangePassword', { authLogId: id, userId: user.id })
            })
            .catch(basicErrorHandler);
        }
        catch(error) {
            showAlert(error.message)
        }
    }



    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'비밀번호 찾기'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>비밀번호 찾기</Text>

                {Label('아이디*')}
                <TextInput
                    style={[cstyles.input]}
                    placeholder='이메일형식으로 아이디 입력'
                    placeholderTextColor={colors.placeholderColor}
                    autoCapitalize={'none'}
                    returnKeyType="done"
                    onChangeText={setEmail}
                    value={email}
                />
                
                <View style={{ marginTop: 30 }}>
                    {Label('휴대폰번호*', mobileError)}
                    <MobileAuth callback={onMobileAuthenticated} setError={setMobileError} />
                </View>

                <View style={{ marginTop: 50 }}><Button onPress={handleConfirm}>확인</Button></View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default FindPasswordScreen;
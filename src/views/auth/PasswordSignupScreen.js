import React, { useState, useContext, useRef } from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
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
import MobileAuth from './MobileAuth';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Label from '../../components/Label';


const PasswordSignupScreen = ({ route, navigation }) => {
    const { simplefetch, showSnackbar } = useContext(AppContext);
    const { setAuthInfo, pairWithAppInstance } = useContext(AuthContext);

    const [ mobileError, setMobileError ] = useState();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            re_password: '',
            name: '',
            mobile: '',
            nickname: '',
            mobileAuthenticated: false,
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
            password: yup.string().required('비밀번호를 입력해주세요.').max(50, '비밀번호가 너무 깁니다.').matches(/^(?=.*[A-Za-z])(?=.*\d).{7,}$/, '7자이상, 숫자/영문자 포함'),
            re_password: yup.string().required('비밀번호 확인란을 입력해주세요.').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
            name: yup.string().required('이름을 입력해주세요.').min(2, '2자 이상 입력해주세요.').max(20, '이름이 너무 깁니다.'),
            mobile: yup.string().required('핸드폰번호는 필수입력값입니다.'),
            nickname: yup.string().required('닉네임을 입력해주세요.').min(2, '2자 이상 입력해주세요.').max(20, '닉네임이 너무 깁니다.'),
            mobileAuthenticated: yup.boolean().oneOf([true], '핸드폰번호를 인증해주세요.')
        }),
        onSubmit: (values, { setSubmitting }) => {
            const body = {
                ...values,
            };
            simplefetch('post', '/auth/password_signup.php', { body })
            .then((authinfo) => setAuthInfo(authinfo))
            .then(() => pairWithAppInstance())
            .then(() => { navigation.navigate('AdditionalUserInfo') })
            .catch(basicErrorHandler)
            .finally(() => { 
                setSubmitting(false);
            });
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, dirty, touched, errors, isValid, values, isSubmitting } = formik;

    const checkEmailDuplicate = (email) => {
        const body = { email };
        simplefetch('post', '/user/check_duplicate.php', { body })
        .then(() => { showSnackbar('사용할 수 있습니다.') })
        .catch(basicErrorHandler);
    }

    const checkNicknameDuplicate = (nickname) => {
        const body = { nickname };
        simplefetch('post', '/user/check_duplicate.php', { body })
        .then(() => { showSnackbar('사용할 수 있습니다.') })
        .catch(basicErrorHandler);
    }

    const onMobileAuthenticated = ({id, mobile}) => {
        setFieldValue('mobile', mobile);
        setFieldValue('mobileAuthenticated', true);
    }

    const rePasswordRef = useRef();
    const nameRef = useRef();

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'회원가입'} useHome={false} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingBottom: 50, paddingHorizontal: 20 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>{'회원가입\n기본정보를 입력해 주세요.'}</Text>
                
                <View style={styles.item}>
                    {Label('아이디*', touched.email && errors.email)}
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[cstyles.input, { flex: 1, marginRight: 10 }]}
                            placeholder='이메일 형식으로 아이디 입력'
                            placeholderTextColor={colors.placeholderColor}
                            textContentType={'emailAddress'}
                            keyboardType={'email-address'}
                            returnKeyType="search"
                            autoCapitalize='none'
                            autoFocus={true}
                            onSubmitEditing={() => { checkEmailDuplicate(values.email) }}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Button mode="outlined" onPress={() => { checkEmailDuplicate(values.email); }} disabled={!values.email} style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>중복확인</Button>
                    </View>
                </View>

                <View style={styles.item}>
                    {Label('비밀번호*', (touched.password && errors.password) || (touched.re_password && errors.re_password))}
                    <TextInput
                        style={[cstyles.input, { marginBottom: 10 }]}
                        placeholder='비밀번호 입력 (7자이상, 숫자/영문자 포함)'
                        placeholderTextColor={colors.placeholderColor}
                        textContentType={'newPassword'}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={() => { rePasswordRef.current.focus(); }}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <TextInput
                        ref={rePasswordRef}
                        style={[cstyles.input]}
                        placeholder='비밀번호 재입력'
                        placeholderTextColor={colors.placeholderColor}
                        textContentType={'newPassword'}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={() => { nameRef.current.focus(); }}
                        onChangeText={handleChange('re_password')}
                        onBlur={handleBlur('re_password')}
                        value={values.re_password}
                    />
                </View>

                <View style={styles.item}>
                    {Label('이름*', touched.name && errors.name)}
                    <TextInput
                        ref={nameRef}
                        style={[cstyles.input]}
                        placeholder='이름 입력'
                        placeholderTextColor={colors.placeholderColor}
                        textContentType={'name'}
                        returnKeyType="done"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                </View>

                <View style={styles.item}>
                    {Label(values.mobileAuthenticated ? '휴대폰번호* (인증완료)' : '휴대폰번호*', mobileError || (touched.mobileAuthenticated && errors.mobileAuthenticated))}
                    <MobileAuth setError={setMobileError} callback={onMobileAuthenticated} />
                </View>

                <View style={styles.item}>
                    {Label('닉네임*', touched.nickname && errors.nickname)}
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <TextInput
                            style={[cstyles.input, { flex: 1, marginRight: 10 }]}
                            placeholderTextColor={colors.textSecondary}
                            placeholder={'닉네임 입력'}
                            textContentType={'nickname'}
                            returnKeyType="search"
                            onSubmitEditing={() => { checkNicknameDuplicate(values.nickname); }}
                            onChangeText={handleChange('nickname')}
                            onBlur={handleBlur('nickname')}
                            value={values.nickname}
                        />
                        <Button onPress={() => { checkNicknameDuplicate(values.nickname) }} disabled={!values.nickname} mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>중복확인</Button>
                    </View>
                </View>

                <Button onPress={handleSubmit}>다음</Button>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item: { marginBottom: 30 },
});

export default PasswordSignupScreen;
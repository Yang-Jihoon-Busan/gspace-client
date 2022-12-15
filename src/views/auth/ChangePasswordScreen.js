import React, { useState, useContext, useMemo } from 'react';
import { View, TextInput, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';
import { AppContext } from '../../contexts/app-context';
import { basicErrorHandler } from '../../config/http-error-handler';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Label from '../../components/Label';


// FindPasswordScreen 을 경유해서 오는 방법 밖에 없음
const ChangePasswordScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const info = useMemo(() => {
        if (route.params?.authLogId && route.params?.userId) {
            const result = {
                authLogId: route.params.authLogId,
                userId: route.params.userId,
            };
            return result;
        }
        
        // debugging
        // else {
        //     return ({
        //         authLogId: 13,
        //         userId: 1,
        //     })
        // }
        // end: debugging
    }, [ route.params ]);

    const formik = useFormik({
        initialValues: {
            password: '',
            re_password: '',
        },
        validationSchema: yup.object().shape({
            password: yup.string().required('비밀번호를 입력해주세요.').max(50, '비밀번호가 너무 깁니다.').matches(/^(?=.*[A-Za-z])(?=.*\d).{7,}$/, '7자이상, 숫자/영문자 포함'),
            re_password: yup.string().required('비밀번호 확인란을 입력해주세요.').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
        }),
        onSubmit: (values, { setSubmitting }) => {
            const body = {
                new_password: values.password,
                auth_log_id: info?.authLogId,
                user_id: info?.userId,
            };
            simplefetch('post', '/auth/change_password_by_authcode.php', { body })
            .then(() => {
                setSuccessModalOpen(true);
            })
            .catch(basicErrorHandler)
            .finally(() => { 
                setSubmitting(false);
            });
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, dirty, touched, errors, isValid, values, isSubmitting } = formik;

    const [ successModalOpen, setSuccessModalOpen ] = useState(false);
    const onConfirmPress = () => {
        setSuccessModalOpen(false);
        setTimeout(() => {
            navigation.navigate('Signin')
        }, 500);
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'새 비밀번호 입력'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                {Label('새 비밀번호*', (touched.password && errors.password) || (touched.re_password && errors.re_password))}
                <TextInput
                    style={[cstyles.input]}
                    placeholder='비밀번호 입력 (숫자, 특수기호 포함한 7~15자)'
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
                    style={[cstyles.input, { marginTop: 10, marginBottom: 50 }]}
                    placeholder='비밀번호 재입력'
                    placeholderTextColor={colors.placeholderColor}
                    textContentType={'newPassword'}
                    secureTextEntry={true}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                    onChangeText={handleChange('re_password')}
                    onBlur={handleBlur('re_password')}
                    value={values.re_password}
                />
                <Button onPress={handleSubmit}>확인</Button>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={successModalOpen}
                onRequestClose={() => { setSuccessModalOpen(false); }}
            >
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 200, paddingLeft: 20 }}>
                    <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: 'bold' }}>{'비밀번호 변경이\n완료되었습니다.'}</Text>
                    <Text style={{ marginBottom: 50, color: colors.textSecondary }}>{'변경하신 비밀번호로\nG SPACE를 이용하실 수 있습니다.'}</Text>
                    <Button onPress={onConfirmPress}>확인</Button>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default ChangePasswordScreen;
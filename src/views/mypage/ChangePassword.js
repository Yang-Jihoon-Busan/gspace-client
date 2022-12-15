import React, { useContext, useRef } from 'react';
import { View, TextInput } from 'react-native';
import Button from '../../components/Button';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';
import { AppContext } from '../../contexts/app-context';
import Label from '../../components/Label';
import { useFormik } from 'formik';
import * as yup from 'yup';


const ChangePassword = ({ route, navigation }) => {
    const { simplefetch, showSnackbar } = useContext(AppContext);
    
    const formik = useFormik({
        initialValues: {
            old_password: '',
            password: '',
            re_password: '',
        },
        validationSchema: yup.object().shape({
            old_password: yup.string().required('이전 비밀번호를 입력해주세요.'),
            password: yup.string().required('새 비밀번호를 입력해주세요.').max(50, '비밀번호가 너무 깁니다.').matches(/^(?=.*[A-Za-z])(?=.*\d).{7,}$/, '7자이상, 숫자/영문자 포함'),
            re_password: yup.string().required('비밀번호 확인란을 입력해주세요.').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            const body = {
                old_password: values.old_password,
                new_password: values.password,
            };
            simplefetch('post', '/auth/change_password.php', { body })
            .then(() => {
                showSnackbar('비밀번호를 변경했습니다.');
                resetForm();
            })
            .catch(basicErrorHandler)
            .finally(() => { 
                setSubmitting(false);
            });
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, dirty, touched, errors, isValid, values, isSubmitting } = formik;

    const passwordRef = useRef();
    const rePasswordRef = useRef();

    return (
        <>
            {Label('비밀번호 변경', (touched.old_password && errors.old_password) || (touched.password && errors.password) || (touched.re_password && errors.re_password))}
            <TextInput
                style={[cstyles.input]}
                placeholder='이전 비밀번호 입력'
                placeholderTextColor={colors.placeholderColor}
                textContentType={'newPassword'}
                secureTextEntry={true}
                returnKeyType="next"
                onSubmitEditing={() => { passwordRef.current.focus(); }}
                onChangeText={handleChange('old_password')}
                onBlur={handleBlur('old_password')}
                value={values.old_password}
            />
            <TextInput
                ref={passwordRef}
                style={[cstyles.input, { marginTop: 10 }]}
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
                ref={rePasswordRef}
                style={[cstyles.input, { marginTop: 10 }]}
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
            <View style={{ marginTop: 30 }}><Button onPress={handleSubmit}>비밀번호 변경</Button></View>
        </>
    );
}

export default ChangePassword;
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
import ErrorText from '../../components/ErrorText';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CheckInput from '../../components/CheckInput';



const SigninScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);
    const { setAuthInfo, pairWithAppInstance } = useContext(AuthContext);

    const { handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, dirty, touched, errors, isValid, values, isSubmitting } = useFormik({
        initialValues: {
            id: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            id: yup.string().required('아이디를 입력해주세요.'),
            password: yup.string().required('비밀번호를 입력해주세요.'),
        }),
        onSubmit: (values) => {
            const url = env.production ? '/auth/login.php' : '/auth/login_dev.php';
            const params = {
                id: values.id, password: values.password
            };
            simplefetch('get', url, { params })
            .then((authinfo) => setAuthInfo(authinfo))
            .then(() => pairWithAppInstance())
            .catch(basicErrorHandler);
        },
    });

    const handleSignup = () => {

    }

    const handleNaver = () => {

    }

    const handleKakao = () => {

    }

    const handleGoogle = () => {

    }

    const handleApple = () => {

    }

    const handleFindId = () => {

    }

    const handleFindPassword = () => {
        
    }

    // focus
    const [ idFocused, setIdFocused] = useState(false);
    const [ passwordFocused, setPasswordFocused ] = useState(false);

    const passwordRef = useRef();

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />

            <View style={{ padding: 20 }}>
                <Image style={{ width: 150, height: 115 }} />

                <View style={{ marginTop: 50 }}>
                    <View>
                        <TextInput
                            style={{ paddingVertical: 6, fontSize: 15, color: colors.textPrimary, borderColor: colors.borderColor, borderBottomWidth: 1 }}
                            placeholder={'아이디(이메일) 입력'}
                            placeholderTextColor={colors.placeholderColor}
                            autoCapitalize={'none'}
                            returnKeyType="next"
                            onSubmitEditing={() => { passwordRef.current.focus(); }}
                            onChangeText={handleChange('id')}
                            onBlur={handleBlur('id')}
                            onFocus={() => { setIdFocused(true); }}
                            value={values.id}
                        />
                        <ErrorText error={errors?.id} />
                    </View>
                    
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            ref={passwordRef}
                            style={{ paddingVertical: 6, fontSize: 15, color: colors.textPrimary, borderColor: colors.borderColor, borderBottomWidth: 1 }}
                            textContentType={'password'}
                            secureTextEntry={true}
                            placeholder={'비밀번호 입력'}
                            placeholderTextColor={colors.placeholderColor}
                            autoCapitalize={'none'}
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            onFocus={() => { setPasswordFocused(true); }}
                            value={values.password}
                        />
                        <ErrorText error={errors?.password} />
                    </View>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' , alignItems: 'center' }}>
                        <CheckInput />
                        <Text>자동 로그인</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderRightWidth: 1, borderColor: 'white', paddingRight: 6, marginRight: 6 }}>
                            <TouchableWithoutFeedback onPress={handleFindId}>
                                <Text>아이디찾기</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        
                        <TouchableWithoutFeedback onPress={handleFindPassword}>
                            <Text>비밀번호찾기</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <View style={{ marginTop: 48, marginBottom: 30 }}>
                    <Button onPress={handleSubmit}>로그인</Button>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={handleSignup}>
                        <Text style={{ textDecorationLine: 'underline' }}>회원가입</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ marginTop: 48, alignItems: 'center' }}>
                    <Text>SNS 로그인</Text>
                    <View style={{ marginTop: 20, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.snsButtonWrapper} onPress={handleNaver}>
                            <Image style={styles.snsButton} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.snsButtonWrapper} onPress={handleKakao}>
                            <Image style={styles.snsButton} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.snsButtonWrapper} onPress={handleGoogle}>
                            <Image style={styles.snsButton} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.snsButtonWrapper} onPress={handleApple}>
                            <Image style={styles.snsButton} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    snsButtonWrapper: { width: 44, height: 44, marginHorizontal: 15, borderColor: 'white', borderRadius: 22 },
    snsButton: { width: '100%', height: '100%' }
});

export default SigninScreen;
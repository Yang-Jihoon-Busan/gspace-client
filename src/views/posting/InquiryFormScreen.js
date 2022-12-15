import React, { useState, useContext, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
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
import ErrorText from '../../components/ErrorText';


const InquiryFormScreen = ({ route, navigation }) => {
    const { simplefetch, showSnackbar, showAlert, openImagePicker } = useContext(AppContext);

    // photos
    const [ photos, setPhotos ] = useState([]);
    const handleAddPhoto = () => {
        if (photos.length > 2) return showAlert('사진은 최대 3장까지 등록가능합니다.');

        const limit = 3 - photos.length;
        openImagePicker(limit, assets => {
            setPhotos(result => result.concat(assets));
        });
    }
    // end: photos

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
        },
        validationSchema: yup.object().shape({
            title: yup.string().required('제목을 입력해주세요.').max(100, '제목은 100자 이내로 입력해 주세요.'),
            content: yup.string().required('문의내용을 입력해주세요.').max(250, '문의내용은 250자 이내로 입력해 주세요.'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const body = {
                    ...values,
                };
                const { id } = await simplefetch('post', '/inquiry/add_inquiry.php', { body });

                if (photos.length) {
                    const data = new FormData();
                    data.append('category', 'inquiry');
                    data.append('ref_id', id);
                    photos.forEach(asset => {
                        data.append('files[]', {
                            name: asset.fileName,
                            type: asset.type,
                            uri: asset.uri,
                        });
                    });
                    const options = {
                        division: 'form',
                        body: data,
                    };
                    await simplefetch('post', '/common/add_fileinfos.php', options);
                }
    
                showSnackbar('제출했습니다.'); 
                navigation.navigate('MyInquiry', { need_refresh: true });
                setSubmitting(false);
            }
            catch(error) { basicErrorHandler(error); }
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, dirty, touched, errors, isValid, values, isSubmitting } = formik;

    const contentRef = useRef();

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'문의하기'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <TextInput
                    style={cstyles.input}
                    placeholder={'제목을 입력해 주세요.'}
                    placeholderTextColor={colors.placeholderColor}
                    returnKeyType="next"
                    autoCapitalize='none'
                    autoFocus={true}
                    onSubmitEditing={() => { contentRef.current?.focus(); }}
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                />
                <ErrorText error={touched.title && errors.title} />

                <TextInput
                    ref={contentRef}
                    style={{ marginTop: 10, paddingHorizontal: 15, paddingVertical: 12, height: 176, borderColor: colors.borderColor, borderWidth: 1, color: colors.textPrimary, fontSize: 15 }}
                    placeholder={'최소 10자 이상 입력해주세요.\n문의 내용 입력해 주세요.'}
                    placeholderTextColor={colors.placeholderColor}
                    textAlignVertical="top"
                    multiline
                    returnKeyType="done"
                    autoCapitalize='none'
                    onChangeText={handleChange('content')}
                    onBlur={handleBlur('content')}
                    value={values.content}
                />
                <ErrorText error={touched.content && errors.content} />
                
                <View style={{ marginTop: 20 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', height: 82 }}>
                            <TouchableOpacity onPress={handleAddPhoto} style={{ width: 82, marginRight: 10, borderColor: 'white', borderWidth: 1 }}></TouchableOpacity>
                            {photos.map((photo, idx) => <View key={idx} style={{ width: 82, height: '100%', marginRight: 10 }}>
                                <Image style={{ width: '100%', height: '100%' }} source={{ uri: photo.uri }} />
                            </View>)}
                        </View>
                    </ScrollView>
                </View>
                
                <Text style={{ marginTop: 20, marginBottom: 30, fontSize: 13, color: colors.textSecondary }}>*최대 3장 까지 가능합니다.</Text>

                <Button onPress={handleSubmit} loading={isSubmitting}>완료</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default InquiryFormScreen;
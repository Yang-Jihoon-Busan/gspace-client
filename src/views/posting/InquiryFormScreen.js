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



const InquiryFormScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'문의하기'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <TextInput
                    style={cstyles.input}
                    placeholder={'제목을 입력해 주세요.'}
                    placeholderTextColor={colors.placeholderColor}
                />

                <TextInput
                    style={{ marginTop: 10, paddingHorizontal: 15, paddingVertical: 12, height: 176, borderColor: colors.borderColor, borderWidth: 1, color: colors.textPrimary, fontSize: 15 }}
                    placeholder={'최소 10자 이상 입력해주세요.\n문의 내용 입력해 주세요.'}
                    placeholderTextColor={colors.placeholderColor}
                    textAlignVertical="top"
                    multiline
                />

                <View style={{ marginTop: 20, flexDirection: 'row', height: 82 }}>
                    <View style={{ width: 82, borderColor: 'white', borderWidth: 1 }}></View>

                </View>

                <Text style={{ marginTop: 20, marginBottom: 30, fontSize: 13, color: colors.textSecondary }}>*최대 3장 까지 가능합니다.</Text>

                <Button>완료</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default InquiryFormScreen;
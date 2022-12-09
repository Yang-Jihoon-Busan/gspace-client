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



const FindPasswordScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'비밀번호 찾기'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>비밀번호 찾기</Text>

                <Text style={{ fontSize: 18, marginBottom: 10 }}>아이디*</Text>
                <TextInput
                    style={[cstyles.input]}
                    placeholder='이메일형식으로 아이디 입력'
                    placeholderTextColor={colors.placeholderColor}
                />
                
                <View style={{ marginTop: 30 }}>
                    <MobileAuth />
                </View>

                <View style={{ marginTop: 50 }}><Button>확인</Button></View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default FindPasswordScreen;
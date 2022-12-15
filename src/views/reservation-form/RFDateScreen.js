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



const RFDateScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const handleConfirm = () => {

    }

    const handleCancel = () => {}

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'방문 예약 일정'} useHome={false} />

            <View style={{ backgroundColor: colors.card, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18 }}>2022년 10월 23일</Text>
            </View>

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                <Text>{'2022년 10월'}</Text>

                {/* Calendar: 하트헬프의 카렌더 라이브러리 사용할 수 있을 것 같은데 확인해보기 */}

                <View style={{ marginTop: 20 }}><Button onPress={handleConfirm}>선택완료</Button></View>
                <View style={{ marginTop: 10 }}><Button onPress={handleCancel} style={{ backgroundColor: colors.background }} textStyle={{ color: 'white', textDecorationLine: 'underline' }}>취소</Button></View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default RFDateScreen;
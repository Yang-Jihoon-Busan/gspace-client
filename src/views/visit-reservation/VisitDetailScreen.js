import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, ImageBackground } from 'react-native';
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
import VisitDetail from './VisitDetail';
import InfoItem from '../../components/InfoItem';


// VisitDetail.js 에서 어떻게든 공통으로 묶어서 사용할 것
const VisitDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'방문예약상세'} useHome={false} />

            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                    <InfoItem label={'방문예약상태'} content={'2022년 7월 2일'} />
                    <InfoItem label={'신청일'} content={'오후 2시 0분'} />
                    <InfoItem label={'접수번호'} content={'01012345678'} />
                    <ImageBackground style={{ padding: 20, marginVertical: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>G House 091 종로</Text>
                        <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>Room 1</Text>
                        <Text>방문예약일 2022년 7월 2일 오후 2시 00분</Text>
                    </ImageBackground>
                    <InfoItem label={'방문일'} content={'2022년 7월 2일'} />
                    <InfoItem label={'방문시간'} content={'오후 2시'} />
                    <InfoItem label={'방문인'} content={'홍길동'} />
                    <InfoItem label={'연락처'} content={'01012345678'} />
                    <InfoItem label={'IOT (도어락)'} content={'*예약시간 5분전~15분후까지 사용가능'} />
                </ScrollView>
                
                <Button>예약취소</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default VisitDetailScreen;
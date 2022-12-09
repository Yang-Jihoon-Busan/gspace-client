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
import BlackButton from '../../components/BlackButton';
import SectionTitle from '../../components/SectionTitle';
import InfoItem from '../../components/InfoItem';



const VisitDetail = ({ room }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <View style={styles.section}>
            <SectionTitle>방문예약상세</SectionTitle>

            <Text style={{ fontSize: 18 }}>신청일 2022년 7월 1일</Text>
            <Text style={{ fontSize: 18 }}>접수번호 12345</Text>

            <ImageBackground style={{ padding: 20, marginVertical: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>G House 091 종로</Text>
                <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>Room 1</Text>
                <Text>방문예약일 2022년 7월 2일 오후 2시 00분</Text>
            </ImageBackground>

            <InfoItem label={'방문일'} content={'2022년 7월 2일'} />
            <InfoItem label={'방문시간'} content={'오후 2시 0분'} />
            <InfoItem label={'연락처'} content={'01012345678'} />
            <InfoItem label={'비고'} content={'비고내용'} />
        </View>
    );
}


const styles = StyleSheet.create({
    section: {paddingVertical: 30},
});

export default VisitDetail;
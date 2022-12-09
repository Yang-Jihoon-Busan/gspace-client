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
import InfoItem from '../../components/InfoItem';
import HorizontalLine from '../../components/HorizontalLine';



const ResidenceDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    
    // ResedenceDetail.js 에서 어떻게든 공통으로 묶어서 사용할 것 
    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'이용예약상세'} useHome={false} />

            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                    <InfoItem label={'이용예약상태'} content={'2022년 7월 2일'} />
                    <InfoItem label={'신청일'} content={'오후 2시 0분'} />
                    <InfoItem label={'접수번호'} content={'01012345678'} />
                    <ImageBackground style={{ padding: 20, marginVertical: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>G House 091 종로</Text>
                        <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>Room 1</Text>
                        <Text>방문예약일 2022년 7월 2일 오후 2시 00분</Text>
                    </ImageBackground>
                    <InfoItem label={'이용구분'} content={'단기거주'} />
                    <InfoItem label={'이용예약일'} content={'2022년 7월 2일 ~ 8월 1일'} />
                    <View style={cstyles.infoItem}>
                        <Text style={[cstyles.infoLabel, { marginBottom: 5 }]}>{'체크인 / 아웃'}</Text>
                        <Text style={[cstyles.infoContent, {marginBottom: 4}]}>{'체크인 00:00'}</Text>
                        <Text style={cstyles.infoContent}>{'체크아웃 00:00'}</Text>
                    </View>
                    <InfoItem label={'예약인'} content={'홍길동'} />
                    <InfoItem label={'연락처'} content={'01012345678'} />
                    
                    <HorizontalLine style={{ marginTop: 20, marginBottom: 20 }} />

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18 }}>결제금액</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>55,000원</Text>
                        </View>
                        <Text style={{ marginTop: 4, marginBottom: 20, alignSelf: 'flex-end', color: colors.textSecondary, fontSize: 14, textAlign: 'right' }}>{'계약금 100,000원 + 월세 560,000원\n이후 매달 월세 560,000원씩 4개월청구'}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18 }}>결제수단</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>카드결제</Text>
                        </View>
                    </View>
                    
                </ScrollView>
                
                <Button>예약취소</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default ResidenceDetailScreen;
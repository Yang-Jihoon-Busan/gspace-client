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



const HouseDetail = ({ house }) => {
    const { simplefetch } = useContext(AppContext);

    const handleReview = () => {}

    const handleBlack = () => {

    }

    const dimensions = useWindowDimensions();

    const imageHeight = useMemo(() => {
        return dimensions.width / 2 * 3;
    }, [ dimensions ]);

    

    return (
        <>
            <ImageBackground source={null} resizeMode="cover" style={{ height: imageHeight, width: '100%', flexDirection: 'column-reverse', padding: 20 }}>
                <Text style={{ fontSize: 24 }}>종로</Text>
                <Text style={{ fontSize: 24 }}>G HOUSE 01</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 13 }}>김사장</Text>
                    <Image style={{ width: 30, height: 30, leftMarin: 6 }} />
                </View>
            </ImageBackground>

            <View style={{ backgroundColor: colors.background, padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: 82, height: 24, borderRadius: 12, borderColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}><Text>유인운영</Text></View>
                    <Image style={{ width: 30, height: 30, borderRadius: 15 }} resizeMode={'cover'}  />
                </View>
                
                <Text style={{ marginTop: 10, fontSize: 13, color: colors.textSecondary }}>dfkjaksdjflsajdklf </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 }}>
                    <TouchableWithoutFeedback onPress={handleReview}><Text style={{ fontSize: 13, textDecorationLine: 'underline' }}>이용후기 (100)</Text></TouchableWithoutFeedback>
                    <BlackButton onPress={handleBlack} />
                </View>

                <View style={{ borderColor: colors.borderColor, borderTopWidth: 1, marginTop: 23, paddingVertical: 20, flexDirection: 'row' }}>
                    <Text>IoT 조명제어 수영장</Text>
                </View>

                <View style={styles.section}>
                    <SectionTitle>방리스트</SectionTitle>

                </View>

                <View style={styles.section}>
                    <SectionTitle>위치</SectionTitle>

                    <Text style={{ fontSize: 18 }}>서울특별시 용산구 남영동 88-1</Text>
                </View>

                <View style={styles.section}>
                    <SectionTitle>기본구성</SectionTitle>

                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>기본구성 및 포함내역</Text>
                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>- 전 객실 개별욕실</Text>
                </View>


                <View style={styles.section}>
                    <SectionTitle>편의시설</SectionTitle>

                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>기본구성 및 포함내역</Text>
                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>- 전 객실 개별욕실</Text>
                </View>

                <View style={styles.section}>
                    <SectionTitle>안전물품</SectionTitle>

                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>화재경보기  구급상자  일산화탄소  경보기  객실 잠금장치</Text>
                </View>

                <View style={styles.section}>
                    <SectionTitle>서비스</SectionTitle>

                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>매주 공용공간 청소</Text>
                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>정기적 시설관리</Text>
                    <Text style={{ fontSize: 18, color: colors.textSecondary }}>안시설 (KT 텔레캅/CCTV)</Text>
                </View>

                <View style={styles.section}>
                    <SectionTitle>후기</SectionTitle>

                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    section: {paddingVertical: 30},
});

export default HouseDetail;
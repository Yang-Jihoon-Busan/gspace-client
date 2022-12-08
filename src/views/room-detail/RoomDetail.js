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



const RoomDetail = ({ room }) => {
    const { simplefetch } = useContext(AppContext);

    const dimensions = useWindowDimensions();

    const imageHeight = useMemo(() => {
        return dimensions.width / 4 * 3;
    }, [ dimensions ]);

    

    return (
        <>
            <Image style={{ width: '100%', height: imageHeight }} />

            <View style={{ backgroundColor: colors.background, padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Room1</Text>
                    <Image style={{ width: 20, height: 17 }} />
                </View>
                <Text style={{ color: colors.textSecondary, fontSize: 13 }}>새로운 영감을 떠오르게하는 감각적인 하우스</Text>

                <View style={styles.section}>
                    <SectionTitle>금액</SectionTitle>

                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>장기거주</Text>
                        <Text style={{ color: colors.textSecondary }}>최소거주기간: 2개월</Text>
                        <Text style={{ color: colors.textSecondary }}>위 금액은 관리비 포함된 가격입니다. (수도, 전기, 가스, 인터넷)</Text>

                        {/* 월세, 보증금 표 */}
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>단기거주</Text>
                        
                        <Text style={{ color: colors.textSecondary }}>단기거주</Text>
                        {/* 단기거주 표 */}
                    </View>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    section: {paddingVertical: 30},
});

export default RoomDetail;
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
import SectionTitle from '../../components/SectionTitle';
import CheckInput from '../../components/CheckInput';



const RsdReservationFormScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const dimensions = useWindowDimensions();
    const imageHeight = useMemo(() => {
        return dimensions.width / 5 * 2;
    }, [ dimensions ]);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'이용에약'} />

            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, paddingBottom: 40, paddingTop: 20 }}>
                    <View style={styles.section}>
                        <SectionTitle>선택 방</SectionTitle>

                        <Image style={{ marginVertical: 10, width: '100%', height: imageHeight }} resizeMode='cover' />

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Room1</Text>
                        <Text sylte={{ color: colors.textSecondary }}>최대 2인, 모던 컨셉, 따뜻한 조명</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <SectionTitle>이용구분</SectionTitle>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckInput />
                            <Text>단기거주</Text>
                            <Text style={{ marginLeft: 4, color: colors.textSecondary }}>(2개월 미만)</Text>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <CheckInput />
                            <Text>장기거주</Text>
                            <Text style={{ marginLeft: 4, color: colors.textSecondary }}>(2개월 이상)</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <SectionTitle>이용날짜</SectionTitle>
                    </View>

                    <View style={styles.section}>
                        <SectionTitle>방문정보</SectionTitle>
                        
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ marginBottom: 12, fontSize: 14 }}>예약인</Text>
                            <TextInput
                                style={cstyles.input}
                            />
                        </View>
                        
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ marginBottom: 12, fontSize: 14 }}>연락처</Text>
                            <TextInput
                                style={cstyles.input}
                            />
                        </View>

                        <View style={{ marginTop: 20, paddingVertical: 30, borderColor: colors.borderColor, borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14 }}>총 결제 예정금액</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>55,000원</Text>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CheckInput />
                                <Text>전체동의합니다.</Text>
                            </View>
                            <View style={{ marginTop: 10, borderColor: colors.borderColor, borderWidth: 1, padding: 20 }}>
                                <Text style={{ marginBottom: 15 }}>14세이상입니다.</Text>
                                <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>개인정보 처리방침 동의</Text>
                                    <Text style={{ color: colors.textSecondary, textDecorationLine: 'underline' }}>자세히보기</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>서비스 이용약관 동의</Text>
                                    <Text style={{ color: colors.textSecondary, textDecorationLine: 'underline' }}>자세히보기</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>

                </View>

            </ScrollView>

            <Button>예약하기</Button>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    section: { paddingVertical: 30 },
});

export default RsdReservationFormScreen;
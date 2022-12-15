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


const VisitFormScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const dimensions = useWindowDimensions();
    const imageHeight = useMemo(() => {
        return dimensions.width / 5 * 2;
    }, [ dimensions ]);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'방문에약'} />

            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, paddingBottom: 40, paddingTop: 20 }}>
                    <View style={styles.section}>
                        <SectionTitle>선택 방</SectionTitle>

                        <Image style={{ marginVertical: 10, width: '100%', height: imageHeight }} resizeMode='cover' />

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Room1</Text>
                        <Text sylte={{ color: colors.textSecondary }}>최대 2인, 모던 컨셉, 따뜻한 조명</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <SectionTitle>방문일</SectionTitle>
                    </View>

                    <View style={styles.section}>
                        <SectionTitle>방문시간</SectionTitle>
                        
                        <View style={{ marginVertical: 10 }}>
                            <TextInput
                                style={[cstyles.input, { width: 200 }]}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <SectionTitle>방문정보</SectionTitle>
                        
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ marginBottom: 12, fontSize: 14 }}>방문인</Text>
                            <TextInput
                                style={cstyles.input}
                                placeholder={'방문인 이름을 입력해주세요.'}
                                placeholderTextColor={colors.placeholderColor}
                            />
                        </View>
                        
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ marginBottom: 12, fontSize: 14 }}>연락처</Text>
                            <TextInput
                                style={cstyles.input}
                                placeholder={'연락처를 이름을 입력해주세요.'}
                                placeholderTextColor={colors.placeholderColor}
                            />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ marginBottom: 12, fontSize: 14 }}>연락처</Text>
                            <TextInput
                                style={cstyles.input}
                                placeholder={'비고'}
                                placeholderTextColor={colors.placeholderColor}
                            />
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <CheckInput />
                            <Text>개인정보 처리방침 동의</Text>
                            <Text style={{ marginLeft: 'auto', color: colors.textSecondary, textDecorationLine: 'underline' }}>자세히보기</Text>
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

export default VisitFormScreen;
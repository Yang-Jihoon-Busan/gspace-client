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



const MypageScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const handleModify = () => {

    }

    const handleSignout = () => {
        
    }

    const handleToggleRole = () => {

    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'마이페이지'} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }} />
                    <Text style={{ marginTop: 10, marginBottom: 4, fontSize: 18 }}>nickname</Text>
                    <TouchableWithoutFeedback onPress={handleModify}><Text style={{ fontSize: 13, textDecorationLine: 'underline' }}>변경</Text></TouchableWithoutFeedback>

                    <View style={{ alignSelf: 'stretch', marginTop: 20 }}><Button onPress={handleModify}>내정보수정</Button></View>
                </View>

                <View style={cstyles.section}>
                    <SectionTitle>이용내역</SectionTitle>
                    <View style={styles.menu}><Text style={styles.menuText}>방문예약</Text></View>
                    <View style={styles.menu}><Text style={styles.menuText}>계약관리</Text></View>
                    <View style={styles.menu}><Text style={styles.menuText}>이용내역</Text></View>
                    <View style={styles.menu}><Text style={styles.menuText}>이용후기</Text></View>
                </View>

                <View style={cstyles.section}>
                    <SectionTitle>고객센터</SectionTitle>
                    <View style={styles.menu}><Text style={styles.menuText}>FAQ</Text></View>
                    <View style={styles.menu}><Text style={styles.menuText}>1:1 문의하기</Text></View>
                    <View style={styles.menu}><Text style={styles.menuText}>공지사항</Text></View>
                </View>

                <View style={cstyles.section}>
                    <SectionTitle>이벤트</SectionTitle>
                    <View style={styles.menu}><Text style={styles.menuText}>이벤트</Text></View>
                </View>

                <View style={cstyles.section}>
                    <SectionTitle>설정</SectionTitle>
                    <View style={styles.menu}><Text style={styles.menuText}>설정</Text></View>
                </View>

                <Button onPress={handleToggleRole} style={{ backgroundColor: colors.background, borderWidth: 1, borderColor: 'white' }} textStyle={{ color: colors.textPrimary }}>임대인모드로 전환하기</Button>

                <View style={{ marginTop: 30, alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={handleSignout}><Text style={{ textDecorationLine: 'underline' }}>로그아웃</Text></TouchableWithoutFeedback>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    menu: { height: 58, borderColor: colors.borderColor, borderBottomWidth: 1, justifyContent: 'center' },
    menuText: { fontSize: 18 },
});

export default MypageScreen;
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
import ResidenceDetail from './ResidenceDetail';


const ResidneceDoneScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'이용예약'} useHome={false} />

            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20, paddingBottom: 30 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{'이용예약 신청이\n완료되었습니다.'}</Text>
                    <Text style={{ color: colors.textSecondary }}>{'관리자 확인후 예약확정됩니다.\n잠시만 기다려주세요.'}</Text>

                    <View style={{ marginTop: 30 }}><Button>확인</Button></View>
                    <View style={{ marginTop: 10 }}><Button style={{ backgroundColor: colors.card }} textStyle={{ color: 'white' }}>이용예약확인하기</Button></View>

                    <View>
                        <ResidenceDetail />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default ResidneceDoneScreen;
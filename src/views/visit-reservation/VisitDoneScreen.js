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
import VisitDetail from './VisitDetail';


const VisitDoneScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'방문예약'} useHome={false} />

            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{'방문예약 신청이\n완료되었습니다.'}</Text>

                    <View style={{ marginTop: 30 }}><Button>확인</Button></View>
                    <View style={{ marginTop: 10 }}><Button style={{ backgroundColor: colors.card }} textStyle={{ color: 'white' }}>방문예약내역확인</Button></View>

                    <View>
                        <VisitDetail />    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default VisitDoneScreen;
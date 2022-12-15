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







const RFFacilityScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    // 서버에서 편의시설 목록 받아서 화면에 뿌릴 것


    const handleConfirm = () => {

    }

    const handleCancel = () => {}

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'필터'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>

                <View style={{ marginTop: 20 }}><Button onPress={handleConfirm}>선택완료</Button></View>
                <View style={{ marginTop: 10 }}><Button onPress={handleCancel} style={{ backgroundColor: colors.background }} textStyle={{ color: 'white', textDecorationLine: 'underline' }}>취소</Button></View>    
            </View>

            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    section: { paddingVertical: 24, borderColor: colors.borderColor, borderBottomWidth: 1 },
    subtitle: { fontSize: 18, marginBottom: 6 },
    // itemWrapper: { margin }
});

export default RFFacilityScreen;
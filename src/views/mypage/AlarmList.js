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



const AlarmList = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Item = (alarm) => (
        <View style={{ borderColor: colors.borderColor, borderBottomWidth: 1, paddingVertical: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>[예약] 계약 매물 확인</Text>
            <Text style={{ color: colors.textSecondary, marginBottom: 5 }}>매물계약이 확정됐습니다. 계약서를 곰꼼히 확인해보세요.</Text>
            <Text style={{ color: colors.textSecondary }}>2022.12.01</Text>
        </View>
    );

    return (

        <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50, backgroundColor: colors.background }}>
            <Text>AlarmList</Text>
        </View>
    );
}


const styles = StyleSheet.create({
});

export default AlarmList;
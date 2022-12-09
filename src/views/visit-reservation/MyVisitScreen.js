import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, Dimensions } from 'react-native';
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
import Pill from '../../components/Pill';
import Header from '../../components/Header';



const MyVisitScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const dimensions = useWindowDimensions();
    const imageHeight = useMemo(() => {
        return dimensions.width / 3 * 2;
    }, [ dimensions ]);

    const Reservation = (reservation) => (
        <View>
            <Image style={{ width: '100%', height: imageHeight }} />
            <Text style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 10 }}>2022.12.10</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>G HOUSE01</Text>
                <Pill label={'예약완료'} />
            </View>
            <Text style={{ fontSize: 18 }}>Room1</Text>
            <Text style={{ marginTop: 10, color: colors.textSecondary }}>방문예약일 2022년 11월 28일 14시</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'방문예약'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                {Reservation(null)}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default MyVisitScreen;
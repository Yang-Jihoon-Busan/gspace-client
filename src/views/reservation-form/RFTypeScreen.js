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



const RFTypeScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const handleVisit = () => {

    }

    const handleUse = () => {

    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'타입 선택'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>G-SPACE</Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>타입을 선택해 주세요.</Text>

                <View style={{ marginTop: 30, flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.card, { marginRight: 10 }]} onPress={handleVisit}>
                        <Image />
                        <Text style={{ fontSize: 18 }}>방문예약 할</Text>
                        <Text style={{ fontSize: 18 }}>하우스찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={handleUse}>
                        <Image />
                        <Text style={{ fontSize: 18 }}>이용 할</Text>
                        <Text style={{ fontSize: 18 }}>하우스찾기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    card: { flex: 1, alignItems: 'center', backgroundColor: colors.card, paddingVertical: 30 }
});

export default RFTypeScreen;
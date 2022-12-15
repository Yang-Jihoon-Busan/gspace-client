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



const SettingScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'설정'} useHome={false} />

            <View style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 50 }}>
                <View style={cstyles.section}>
                    <SectionTitle>알림</SectionTitle>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 18 }}>전체 알림</Text>
                        <Text style={{ fontSize: 18 }}>Radio input</Text>
                    </View>
                </View>

                <View style={cstyles.section}>
                    <SectionTitle>약관</SectionTitle>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 18 }}>이용약관</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 18 }}>개인정보처리방침</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    row: { height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: 'white', borderBottomWidth: StyleSheet.hairlineWidth }
});

export default SettingScreen;
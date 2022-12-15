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
import CheckInput from '../../components/CheckInput';
import HorizontalLine from '../../components/HorizontalLine';



const SignupAgreementScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const handleNextPress = () => { navigation.navigate('SignupBaseInfo'); }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'header'} useHome={false} />

            <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 20 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>{'회원가입\n약관에 동의해 주세요.'}</Text>

                <View style={styles.item}>
                    <CheckInput />
                    <Text style={styles.itemLabel}>서비스 약관동의</Text>
                </View>
                <View style={styles.item}>
                    <CheckInput />
                    <Text style={styles.itemLabel}>개인정보 처리방침</Text>
                </View>
                <View style={styles.item}>
                    <CheckInput />
                    <Text style={styles.itemLabel}>위치기반서비스 이용약관</Text>
                </View>
                <View style={styles.item}>
                    <CheckInput />
                    <Text style={styles.itemLabel}>만 14세 이상입니다.</Text>
                </View>

                <HorizontalLine style={{ marginTop: 15, marginBottom: 30 }} />

                <View style={[styles.item, { marginBottom: 50 }]}>
                    <CheckInput />
                    <Text style={styles.itemLabel}>만 14세 이상입니다.</Text>
                </View>

                <Button onPress={handleNextPress}>다음</Button>
            </View>

            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    itemLabel: { marginLeft: 10 },
});

export default SignupAgreementScreen;
import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, Modal } from 'react-native';
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
import MobileAuth from './MobileAuth';
import UnderlineButton from '../../components/UnderlineButton';



const FindIdScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const [ successModalOpen, setSuccessModalOpen ] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'아이디 찾기'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>아이디 찾기</Text>

                <MobileAuth />

                <View style={{ marginTop: 50 }}><Button onPress={() => setSuccessModalOpen(true)}>확인</Button></View>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={successModalOpen}
                onRequestClose={() => { setSuccessModalOpen(false); }}
            >
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 200, paddingLeft: 20 }}>
                    <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: 'bold' }}>{'아이디 찾기가 완료되었습니다.'}</Text>
                    <Text style={{ marginBottom: 50, color: colors.textSecondary }}>{'회원님의 아이디는\n'}<Text style={{ color: colors.textPrimary }}>id_1234@naver.com</Text>{' 입니다.'}</Text>
                    <Button onPress={() => { navigation.navigate('Home'); setSuccessModalOpen(false); }}>확인</Button>
                    <UnderlineButton onPress={() => { navigation.navigate('FindPassword')}} style={{ alignSelf: 'center', marginTop: 30 }}>비밀번호 찾기</UnderlineButton>
                </View>
            </Modal>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default FindIdScreen;
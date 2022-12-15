import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';
import { AppContext } from '../../contexts/app-context';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import UnderlineButton from '../../components/UnderlineButton';
import CheckInput from '../../components/CheckInput';
import MobileAuth from '../auth/MobileAuth';
import { AuthContext } from '../../contexts/auth-context';
import ChangePassword from './ChangePassword';
import Label from '../../components/Label';



const MyInfoEditScreen = ({ route, navigation }) => {
    const { simplefetch, showSnackbar } = useContext(AppContext);
    const { me, clearAuthInfo } = useContext(AuthContext);

    // change mobile
    const [ mobileError, setMobileError ] = useState();
    const [ mobileAuthInfo, setMobileAuthInfo ] = useState();   // {id, mobile}
    const onMobileAuthenticated = (info) => {
        setMobileAuthInfo(info);
    }
    const handleChangeMobile = () => {
        const { id, mobile } = mobileAuthInfo;
        const body = { auth_log_id: id, mobile };
        simplefetch('post', '/auth/change_mobile_by_authcode.php', { body })
        .then(() => { showSnackbar('휴대폰번호를 변경했습니다.'); });
    }
    // end: change mobile

    // leave app
    const [ leaveModalOpen, setLeaveModalOpen ] = useState(false);
    const handleLeaveApp = () => {
        simplefetch('post', '/auth/leave_app.php')
        .then(() => { 
            clearAuthInfo();
            showSnackbar('탈퇴했습니다.');
        })
        setLeaveModalOpen(false);
    }
    // end: leave app

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'내정보수정'} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 20 }}>
                <View style={styles.section}>
                    {Label('아이디*')}
                    <Text style={{ color: colors.textSecondary }}>{me.email}</Text>
                </View>

                <View style={styles.section}>
                    <ChangePassword />
                </View>

                <View style={styles.section}>
                    {Label('이름*')}
                    <Text style={{ color: colors.textSecondary }}>{me.name || '설정되지 않음'}</Text>
                </View>

                <View style={styles.section}>
                    {Label(mobileAuthInfo ? '휴대폰번호* (인증완료)' : '휴대폰번호*', mobileError)}
                    <MobileAuth callback={onMobileAuthenticated} setError={setMobileError} />
                </View>
                
                <View style={{ marginTop: 10, marginBottom: 30 }}><Button onPress={handleChangeMobile}>변경</Button></View>

                <UnderlineButton style={{ alignSelf: 'center' }} onPress={() => { setLeaveModalOpen(true); }}>회원탈퇴</UnderlineButton>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={false}
                visible={leaveModalOpen}
                onRequestClose={() => { setLeaveModalOpen(false); }}
            >
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 200, paddingLeft: 20 }}>
                    <Text style={{ marginBottom: 50, fontSize: 24, fontWeight: 'bold' }}>{'탈퇴 시 삭제/유지되는\n정보를 확인하세요.'}</Text>
                    <Text style={{ marginVertical: 10, color: colors.textSecondary }}>한번 삭제된 정보는 복구가 불가능합니다.</Text>
                    <Text>-계정 삭제</Text>
                    <Text>-이용, 결제내역 삭제</Text>
                    <View style={{ marginBottom: 50, flexDirection: 'row', alignItems: 'center' }}>
                        <CheckInput />
                        <Text style={{ marginLeft: 10 }}>확인했습니다.</Text>
                    </View>
                    <Button onPress={handleLeaveApp}>확인</Button>
                </View>
            </Modal>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    section: { marginVertical: 15 },
});

export default MyInfoEditScreen;
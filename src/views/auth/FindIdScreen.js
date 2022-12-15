import React, { useState, useContext } from 'react';
import { View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import { AppContext } from '../../contexts/app-context';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import MobileAuth from './MobileAuth';
import UnderlineButton from '../../components/UnderlineButton';
import Label from '../../components/Label';
import { basicErrorHandler } from '../../config/http-error-handler';


const FindIdScreen = ({ route, navigation }) => {
    const { simplefetch, showAlert } = useContext(AppContext);

    const [ error, setError ] = useState();

    const onMobileAuthenticated = ({ id, mobile }) => {
        const params = { auth_log_id: id };
        simplefetch('get', '/auth/find_my_id.php', { params })
        .then((users) => {
            if (users.length === 0) return showAlert('입력하신 핸드폰번호의 사용자가 없습니다.');
            setEmail(users[0].email);
            setSuccessModalOpen(true);
        })
        .catch(basicErrorHandler)
    }

    const handleConfirm = () => {
        setSuccessModalOpen(false);
        setTimeout(() => {
            // 왠지 모르겠지만 딜레이를 줘야 제대로 동작함
            navigation.navigate('Signin');    
        }, 500);
    }

    const [ email, setEmail ] = useState();
    const [ successModalOpen, setSuccessModalOpen ] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'아이디 찾기'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>아이디 찾기</Text>

                {Label('휴대폰번호*', error)}
                <MobileAuth setError={setError} callback={onMobileAuthenticated} />
            </View>

            {successModalOpen && <Modal
                animationType="slide"
                transparent={false}
                visible={successModalOpen}
                onRequestClose={() => { setSuccessModalOpen(false); }}
            >
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 200, paddingLeft: 20 }}>
                    <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: 'bold' }}>{'아이디 찾기가 완료되었습니다.'}</Text>
                    <Text style={{ marginBottom: 50, color: colors.textSecondary }}>{'회원님의 아이디는\n'}<Text style={{ color: colors.textPrimary }}>{email}</Text>{' 입니다.'}</Text>
                    <Button onPress={handleConfirm}>확인</Button>
                    <UnderlineButton onPress={() => { navigation.navigate('FindPassword'); setSuccessModalOpen(false); }} style={{ alignSelf: 'center', marginTop: 30 }}>비밀번호 찾기</UnderlineButton>
                </View>
            </Modal>}
        </SafeAreaView>
    );
}

export default FindIdScreen;
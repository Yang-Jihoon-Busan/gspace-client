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



const ChangePasswordScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const [ successModalOpen, setSuccessModalOpen ] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'비밀번호 변경'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <Text style={{ marginBottom: 50 }}>비밀번호 변경</Text>
                <Text style={{ fontSize: 18, marginBottom: 10 }}>새 비밀번호*</Text>
                <TextInput
                    style={[cstyles.input]}
                    placeholder='비밀번호 입력 (숫자, 특수기호 포함한 7~15자)'
                    placeholderTextColor={colors.placeholderColor}
                />
                <TextInput
                    style={[cstyles.input, { marginTop: 10, marginBottom: 50 }]}
                    placeholder='비밀번호 재입력'
                    placeholderTextColor={colors.placeholderColor}
                />

                <Button onPress={() => { setSuccessModalOpen(true); }}>확인</Button>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={successModalOpen}
                onRequestClose={() => { setSuccessModalOpen(false); }}
            >
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 200, paddingLeft: 20 }}>
                    <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: 'bold' }}>{'비밀번호 변경이\n완료되었습니다.'}</Text>
                    <Text style={{ marginBottom: 50, color: colors.textSecondary }}>{'변경하신 비밀번호로\nG SPACE를 이용하실 수 있습니다.'}</Text>
                    <Button onPress={() => { 
                        setSuccessModalOpen(false);
                    }}>확인</Button>
                </View>
            </Modal>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default ChangePasswordScreen;
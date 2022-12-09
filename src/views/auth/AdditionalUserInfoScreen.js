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
import AppModal from '../../components/AppModal';



const AdditionalUserInfoScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const [ successModalOpen, setSuccessModalOpen ] = useState(false);
    const handleSubmit = () => {
        setSuccessModalOpen(true);
    }

    const Label = (label) => (<Text style={{ marginBottom: 10, fontSize: 18 }}>{label}</Text>);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'회원가입'} useHome={false} />

            <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 20 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>{'회원가입\n추가정보를 입력해 주세요.'}</Text>

                <View style={styles.item}>
                    <Text style={{ fontSize: 18 }}>성별 (선택)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View><Button mode='outlined' style={{ width: 90, height: 44, fontSize: 15 }}>남자</Button></View>
                        <View style={{ marginLeft: 10 }}><Button mode='outlined' style={{ width: 90, height: 44, fontSize: 15 }}>여자</Button></View>
                    </View>
                </View>

                <View style={styles.item}>
                    {Label('나이 (선택)')}
                    {/* drop down 말고 bottom sheets */}
                </View>

                <View style={[styles.item, { marginBottom: 50 }]}>
                    {Label('직업 (선택)')}
                    <TextInput
                        style={[cstyles.input]}
                        placeholder='예) 학생 / 직장인(직업군) 입력'
                        placeholderTextColor={colors.placeholderColor}
                    />
                </View>

                <Button onPress={handleSubmit}>확인</Button>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={successModalOpen}
                onRequestClose={() => { setSuccessModalOpen(false); }}
            >
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 200, paddingLeft: 20 }}>
                    <Text style={{ marginBottom: 50, fontSize: 24, fontWeight: 'bold' }}>{'G space 회원이\n되신걸 환영합니다.'}</Text>
                    <Button onPress={() => { navigation.navigate('Home'); setSuccessModalOpen(false); }}>확인</Button>
                </View>
            </Modal>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item: { marginBottom: 30 },
});

export default AdditionalUserInfoScreen;
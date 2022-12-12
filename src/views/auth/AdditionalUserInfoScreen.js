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
import { resetRoot } from '../../hooks/appNavigation';


const AdditionalUserInfoScreen = ({ route, navigation }) => {
    const { simplefetch, showAlert } = useContext(AppContext);

    const [ gender, setGender ] = useState();
    const [ age, setAge ] = useState();
    const [ career, setCareer ] = useState();

    const [ successModalOpen, setSuccessModalOpen ] = useState(false);
    const handleSubmit = () => {
        let birthyear = null;
        if (age) {
            if (age < 5 || age > 100) return showAlert('나이가 허용범위를 초과했습니다.');
            birthyear = (new Date().getFullYear()) - age + 1;
        }
        
        if (career) {
            if (career.length > 50) return showAlert("직업의 길이가 너무 깁니다.");
        }

        const body = { gender, birthyear, career };
        simplefetch('post', '/user/modify_myinfo.php', { body })
        .then(() => {
            setSuccessModalOpen(true);
        })
        .catch(basicErrorHandler);
    }

    const careerRef = useRef();

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
                        <View>
                            <Button 
                                onPress={() => { setGender('male'); }} mode='outlined' 
                                style={{ width: 90, height: 44, fontSize: 15, backgroundColor: gender === 'male' ? 'white' : colors.background }}
                                textStyle={{ color: gender === 'male' ? colors.background : 'white' }}
                            >남자</Button>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Button 
                                onPress={() => { setGender('female') }} mode='outlined' 
                                style={{ width: 90, height: 44, fontSize: 15, backgroundColor: gender === 'female' ? 'white' : colors.background }}
                                textStyle={{ color: gender === 'female' ? colors.background : 'white' }}
                            >여자</Button>
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    {Label('나이 (선택)')}
                    <TextInput
                        style={[cstyles.input]}
                        placeholder='나이 입력'
                        placeholderTextColor={colors.placeholderColor}
                        keyboardType={'numeric'}
                        returnKeyType="next"
                        onSubmitEditing={() => { careerRef.current.focus(); }}
                        onChangeText={setAge}
                        value={age}
                    />
                </View>

                <View style={[styles.item, { marginBottom: 50 }]}>
                    {Label('직업 (선택)')}
                    <TextInput
                        ref={careerRef}
                        style={[cstyles.input]}
                        placeholder='예) 학생 / 직장인(직업군) 입력'
                        placeholderTextColor={colors.placeholderColor}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        onChangeText={setCareer}
                        value={career}
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
                    <Button onPress={() => { resetRoot('Home'); setSuccessModalOpen(false); }}>확인</Button>
                </View>
            </Modal>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item: { marginBottom: 30 },
});

export default AdditionalUserInfoScreen;
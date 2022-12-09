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
import MobileAuth from './MobileAuth';



const PasswordSignupScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Label = (label) => (<Text style={{ marginBottom: 10, fontSize: 18 }}>{label}</Text>);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'회원가입'} useHome={false} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingBottom: 50, paddingHorizontal: 20 }}>
                <Text style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>{'회원가입\n기본정보를 입력해 주세요.'}</Text>
                
                <View style={styles.item}>
                    {Label('아이디*')}
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[cstyles.input, { flex: 1, marginRight: 10 }]}
                            placeholder='이메일 형식으로 아이디 입력'
                            placeholderTextColor={colors.placeholderColor}
                        />
                        <Button mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>중복확인</Button>
                    </View>
                </View>

                <View style={styles.item}>
                    {Label('비밀번호*')}
                    <TextInput
                        style={[cstyles.input, { marginBottom: 10 }]}
                        placeholder='비밀번호 입력 (숫자, 특수기호 포함한 7~15자)'
                        placeholderTextColor={colors.placeholderColor}
                    />
                    <TextInput
                        style={[cstyles.input]}
                        placeholder='비밀번호 재입력'
                        placeholderTextColor={colors.placeholderColor}
                    />
                </View>

                <View style={styles.item}>
                    {Label('이름*')}
                    <TextInput
                        style={[cstyles.input]}
                        placeholder='이름 입력'
                        placeholderTextColor={colors.placeholderColor}
                    />
                </View>

                <View style={styles.item}>
                    {Label('퓨대폰번호*')}
                    <MobileAuth />
                </View>

                <View style={styles.item}>
                    {Label('닉네임*')}
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <TextInput
                            style={[cstyles.input, { flex: 1 }]}
                            placeholderTextColor={colors.textSecondary}
                            placeholder={'닉네임 입력'}
                        />
                        <Button mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>중복확인</Button>
                    </View>
                </View>

                <Button>다음</Button>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item: { marginBottom: 30 },
});

export default PasswordSignupScreen;
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



const MyInfoEditScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Label = (label) => (<Text style={{ marginBottom: 5, fontSize: 18 }}>{label}</Text>);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'내정보수정'} />

            <View style={{ flex: 1, paddingBottom: 10, paddingHorizontal: 20 }}>
                <View style={cstyles.section}>
                    {Label('아이디*')}
                    <Text style={{ color: colors.textSecondary }}>email@email.com</Text>
                </View>

                <View style={cstyles.section}>
                    {Label('비밀번호 변경')}
                    <TextInput
                        style={cstyles.input}
                        placeholderTextColor={colors.textSecondary}
                        placeholder={'비밀번호 입력(숫자, 특수기호 포함한 7~15자)'}
                    />
                    <TextInput
                        style={[cstyles.input, { marginTop: 10 }]}
                        placeholderTextColor={colors.textSecondary}
                        placeholder={'비밀번호 재입력'}
                    />
                    <View style={{ marginTop: 30 }}><Button>비밀번호 변경</Button></View>
                </View>
                

                <Button>변경</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    label: { fontSize: 18 }
});

export default MyInfoEditScreen;
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



const MyProfileEditScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'프로필변경'} />

            <View style={{ flex: 1, paddingVertical: 40, paddingHorizontal: 20 }}>
                <Image style={{ width: 90, height: 90, borderRadius: 45, marginHorizontal: 'auto' }} />

                <View style={{ marginVertical: 30, flexDirection: 'row' }}>
                    <TextInput
                        style={[cstyles.input, { marginRight: 10, flex: 1 }]}
                        placeholder={'닉네임을 입력해 주세요.'}
                        placeholderTextColor={colors.placeholderColor}
                    />
                    <TouchableOpacity style={{ width: 85, height: 44, borderColor: 'white', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>중복확인</Text>
                    </TouchableOpacity>
                </View>

                <Button>변경</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default MyProfileEditScreen;
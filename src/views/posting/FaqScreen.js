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



const Item = ({ posting }) => {
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 20, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
            <View >
                <Text style={{ fontSize: 18 }}>자주 묻는 질문입니다.</Text>
                <Image />
            </View>
            <Text style={{ color: colors.textSecondary }} numberOfLines={1} ellipsizeMode='tail'>자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다.</Text>
            <Text style={{ color: colors.textSecondary }}>자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다. 자주 묻는 질문 답변입니다.</Text>
        </View>
    );
}

const FaqScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'FAQ'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default FaqScreen;
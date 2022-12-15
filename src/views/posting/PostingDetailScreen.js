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
import HorizontalLine from '../../components/HorizontalLine';


// 이벤트 또는 공지사항
const PostingDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'공지사항'} useHome={false} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <Text style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 10 }}>2022.12.06</Text>
                <Text style={{ fontSize: 18 }}>[공지] 개인정보 처리방침 일부 변경 관련 안내</Text>

                <HorizontalLine style={{ marginVertical: 20 }} />
                <Text style={{ color: colors.textSecondary }}>내용</Text>
                <HorizontalLine style={{ marginVertical: 20 }} />

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default PostingDetailScreen;
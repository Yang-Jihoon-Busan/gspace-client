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
import Pill from '../../components/Pill';
import HorizontalLine from '../../components/HorizontalLine';
import UnderlineButton from '../../components/UnderlineButton';



const InquiryDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'문의상세'} useHome={false} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={ {fontSize: 13, color: colors.textSecondary }}>2022.12.06</Text>
                    <Pill mode={'contained'} label={'답변'} style={{ }} />
                </View>
                <Text style={{ fontSize: 18 }}>문의 제목입니다.</Text>

                <HorizontalLine style={{ marginVertical: 20 }} />

                <Text>{'문의 내용입니다.'}</Text>
                <Image style={{ marginTop: 20, width: '100%' }} />

                <HorizontalLine style={{ marginVertical: 20 }} />

                <View style={{ marginBottom: 30, backgroundColor: colors.card, paddingHorizontal: 24, paddingVertical: 20 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>G SPACE 고객센터</Text>
                        <Text style={{ color: colors.textSecondary }}>2022.11.30</Text>
                    </View>
                    <Text style={{ marginTop: 20 }}>답변내용</Text>
                </View>

                <Button>삭제</Button>
                <UnderlineButton style={{ alignSelf: 'center', marginTop: 20 }}>목록보기</UnderlineButton>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default InquiryDetailScreen;
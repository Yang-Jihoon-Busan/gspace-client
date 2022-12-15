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



const MyInquiryScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Item = (inquiry) => (
        <View style={{ paddingVertical: 20, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18}} numberOfLines={1} ellipsizeMode='tail'>질문입니다.</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: colors.textSecondary }}>2022.12.29</Text>
                <Pill label='미답변' />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'1:1문의'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>

                <Button>문의하기</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default MyInquiryScreen;
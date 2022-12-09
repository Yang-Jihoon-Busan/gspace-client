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



// 공지사항, 이벤트 같이 사용하는 스크린
const PostingListScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Item = (posting) => (
        <View style={{ paddingVertical: 20, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, marginRight: 5, flex: 1 }} numberOfLines={1} ellipsizeMode='tail'>{'[공지] 개인정보 처리방침 일부 변경관련'}</Text>
                <Image />
            </View>
            <Text style={{ color: colors.textSecondary, marginTop: 10 }}>{'2022.12.11'}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'공지사항'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default PostingListScreen;
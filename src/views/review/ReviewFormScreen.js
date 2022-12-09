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


// 별점 매기는 것도 이 스크린에서 하도록 하기
const ReviewFormScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'후기작성'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <View style={{ backgroundColor: colors.background, flexDirection: 'row' }}>
                    <Image style={{ width: 75, height: 75, marginRight: 20 }} />
                    <View>
                        <Text>G House 01 종로구</Text>
                        <Text>Room1</Text>
                        <Text style={{ marginTop: 5, color: colors.textSecondary}}>방문일 2022년 7월 2일 14시</Text>
                    </View>
                </View>

                <TextInput
                    style={{ paddingHorizontal: 15, paddingVertical: 12, height: 176, borderColor: colors.borderColor, borderWidth: 1, color: colors.textPrimary, fontSize: 15 }}
                    placeholder={'최소 10자 이상 입력해주세요.\n방문하신 하우스, 방에 대한 솔직한 리뷰를 남겨주세요. :)'}
                    placeholderTextColor={colors.placeholderColor}
                    textAlignVertical="top"
                    multiline
                />

                <View style={{ marginTop: 20, flexDirection: 'row', height: 82 }}>
                    <View style={{ width: 82, borderColor: 'white', borderWidth: 1 }}></View>

                </View>

                <Text style={{ marginTop: 20, marginBottom: 30, fontSize: 13, color: colors.textSecondary }}>*최대 3장 까지 가능합니다.</Text>

                <Button>완료</Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default ReviewFormScreen;
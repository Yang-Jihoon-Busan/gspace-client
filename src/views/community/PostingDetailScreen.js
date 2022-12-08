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
import SectionTitle from '../../components/SectionTitle';



const PostingDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'커뮤니티'} />

            <View style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}>
                <View style={{ paddingVertical: 30, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
                    <View style={{ width: 82, height: 24, alignItems: 'center', justifyContent: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 12 }}><Text style={{ fontSize: 13 }}>카테고리</Text></View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 36, height: 36, borderRadius: 18 }} />
                        <Text style={{ marginLeft: 15, fontSize: 18 }}>Nickname</Text>
                    </View>
                    <Text>서초구의 HOUSE1 주변에</Text>
                    <Text style={{ marginTop: 10, fontSize: 13, color: colors.textSecondary }}>2022.11.30</Text>
                </View>

                <View style={{ marginVertical: 30 }}>
                    <SectionTitle>댓글 (30)</SectionTitle>

                    {/*  시안은 뭔가 알아보기 어려운데, 내가 판단해서 해야할듯 */}
                </View>
                
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default PostingDetailScreen;
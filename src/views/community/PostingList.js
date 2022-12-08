import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, Dimensions } from 'react-native';
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
import BlackButton from '../../components/BlackButton';




const Posting = ({ posting }) => {
    const imageHeight = Dimensions.get('window').width / 4 * 3;

    return (
        <View>
            <Image style={{ width: '100%', height: imageHeight }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image />
                <Text>좋아요 37개</Text>
                <Image />
                <Text>댓글 109개</Text>
                <View style={{ marginLeft: 'auto', width: 82, height: 24, alignItems: 'center', justifyContent: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 12 }}><Text style={{ fontSize: 13 }}>카테고리</Text></View>
            </View>
            
            <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                <Image />
                <Text style={{ fontSize: 18 }}>Nickname</Text>
                <BlackButton style={{ marginLeft: 'auto' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 18 }}>
                <Text style={{ fontSize: 15, flex: 1, marginRight: 10, color: colors.textSecondary }} numberOfLines={1} ellipsizeMode="tail">서초구의 HOUSE1 주변에 정말 맛집 있어요. 서초구의 HOUSE1 주변에 정말 맛집 있어요. 서초구의 HOUSE1 주변에 정말 맛집 있어요.</Text>
                <TouchableWithoutFeedback><Text style={{ color: colors.textSecondary, textDecorationLine: 'underline' }}>전체보기</Text></TouchableWithoutFeedback>
            </View>
            <Text style={{ marginTop: 10, fontSize: 13, color: colors.textSecondary }}>{'2022.11.30'}</Text>
        </View>
    );
}

const PostingList = ({ category }) => {

    

    return (
        <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30, backgroundColor: colors.background }}>
            <Posting posting={null} />
        </View>
    );
}


const styles = StyleSheet.create({
});

export default PostingList;
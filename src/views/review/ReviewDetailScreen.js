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
import BlackButton from '../../components/BlackButton';
import Pill from '../../components/Pill';



const ReviewDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const dimensions = useWindowDimensions();
    const imageHeight = useMemo(() => {
        return dimensions.width / 3 * 2;
    }, [ dimensions ]);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'후기상세'} useHome={false} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 30 }}>
                <View style={{ flexDirection: 'row', backgroundColor: colors.card, padding: 20 }}>
                    <Image style={{ width: 75, height: 75 }} />

                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 18 }}>G HOUSE 01 종로구</Text>
                        <Text style={{ fontSize: 15 }}>Room1</Text>
                        <Text style={{ marginTop: 5, color: colors.textSecondary }}>방문일 2022년 7월 22일 14시</Text>
                    </View>
                </View>
                
                <Image style={{ width: '100%', height: imageHeight }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pill label={'방문후기'} />
                    <Text>2022.11.30</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36, borderRadius: 18 }} />
                    <Text style={{ marginLeft: 15, fontSize: 18 }}>Nickname</Text>
                    <BlackButton style={{ marginLeft: 'auto' }} />
                </View>
                <Text style={{ marginTop: 20, lineHeight: 24 }}>{'편안하게 잘 지내다가 갑니다.\n다음에도 또 들리고 싶은 곳입니다.'}</Text>

                <View style={{ marginTop: 20, backgroundColor: colors.card, padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 30, height: 30 }} />
                        <Text>Nickname</Text>
                    </View>
                    <Text style={{ marginTop: 15 }}>{'안녕하세요 편안하게 잘 지내다 가셨다니 다행이네요.\n좋은 하루 되세요.'}</Text>
                </View>

                <Button style={{ marginTop: 15 }}>후기삭제</Button>

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default ReviewDetailScreen;
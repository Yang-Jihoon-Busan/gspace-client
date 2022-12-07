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



const HomeScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'header'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30}}>
                {/* 예약뷰: 나중에 따로 컴포넌트로 뺄 것 */}
                <View style={{ flexDirection: 'row', height: 46 }}>
                    <View style={{ flex: 1, flexDirection: 'row', borderColor: colors.borderColor, borderWidth: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: colors.borderColor, borderRightWidth: 1 }}>
                            <Image style={{ width: 14, height: 16 }} />
                            <Text style={{ color: '#8D8D8D' }}>위치</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 14, height: 16 }} />
                            <Text style={{ color: '#8D8D8D' }}>일정</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={{ width: 46, height: 46, marginLeft: 10 }} />
                </View>

                {/* 배너 */}
                <View style={{ height: 115 }}>

                </View>

                {/* 목록 */}
                <View>

                </View>

                {/* 지도 */}

                {/* 목록/지도 전환버튼 */}
                <View style={{ position: 'absolute', bottom: 30, left: 0, right: 0, alignItems: 'center' }}>
                    <View style={{ height: 42, paddingHorizontal: 17, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', borderRadius: 21, opacity: 0.8 }}>
                        <Image style={{ width: 14, height: 14 }} />
                        <Text style={{ marginLeft: 10 }}>지도로 보기</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default HomeScreen;
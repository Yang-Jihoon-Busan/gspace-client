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



const MyChatScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Item = () => (
        <View style={{ paddingVertical: 20, paddingHorizontal: 10, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image />
                <View style={{ flex: 1 }}>
                    <Text>하우스명</Text>
                    <Text>오전 00:00</Text>
                </View>
                <Image />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ flex: 1 }} numberOfLines={1} ellipsizeMode="tail">안녕하세요~</Text>
                <Image />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'메세지'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default MyChatScreen;
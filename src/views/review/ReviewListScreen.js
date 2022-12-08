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





const ReviewListScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);


    const ReviewItem = (review) => (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ marginRight: 15,  width: 36, height: 36, borderRadius: 18 }} />
                <View>
                    <Text style={{ fontSize: 18 }}>Nickname</Text>
                    <Text style={{ color: colors.textSecondary }}>2022.11.30</Text>
                </View>
                <View style={{ marginLeft: 'auto', width: 82, height: 24, alignItems: 'center', justifyContent: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 12 }}><Text style={{ fontSize: 13 }}>방문후기</Text></View>
            </View>
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
                <Image style={{ width: 69, height: 69 }} />

                <Text style={{ flex: 1, color: 'white' }} numberOfLines={4} ellipsizeMode={'tail'}>국가는 여자의..법률이 정하는 불라불라</Text>
            </View>
            <BlackButton style={{ alignSelf: 'flex-end', marginTop: 15 }} />
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'후기전체'} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                {ReviewItem(null)}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default ReviewListScreen;
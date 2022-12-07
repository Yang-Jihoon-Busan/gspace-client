import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, ImageBackground } from 'react-native';
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



const confirmButtonHeight = 60;

const RoomDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'방상세'} useHome={false} />

            <ScrollView style={{ flex: 1, paddingBottom: confirmButtonHeight }}>

                
            </ScrollView>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}><Button style={{ backgroundColor: 'white' }}>방문예약</Button></View>
                <View style={{ flex: 1 }}><Button style={{ backgroundColor: colors.card }} textStyle={{ color: 'white' }}>이용예약</Button></View>
            </View>
            

            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    section: {paddingVertical: 30},
});

export default RoomDetailScreen;
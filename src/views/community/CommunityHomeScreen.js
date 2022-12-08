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



const CommunityHomeScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'커퓨니티'} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20 }}>
                <View style={[ cstyles.input, { flexDirection: 'row', alignItems: 'center' }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='검색어를 입력해 주세요.'
                        placeholderTextColor={'#888888'}
                    />
                    <Image style={{ width: 19, height: 19 }} />
                </View>


            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default CommunityHomeScreen;
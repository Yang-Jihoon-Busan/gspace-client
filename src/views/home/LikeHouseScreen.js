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



const LikeHouseScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const dimensions = useWindowDimensions();
    const imageHeight = useMemo(() => {
        return (dimensions.width - 50) / 2 / 2 * 3;
    }, [ dimensions ]);

    const Item = (like) => (<View style={{  }}>
        <ImageBackground style={{ width: '100%', height: imageHeight, padding: 10, justifyContent: 'space-between' }}>
            <Image style={{ alignSelf: 'flex-end', width: 20, height: 17 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 18, height: 18 }} />
                <Text style={{ fontSize: 13, marginLeft: 5 }}>100</Text>
            </View>
        </ImageBackground>
    </View>);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'관심매물'} useHome={false} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                {Item(null)}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default LikeHouseScreen;
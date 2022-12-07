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



const SearchScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const handleSearch = () => {

    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <StatusBar />
            <Header title={'검색'} />

            <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, paddingBottom: 30 }}>
                {/* 검색어 */}
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 44, backgroundColor: '#202020', paddingHorizontal: 15 }}>
                    <TextInput
                        style={{ flex: 1 }}
                    />

                    <TouchableWithoutFeedback>
                        <Image />
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={handleSearch}>
                        <Image style={{ width: 22, height: 22 }} />
                    </TouchableWithoutFeedback>
                </View>

                {/* 검색결과 */}
                <View style={{ marginTop: 20 }}>

                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default SearchScreen;
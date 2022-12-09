import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Text as RNText, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import PostingList from './PostingList';
import MyTabBar from '../../components/MyTabBar';


const CommunityHomeScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const Tab = createMaterialTopTabNavigator();

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'커퓨니티'} />

            <View style={{ marginVertical: 10, paddingHorizontal: 20  }}>
                <View style={[ cstyles.input, { flexDirection: 'row', alignItems: 'center' }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='검색어를 입력해 주세요.'
                        placeholderTextColor={'#888888'}
                    />
                    <Image style={{ width: 19, height: 19 }} />
                </View>
            </View>
            

            <Tab.Navigator
                // screenOptions={{
                //     tabBarLabelStyle: { fontSize: 15, color: colors.textPrimary },
                //     tabBarStyle: { backgroundColor: colors.background },
                //     tabBarIndicatorStyle: { backgroundColor: 'white' }
                // }}
                tabBar={props => <MyTabBar {...props} />}
            >
                <Tab.Screen name="Review" component={PostingList} options={{ title: '후기' }} />
                <Tab.Screen name="Recruit" component={PostingList} options={{ title: '모집 같이해요' }} />
                <Tab.Screen name="Info" component={PostingList} options={{ title: '정보공유' }} />
                <Tab.Screen name="Qa" component={PostingList} options={{ title: 'Q&A 분실실종' }} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default CommunityHomeScreen;
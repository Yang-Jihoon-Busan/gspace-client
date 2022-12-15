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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from '../../components/MyTabBar';
import AlarmList from './AlarmList';


const Tab = createMaterialTopTabNavigator();

const MyAlarmScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'알림'} useHome={false} />

            <Tab.Navigator
                // screenOptions={{
                //     tabBarLabelStyle: { fontSize: 15, color: colors.textPrimary },
                //     tabBarStyle: { backgroundColor: colors.background },
                //     tabBarIndicatorStyle: { backgroundColor: 'white' }
                // }}
                tabBar={props => <MyTabBar {...props} />}
            >
                <Tab.Screen name="All" component={AlarmList} options={{ title: '후기' }} />
                <Tab.Screen name="Reservation" component={AlarmList} options={{ title: '예약' }} />
                <Tab.Screen name="Community" component={AlarmList} options={{ title: '커뮤니티' }} />
                <Tab.Screen name="Event" component={AlarmList} options={{ title: '이벤트' }} />
                <Tab.Screen name="Etc" component={AlarmList} options={{ title: '기타' }} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default MyAlarmScreen;
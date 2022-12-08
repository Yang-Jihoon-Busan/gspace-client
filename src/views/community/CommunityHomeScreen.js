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



function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
            
                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
        
                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });
        
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ height: 48, paddingHorizontal: 15, borderColor: colors.borderColor, borderBottomWidth: 1 }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', borderColor: isFocused ? 'white' : colors.background, borderBottomWidth: 2 }}>
                            <Animated.Text style={{ color: isFocused ? colors.textPrimary : colors.textSecondary }}>
                                {label}
                            </Animated.Text>
                        </View>
                        
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


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
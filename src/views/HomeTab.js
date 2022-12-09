import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../constants/appcolors';
import Text from '../components/Text';
import HomeScreen from './home/HomeScreen';
import LikeHouseScreen from './home/LikeHouseScreen';
import CommunityStack from './community/CommunityStack';
import MypageScreen from './mypage/MypageScreen';


const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 66, alignItems: 'center', backgroundColor: colors.background }}>
            {state.routes.map((route, index) => {
                const focused = state.index === index;
                let source;
                let title;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!focused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                }

                switch (route.name) {
                    case 'Home': title = '홈'; break;
                    case 'LikeHouse': title = '관심매물'; break;
                    case 'Community': title = '커뮤니티'; break;
                    case 'Mypage': title = '마이페이지'; break;
                    // case 'Inquiry': title = '질의응답'; break;
                    // case 'Notice': title = '공지사항'; break;
                }

                // if (focused) {
                //     switch (route.name) {
                //         case 'Info': source = require('../images/nav_info_on.png'); break;
                //         case 'Task': source = require('../images/nav_obsv_on.png'); break;
                //         case 'Feedback': source = require('../images/nav_graph_on.png'); break;
                //         case 'Inquiry': source = require('../images/nav_qna_on.png'); break;
                //         case 'Notice': source = require('../images/nav_notice_on.png'); break;
                //     }
                // }
                // else {
                //     switch (route.name) {
                //         case 'Info': source = require('../images/nav_info_off.png'); break;
                //         case 'Task': source = require('../images/nav_obsv_off.png'); break;
                //         case 'Feedback': source = require('../images/nav_graph_off.png'); break;
                //         case 'Inquiry': source = require('../images/nav_qna_off.png'); break;
                //         case 'Notice': source = require('../images/nav_notice_off.png'); break;
                //     }
                // }

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={{ flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {/* <Image source={source} style={{ width: 152 / 4, height: 112 / 4 }} /> */}
                        <Text style={{ marginTop: 8, fontSize: 12, color: focused ? colors.textPrimary : '#B2BBC8' }}>{title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default function HomeTabs() {

    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <Tab.Navigator
                tabBar={props => <TabBar {...props} />}
                initialRouteName='Mypage'
                screenOptions={(route) => ({
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Main" component={HomeScreen} />
                <Tab.Screen name="LikeHouse" component={LikeHouseScreen} />
                <Tab.Screen name="Community" component={CommunityStack} />
                <Tab.Screen name="Mypage" component={MypageScreen} />
            </Tab.Navigator>
        </View>
    );
}
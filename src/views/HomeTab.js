import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../constants/appcolors';
import Text from '../components/Text';
import HomeScreen from './home/HomeScreen';


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
                    // case 'Task': title = '행동관찰'; break;
                    // case 'Feedback': title = '행동성과'; break;
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
                initialRouteName='Home'
                screenOptions={(route) => ({
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                {/* <Tab.Screen name="Info" component={InfoScreen} />
                <Tab.Screen name="Task" component={TaskScreen} />
                <Tab.Screen name="Feedback" component={FeedbackTabs} />
                <Tab.Screen name="Inquiry" component={InquiryScreen} />
                <Tab.Screen name="Notice" component={NoticeScreen} /> */}
            </Tab.Navigator>
        </View>
    );
}
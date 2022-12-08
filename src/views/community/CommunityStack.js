import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CommunityHomeScreen from './CommunityHomeScreen';



// 지금 stack 으로 되어 있는데, 스크린이 하나 있는 것으로 보아서 삭제해도 될 것 같은데 
const Stack = createNativeStackNavigator();

const CommunityStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'LikeHouse'}
        >
            <Stack.Screen name="Home" component={CommunityHomeScreen} />
        </Stack.Navigator>
    );
};

export default CommunityStack;
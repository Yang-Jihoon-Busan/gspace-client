import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CommunityHomeScreen from './CommunityHomeScreen';


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
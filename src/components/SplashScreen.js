import React from 'react';
import { View, Image, Text } from 'react-native';
import StatusBar from './StatusBar';



export default function SplashScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar />
            <Image style={{ width: '100%', height: '100%' }} source={require('../images/splash.png')} />
        </View>
    );
}

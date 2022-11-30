import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../constants/appcolors';


const Loading = ({ color }) => {
    return (
        <View style={{ minHeight: 100, height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={color || colors.primary} />
        </View>
    );
}

export default Loading;
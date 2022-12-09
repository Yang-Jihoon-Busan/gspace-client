import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/appcolors';


const HorizontalLine = ({ style }) => {
    return (
        <View style={[{ borderColor: 'white', borderBottomWidth: StyleSheet.hairlineWidth }, style]}></View>
    );
}

export default HorizontalLine;
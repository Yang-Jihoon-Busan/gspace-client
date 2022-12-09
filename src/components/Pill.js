import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import colors from '../constants/appcolors';

const Pill = ({ mode, label, style }) => {
    return (
        <View style={[{ width: 82, height: 24, alignItems: 'center', justifyContent: 'center', borderColor: 'white', borderWidth: mode === 'contained' ? 0 : 1, borderRadius: 12, backgroundColor: mode === 'contained' ? 'white' : 'none' }, style]}>
            <Text style={{ fontSize: 13, color: mode === 'contained' ? colors.background : colors.textPrimary }}>{label}</Text>
        </View>
    );
}

export default Pill;
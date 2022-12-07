import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Text from './Text';
import colors from '../constants/appcolors';


const BlackButton = ({ style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, width: 63, height: 30, justifyContent: 'center', ...style }}>
            <Text style={{ fontSize: 13, color: colors.textSecondary }}>신고</Text>
            <Image style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
    );
}

export default BlackButton;
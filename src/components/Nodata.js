import React from 'react';
import { View, Text } from 'react-native';

import colors from '../constants/appcolors';


const Nodata = ({ children, style }) => {
    return (
        <View style={{ paddingVertical: 160, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: colors.textSecondary, ...style }}>{children || '데이터가 없습니다.'}</Text>
        </View>
    );
}

export default Nodata;
import React from 'react';
import { Text } from 'react-native';

import colors from '../constants/appcolors';


const Nodata = ({ children, style }) => {
    return (
        <Text style={{ marginVertical: 20, fontSize: 15, color: colors.textSecondary, ...style }}>{children || '데이터가 없습니다.'}</Text>
    );
}

export default Nodata;
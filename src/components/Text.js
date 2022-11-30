import React from 'react';
import { Text as RNText } from 'react-native';

import colors from '../constants/appcolors';

export default function Text({ children, style }) {
    return <RNText style={[{ fontFamily: 'Pretendard-Regular', fontSize: 14, color: colors.textPrimary, }, style]} textBreakStrategy="simple">{children}</RNText>
}
import React from 'react';
import { Text as RNText } from 'react-native';

import colors from '../constants/appcolors';

export default function Text({ children, style, ...props }) {
    return <RNText style={[{ fontSize: 15, color: colors.textPrimary, }, style]} textBreakStrategy="simple" {...props}>{children}</RNText>
}
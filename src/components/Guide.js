import React from 'react';
import { View, Text } from 'react-native';

export default function Guide({ children, style }) {
    return (
        <View style={[{ flexDirection: 'row' }, style]}>
            <Text style={{ marginRight: 3, fontSize: 14, color: '#7E93A8' }}>*</Text>
            <Text style={{ fontSize: 14, color: '#7E93A8', flex: 1 }} textBreakStrategy="simple">{children}</Text>
        </View>
    );
}
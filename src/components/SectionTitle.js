import React from 'react';
import { View, Text } from 'react-native';

export default function SectionTitle({ children, style }) {
    return (
        <View style={[{ marginBottom: 20, paddingVertical: 10, borderColor: 'white', borderBottomWidth: 1 }, style]}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>{children}</Text>
        </View>
    );
}
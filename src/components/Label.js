import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import ErrorText from './ErrorText';


const Label = (label, error) => (
    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Text style={{ marginBottom: 10, fontSize: 18 }}>{label}</Text>
        <ErrorText error={error} />
    </View>
);

export default Label;
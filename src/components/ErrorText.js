import React from 'react'
import { View, Image } from 'react-native';
import Text from './Text';
import cstyles from '../constants/cstyles';


const ErrorText = ({ error, style }) => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center', height: 18 }, style]}>
            {!!error && <>
                <Text style={[cstyles.errorText]}>{error}</Text>
            </>}
        </View>
    );
}

export default ErrorText;
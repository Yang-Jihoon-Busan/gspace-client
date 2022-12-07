import React from 'react'
import { View, Image } from 'react-native';
import Text from './Text';
import cstyles from '../constants/cstyles';


const ErrorText = ({ error }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 18 }}>
            {!!error && <>
                {/* <Image style={{ width: 22, height: 18, marginRight: 2 }} source={require('../images/ic_danger.png')} /> */}
                <Text style={[cstyles.errorText]}>{error}</Text>
            </>}
        </View>
    );
}

export default ErrorText;
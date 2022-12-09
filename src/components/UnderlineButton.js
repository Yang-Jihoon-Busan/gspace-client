import React from 'react';
import { View, TouchableWithoutFeedback, Text as RNText } from 'react-native';


const UnderlineButton = ({ onPress, style, textStyle, children }) => {

    return (
        <View style={[style]}>
            <TouchableWithoutFeedback onPress={onPress}>
                <RNText style={[{ fontSize: 15, color: 'white', textDecorationLine: 'underline' }, textStyle]}>{children}</RNText>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default UnderlineButton;
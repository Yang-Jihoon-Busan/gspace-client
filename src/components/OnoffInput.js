import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import colors from '../constants/appcolors';


const OnoffInput = ({ checked, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={{ width: 36, height: 18, justifyContent: 'center' }}>
                <View style={{ width: '100%', backgroundColor: '#F1F4F9', height: 12, borderRadius: 6 }} />
                {checked ? 
                    <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.primary, position: 'absolute', right: 0 }} /> :
                    <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.gray400, position: 'absolute', left: 0 }} />
                }
                
            </View>
		</TouchableWithoutFeedback>
	);
}

export default OnoffInput;
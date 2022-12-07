import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../constants/appcolors';
import ActivityIndicator from './ActivityIndicator';
import Text from './Text';


export default ({mode, disabled, children, loading, style, textStyle, ...props}) => {
	if (disabled) {
		return (
			<View style={{...styles.wrapper, backgroundColor: '#B2BBC8', ...style }}>
				<Text style={{...styles.text, color: 'white', ...textStyle}}>{children}</Text>
				{loading && <ActivityIndicator style={{ position: 'absolute'}} size="large" />}
			</View>
			
		);
	}
	
	else return (
		<TouchableOpacity onPress={() => {
			if (!disabled && !loading && props.onPress) props.onPress();
		}}>
			<View style={{...styles.wrapper, borderWidth: mode == 'outlined' ? 1 : 0, backgroundColor: mode == 'outlined' ? 'white' : 'white', ...style }}>
				<Text style={{...styles.text, color: mode == 'outlined' ? colors.primary : '#0F0F0F', ...textStyle }}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	wrapper: {
		height: 60,
		paddingHorizontal: 18,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
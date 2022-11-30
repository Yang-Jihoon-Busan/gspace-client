import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


const RadioInput = ({ checked, onPress }) => {
	const Core = () => (<>
		{checked ?
			<Image source={require('../images/radio_on.png')} style={{ width: 22, height: 22 }} /> :
			<Image source={require('../images/radio.png')} style={{ width: 22, height: 22 }} />
		}
	</>)

	if (!onPress) return <Core />

	return (
		<TouchableOpacity onPress={onPress}>
			<Core />
		</TouchableOpacity>
	);
}

export default RadioInput;
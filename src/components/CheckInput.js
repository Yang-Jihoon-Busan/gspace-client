import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


const CheckInput = ({ checked, onPress }) => {
	const Core = () => (<>
		{checked ?
			<Image source={require('../images/check_sm_on.png')} style={{ width: 18, height: 18 }} /> :
			<Image source={require('../images/check_sm.png')} style={{ width: 18, height: 18 }} />
		}
	</>)

	if (!onPress) return <Core />

	return (
		
		<TouchableOpacity onPress={onPress}>
			<Core />
		</TouchableOpacity>
	);
}

export default CheckInput;
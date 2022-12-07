import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


const CheckInput = ({ checked, onPress }) => {
	const Core = () => (<>
		{checked ?
			<Image style={{ width: 20, height: 20 }} /> :
			<Image style={{ width: 20, height: 20 }} />
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
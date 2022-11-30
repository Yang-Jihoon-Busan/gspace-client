import React from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import Loading from './Loading';


const LoadingModal = ({ loading }) => {
	return (
		<Modal
			transparent={true}
			visible={loading}
		>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
                <Loading />
            </View>
		</Modal >
	);
}

export default LoadingModal;

import React from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';


const AppModal = ({
	visible,
	setVisible,
	children,
	blockCancel,
}) => {
	return (
		<Modal
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				if (!blockCancel) setVisible(false);
			}}
		>
			<TouchableWithoutFeedback onPress={() => { 
				if (!blockCancel) setVisible(false);
			}}>
				<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
					<TouchableWithoutFeedback onPress={() => {
						// nothing
					}}>
						<View style={[{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, }]}>
							{children}
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback >
		</Modal>
	);
}

export default AppModal;
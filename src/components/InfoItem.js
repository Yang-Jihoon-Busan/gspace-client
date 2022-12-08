import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import cstyles from '../constants/cstyles';


const InfoItem = ({ label, content }) => {
    return (
        <View style={cstyles.infoItem}>
            <Text style={[cstyles.infoLabel, { marginBottom: 5 }]}>{label}</Text>
            <Text style={cstyles.infoContent}>{content}</Text>
        </View>
    );
}

export default InfoItem;
import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

const ProfileImage = ({ uri, width, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            {uri ? <Image style={{ width, height: width, borderRadius: width / 2 }} source={{ uri }} /> :
                <Image style={{ width, height: width, borderRadius: width / 2 }} source={require('images/no_profile.png')} />}
        </TouchableWithoutFeedback>
    );
}

export default ProfileImage;
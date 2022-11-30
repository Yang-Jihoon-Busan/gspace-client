import React, { useMemo } from 'react';
import { View, Image } from 'react-native';

const Stars = ({stars}) => {
    const offCount = useMemo(() => {
        return 5 - stars;
    }, [stars]);

    return (
        <View style={{ flexDirection: 'row' }}>
            {Array.from({length: stars}, (v, index) => <Image key={String(index)} source={require('images/star_ic_on.png')} style={{ width: 12, height: 12 }} />)}
            {Array.from({length: offCount}, (v, index) => <Image key={String(index)} source={require('images/star_ic_off.png')} style={{ width: 12, height: 12 }} />)}
        </View>
    );
}

export default Stars;
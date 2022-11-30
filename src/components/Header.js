import React, { useMemo } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Text from './Text';


export default function Header({ title, useHome }) {
    const navigation = useNavigation();

    const canGoback = useMemo(() => {
        return navigation.canGoBack();
    }, [navigation]);

    const handleBackPress = () => {
        navigation.goBack();
    }

    const handleHomePress = () => {
        navigation.navigate('Main');
    }

    return (
        <View style={{ flexDirection: 'row',height: 50, alignItems: 'center', paddingLeft: 4, paddingRight: 6 }}>
            <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}>{title}</Text>
            </View>

            {canGoback && <TouchableOpacity onPress={handleBackPress}>
                <View style={{ padding: 4 }}>
                    <Image source={require('../images/ic_back.png')} style={{ width: 38, height: 38 }} />
                </View>
            </TouchableOpacity>}

            {useHome && <TouchableOpacity onPress={handleHomePress} style={{ marginLeft: 'auto' }}>
                <View style={{ padding: 4 }}>
                    <Image source={require('../images/ic_home.png')} style={{ width: 38, height: 38 }} />
                </View>
            </TouchableOpacity>}
            
        </View>
    )
}
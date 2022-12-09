import React from 'react';
import { View,  TouchableOpacity, Animated } from 'react-native';
import colors from '../constants/appcolors';



function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
            
                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
        
                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });
        
                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ height: 48, paddingHorizontal: 15, borderColor: colors.borderColor, borderBottomWidth: 1 }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', borderColor: isFocused ? 'white' : colors.background, borderBottomWidth: 2 }}>
                            <Animated.Text style={{ color: isFocused ? colors.textPrimary : colors.textSecondary }}>
                                {label}
                            </Animated.Text>
                        </View>
                        
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default MyTabBar;
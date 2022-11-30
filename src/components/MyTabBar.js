import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Animated, View, TouchableOpacity, Text, ScrollView, Pressable } from 'react-native';
import API from "../config/api";
import { basicErrorHandler } from "../config/http-error-handler";
import colors from "../constants/appcolors";
import { ConContext } from "../contexts/connection-screen.context";
import { MemoryContext } from "../contexts/memory-context";

export default function MyTabBar({ state, descriptors, navigation, position, isEvaluation }) {
    const [translateValue] = useState(new Animated.Value(0));
    const [width, setWidth] = useState(0);
    const [toValue, setToValue] = useState(0);
    const { received, sended, chatListCount, keep, interest } = useContext(ConContext);
    useEffect(() => {
        Animated.spring(translateValue, {
            toValue,
            damping: 10,
            mass: 0.1,
            stiffness: 100,
            overshootClamping: true,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
            useNativeDriver: true,
        }).start();
    }, [state, translateValue, toValue]);
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: '100%', justifyContent: !isEvaluation ? 'space-around' : 'center' }}>
                    {state.routes.map((route, index) => {
                        const [layout, setLayout] = useState();
                        const isFocused = state.index === index;
                        const label = route.name
                        const onPress = (e) => {                                                        
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                                navigation.navigate({ name: route.name, merge: false });
                            }
                        };
                        const onLayout = (e) => {
                            const { x, width } = e.nativeEvent.layout;
                            setLayout({ x, width });
                        };

                        useEffect(() => {
                            if (isFocused && layout) {
                                setToValue(layout.x);
                                setWidth(layout.width);
                            }
                        }, [isFocused, layout, setToValue, setWidth]);

                        return (
                            <TouchableOpacity
                                key={index}
                                onLayout={onLayout}
                                onPress={onPress}
                                style={{
                                    height: 46, marginHorizontal: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',
                                }}>
                                <Text style={{ color: isFocused ? colors.primary : colors.textPrimary, fontSize: 16, fontFamily: 'Pretendard-Regular' }}>
                                    {label} <Text style={{ color: isFocused ? colors.textY : colors.textQuaternary }}>
                                        {label === "연결" && chatListCount}
                                        {label === "받은요청" && received}
                                        {label === "보낸요청" && sended}
                                        {label === "보관" && keep}
                                        {label === "타인의 관심" && interest}
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Animated.View style={{ position: 'absolute', backgroundColor: colors.primary, height: 3, width: '100%', bottom: 0, transform: [{ translateX: translateValue }], width }} />
            </ScrollView>
            <View style={{ height: 1, width: '100%', backgroundColor: colors.tabBottomBorder }} />
        </View>
    );
}
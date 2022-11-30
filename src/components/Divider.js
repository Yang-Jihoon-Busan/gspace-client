import React from "react";
import { View } from "react-native";
import colors from "../constants/appcolors";
export default function Divider({style}) {
    return(
        <View style={[{ width: 1, height: 10, marginHorizontal: 10, backgroundColor: colors.borderColor }], style} />
    )
}
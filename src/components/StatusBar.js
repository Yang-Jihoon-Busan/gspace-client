import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import colors from '../constants/appcolors';



const StatusBar = () => {
    return (
        <RNStatusBar
            animated={true}
            backgroundColor={colors.primary + 'bb'}
        />
    );
    
} 


export default StatusBar;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createContext, useState } from 'react';
import AdditionalUserInfoScreen from './AdditionalUserInfoScreen';
import PasswordSignupScreen from './PasswordSignupScreen';
import SignupAgreementScreen from './SignupAgreementScreen';


const PasswordSignupContext = createContext({});

const Stack = createNativeStackNavigator();

const PasswordSignupStack = () => {
    const [ info, setInfo ] = useState();

    return (
        <PasswordSignupContext.Provider
            value={{
                info,
                setInfo,
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'AdditionalUserInfo'}
            >
                <Stack.Screen name="SignupAgreement" component={SignupAgreementScreen} />
                <Stack.Screen name="SignupBaseInfo" component={PasswordSignupScreen} />
                <Stack.Screen name="AdditionalUserInfo" component={AdditionalUserInfoScreen} />
            </Stack.Navigator>
        </PasswordSignupContext.Provider>
    );
};

export default PasswordSignupStack;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TestApiScreen from './src/views/test/TestApiScreen';
import TestAppScreen from './src/views/test/TestAppScreen';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TestApi" component={TestApiScreen} />
                <Stack.Screen name="TestApp" component={TestAppScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default App;

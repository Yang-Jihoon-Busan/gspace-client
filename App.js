import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SigninScreen from './src/views/auth/SigninScreen';
import SearchScreen from './src/views/home/SearchScreen';
import HomeTabs from './src/views/HomeTab';
import HouseDetailScreen from './src/views/house-detail/HouseDetailScreen';
import RFDateScreen from './src/views/reservation-form/RFDateScreen';
import RFFacilityScreen from './src/views/reservation-form/RfFacilityScreen';
import RFTypeScreen from './src/views/reservation-form/RFTypeScreen';
import RoomDetailScreen from './src/views/room-detail/RoomDetailScreen';
import TestApiScreen from './src/views/test/TestApiScreen';
import TestAppScreen from './src/views/test/TestAppScreen';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'RoomDetail'}
            >
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="HouseDetail" component={HouseDetailScreen} />
                <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
                
                <Stack.Screen name="RFType" component={RFTypeScreen} />
                <Stack.Screen name="RFDate" component={RFDateScreen} />
                <Stack.Screen name="RFFacility" component={RFFacilityScreen} />

                <Stack.Screen name="TestApi" component={TestApiScreen} />
                <Stack.Screen name="TestApp" component={TestAppScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default App;
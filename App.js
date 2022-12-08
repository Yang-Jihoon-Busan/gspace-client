import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SigninScreen from './src/views/auth/SigninScreen';
import LikeHouseScreen from './src/views/home/LikeHouseScreen';
import SearchScreen from './src/views/home/SearchScreen';
import HomeTabs from './src/views/HomeTab';
import HouseDetailScreen from './src/views/house-detail/HouseDetailScreen';
import RFDateScreen from './src/views/reservation-form/RFDateScreen';
import RFFacilityScreen from './src/views/reservation-form/RfFacilityScreen';
import RFTypeScreen from './src/views/reservation-form/RFTypeScreen';
import ReviewDetailScreen from './src/views/review/ReviewDetailScreen';
import ReviewListScreen from './src/views/review/ReviewListScreen';
import RoomDetailScreen from './src/views/room-detail/RoomDetailScreen';
import RsdReservationDoneScreen from './src/views/rsd-reservation/RsdReservationDoneScreen';
import RsdReservationFormScreen from './src/views/rsd-reservation/RsdReservationFormScreen';
import TestApiScreen from './src/views/test/TestApiScreen';
import TestAppScreen from './src/views/test/TestAppScreen';
import VisitReservationDoneScreen from './src/views/visit-reservation/VisitReservationDoneScreen';
import VisitReservationFormScreen from './src/views/visit-reservation/VisitReservationFormScreen';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                // initialRouteName={'LikeHouse'}
            >
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />

                <Stack.Screen name="HouseDetail" component={HouseDetailScreen} />
                <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
                <Stack.Screen name="LikeHouse" component={LikeHouseScreen} />

                <Stack.Screen name="VisitReservationForm" component={VisitReservationFormScreen} />
                <Stack.Screen name="VisitReservationDone" component={VisitReservationDoneScreen} />
                <Stack.Screen name="RsdReservationForm" component={RsdReservationFormScreen} />
                <Stack.Screen name="RsdReservationDone" component={RsdReservationDoneScreen} />

                <Stack.Screen name="ReviewList" component={ReviewListScreen} />
                <Stack.Screen name="ReviewDetail" component={ReviewDetailScreen} />
                
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
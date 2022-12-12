import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { navigationRef } from './src/hooks/appNavigation';
import { AuthContext } from './src/contexts/auth-context';
import ChangePasswordScreen from './src/views/auth/ChangePasswordScreen';
import FindIdScreen from './src/views/auth/FindIdScreen';
import FindPasswordScreen from './src/views/auth/FindPasswordScreen';
import PasswordSignupStack from './src/views/auth/PasswordSignupStack';
import SigninScreen from './src/views/auth/SigninScreen';
import CmPostingDetailScreen from './src/views/community/PostingDetailScreen';
import LikeHouseScreen from './src/views/home/LikeHouseScreen';
import SearchScreen from './src/views/home/SearchScreen';
import HomeTabs from './src/views/HomeTab';
import HouseDetailScreen from './src/views/house-detail/HouseDetailScreen';
import ChatScreen from './src/views/mypage/ChatScreen';
import MyAlarmScreen from './src/views/mypage/MyAlarmScreen';
import MyChatScreen from './src/views/mypage/MyChatScreen';
import MyInfoEditScreen from './src/views/mypage/MyInfoEditScreen';
import MyProfileEditScreen from './src/views/mypage/MyProfileEditScreen';
import SettingScreen from './src/views/mypage/SettingScreen';
import FaqScreen from './src/views/posting/FaqScreen';
import InquiryDetailScreen from './src/views/posting/InquiryDetailScreen';
import InquiryFormScreen from './src/views/posting/InquiryFormScreen';
import MyInquiryScreen from './src/views/posting/MyInquiryScreen';
import PostingDetailScreen from './src/views/posting/PostingDetailScreen';
import PostingListScreen from './src/views/posting/PostingListScreen';
import RFDateScreen from './src/views/reservation-form/RFDateScreen';
import RFFacilityScreen from './src/views/reservation-form/RfFacilityScreen';
import RFTypeScreen from './src/views/reservation-form/RFTypeScreen';
import ReviewDetailScreen from './src/views/review/ReviewDetailScreen';
import ReviewFormScreen from './src/views/review/ReviewFormScreen';
import ReviewListScreen from './src/views/review/ReviewListScreen';
import RoomDetailScreen from './src/views/room-detail/RoomDetailScreen';
import MyResidenceScreen from './src/views/rsd-reservation/MyResidenceScreen';
import ResidenceDetailScreen from './src/views/rsd-reservation/ResidenceDetailScreen';
import ResidenceFormScreen from './src/views/rsd-reservation/ResidenceFormScreen';
import ResidneceDoneScreen from './src/views/rsd-reservation/ResidneceDoneScreen';
import TestApiScreen from './src/views/test/TestApiScreen';
import TestAppScreen from './src/views/test/TestAppScreen';
import MyVisitScreen from './src/views/visit-reservation/MyVisitScreen';
import VisitDetailScreen from './src/views/visit-reservation/VisitDetailScreen';
import VisitDoneScreen from './src/views/visit-reservation/VisitDoneScreen';
import VisitFormScreen from './src/views/visit-reservation/VisitFormScreen';


const Stack = createNativeStackNavigator();

const App = () => {
    const { me } = useContext(AuthContext);


    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                // initialRouteName={'PasswordSignup'}
            >
                {me ? <>
                    <Stack.Screen name="Home" component={HomeTabs} />
                    <Stack.Screen name="Search" component={SearchScreen} />

                    <Stack.Screen name="HouseDetail" component={HouseDetailScreen} />
                    <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
                    <Stack.Screen name="LikeHouse" component={LikeHouseScreen} />
                    <Stack.Screen name="CmPostingDetail" component={CmPostingDetailScreen} />
                    
                    <Stack.Screen name="VisitForm" component={VisitFormScreen} />
                    <Stack.Screen name="VisitDone" component={VisitDoneScreen} />
                    <Stack.Screen name="VisitDetail" component={VisitDetailScreen} />
                    <Stack.Screen name="ResidenceForm" component={ResidenceFormScreen} />
                    <Stack.Screen name="ResidenceDone" component={ResidneceDoneScreen} />
                    <Stack.Screen name="ResidenceDetail" component={ResidenceDetailScreen} />

                    <Stack.Screen name="ReviewList" component={ReviewListScreen} />
                    <Stack.Screen name="ReviewDetail" component={ReviewDetailScreen} />
                    <Stack.Screen name="ReviewForm" component={ReviewFormScreen} />

                    <Stack.Screen name="MyProfileEdit" component={MyProfileEditScreen} />
                    <Stack.Screen name="MyInfoEdit" component={MyInfoEditScreen} />
                    <Stack.Screen name="MyVisit" component={MyVisitScreen} />
                    <Stack.Screen name="MyResidence" component={MyResidenceScreen} />
                    <Stack.Screen name="Faq" component={FaqScreen} />
                    <Stack.Screen name="MyInquiry" component={MyInquiryScreen} />
                    <Stack.Screen name="InquiryForm" component={InquiryFormScreen} />
                    <Stack.Screen name="InquiryDetail" component={InquiryDetailScreen} />
                    <Stack.Screen name="NoticeList" component={PostingListScreen} />
                    <Stack.Screen name="EventList" component={PostingListScreen} />
                    <Stack.Screen name="PostingDetail" component={PostingDetailScreen} />
                    <Stack.Screen name="Setting" component={SettingScreen} />
                    <Stack.Screen name="MyAlarm" component={MyAlarmScreen} />
                    <Stack.Screen name="MyChat" component={MyChatScreen} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                    
                    <Stack.Screen name="RFType" component={RFTypeScreen} />
                    <Stack.Screen name="RFDate" component={RFDateScreen} />
                    <Stack.Screen name="RFFacility" component={RFFacilityScreen} />
                </> : <>
                    <Stack.Screen name="Signin" component={SigninScreen} />
                </>}
                
                {/* !me 안에 넣으려 했으나 특수한 경우라서 밖으로 뺌 */}
                <Stack.Screen name="PasswordSignup" component={PasswordSignupStack} />

                <Stack.Screen name="FindId" component={FindIdScreen} />
                <Stack.Screen name="FindPassword" component={FindPasswordScreen} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />

                <Stack.Screen name="TestApi" component={TestApiScreen} />
                <Stack.Screen name="TestApp" component={TestAppScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';


const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <StatusBar barStyle={'light-content'} />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <Text>hello wolrd.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </NavigationContainer>
        
    );
};



export default App;

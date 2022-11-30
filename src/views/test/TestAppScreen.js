import React, { useContext, useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import AppModal from '../../components/AppModal';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AppContext } from '../../contexts/app-context';
import cstyles from '../../constants/cstyles';
import colors from '../../constants/appcolors';
import { NotificationContext } from '../../contexts/notification-context';


const AppComponentScreen = () => {
    const { showSnackbar, showAlert, showDialog, openImagePicker } = useContext(AppContext);
    const { push } = useContext(NotificationContext);

    const handleShowSnackbar = () => {
        showSnackbar('hello');
    }

    const handleShowAlert = () => {
        showAlert('this is alert');
    }

    const handleDialog = () => {
        const dialogData = {
            message: 'message',
            first: {
                text: '삭제하기',
                onPress: () => {
                    console.log('confirm');
                }
            },
        };
        showDialog(dialogData);
    }

    const handleOpenImagePicker = () => {
        openImagePicker(2, (data) => {
            console.log(data);
        })
    }

    const [ appmodalOpen, setAppmodalOpen ] = useState(false);
    const handleAppModal = () => {
        setAppmodalOpen(true);
    }

    const handlePush = () => {
        push('title', 'message', { foo: 'FOO', bar: 'BAR' });
    }

    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
            <Text>normal text</Text>
            <TextInput
                style={cstyles.input}
                placeholder={'normal textinput'}
                placeholderTextColor={colors.placeholderColor}
            />
            <View style={styles.section}><Button onPress={handleShowSnackbar}>snackbar</Button></View>
            <View style={styles.section}><Button onPress={handleShowAlert}>alert</Button></View>
            <View style={styles.section}><Button onPress={handleDialog}>dialog</Button></View>
            <View style={styles.section}><Button onPress={handleOpenImagePicker}>open image picker</Button></View>
            <View style={styles.section}><Button onPress={handleAppModal}>handleAppModal</Button></View>
            <View style={styles.section}><Button onPress={handlePush}>local notification</Button></View>

            <AppModal visible={appmodalOpen} setVisible={setAppmodalOpen} blockCancel={false}>
                <Text>very basic modal</Text>
            </AppModal>
            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    section: { marginTop: 8 },
});

export default AppComponentScreen;
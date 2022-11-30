import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { showAlertRef, showDialogRef, openAppVersionModalRef } from '../hooks/appRefs';
import { navigationRef } from '../hooks/appNavigation';



const basicErrorHandler = (error) => {
    const code = error?.code;

    // code 가 있으면 code 로 처리
    if (code) {
        switch(code) {
            case 'need_auth':
                AsyncStorage.setItem('token', '');
                if (showDialogRef.current) {
                    const dialogData = {
                        message: '사용자 인증이 필요합니다. 로그인 하시겠습니까?',
                        first: {
                            text: '네',
                            onPress: () => {
                                navigationRef?.current.navigate('Login');
                            }
                        },
                    };
                    showDialogRef.current(dialogData);
                }
                break;

            case 'need_app_update':
                if (openAppVersionModalRef.current) openAppVersionModalRef.current();
                break;
            // default: doAlert(message);
        }
        return;
    }
}

const doAlert = (message) => {
    if (showAlertRef) {
        showAlertRef.current(message);
    }
    else {
        Alert.alert(message);
    }
}

export {
    basicErrorHandler,
};
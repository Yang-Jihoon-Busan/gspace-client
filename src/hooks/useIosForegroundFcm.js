import React, { useEffect } from 'react';
import navigateWithMessaging from './navigateWithMessaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';


// appdelegate.m 등의 PushNotificationIOS 과 같은 설정이 필요한데 이미 어떤것을 변경해야 할지 정확히 모르고 위험이 커서 ios foregound push 는 넘어감
const useIosForegoundFcm = () => {
    useEffect(() => {
        PushNotificationIOS.addEventListener('notification', onRemoteNotification);
    });
    
    const onRemoteNotification = (notification) => {
        console.log('path1');
        const isClicked = notification.getData().userInteraction === 1;
    
        if (isClicked) {
            console.log('user clicked push alarm in foreground.');
            console.log('notifiaction', notification);
            // navigateWithMessaging(notification, false);
        }
    };
}



export default useIosForegoundFcm;

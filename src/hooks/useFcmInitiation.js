import { useEffect, useContext } from 'react';
import messaging from '@react-native-firebase/messaging';
import navigateWithMessaging from './navigateWithMessaging';
// import { AppContext } from '../contexts/app-context';



const useFcmInitiation = () => {
    // const { dbLog } = useContext(AppContext);

    useEffect(() => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            // const message = JSON.stringify(remoteMessage.data);
            // const data = {
            //     division: 'info',
            //     code: 'push_01',
            //     message,
            // };
            // dbLog(data);

            console.log('Notification caused app to open from background state:', remoteMessage);
            navigateWithMessaging(remoteMessage.data, false);
        });

        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            // const message = JSON.stringify(remoteMessage.data);
            // const data = {
            //     division: 'info',
            //     code: 'push_02',
            //     message,
            // };
            // dbLog(data);

            if (remoteMessage) {
                console.log('Notification caused app to open from quit state:', remoteMessage);

                const exceptional_codes = ['daily_feedback', 'weekly_feedback', 'monthly_feedback'];    // 여기 관련해서는 고객요청으로 푸시알림 클릭시가 아니라 앱실행시 처리하도록 함
                if (remoteMessage.data?.code && exceptional_codes.indexOf(remoteMessage.data?.code) === -1) {
                    navigateWithMessaging(remoteMessage.data, true);
                }
            }
        });
    }, []);
}



export default useFcmInitiation;

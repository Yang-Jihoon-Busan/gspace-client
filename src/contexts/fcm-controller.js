import React, { useContext, useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';

import { NotificationContext } from './notification-context';
import { AuthContext } from './auth-context';
import DailyFeedbackModal from '../views/common/DailyFeedbackModal';
import WeeklyFeedbackModal from '../views/common/WeeklyFeedbackModal';
import MonthlyFeedbackModal from '../views/common/MonthlyFeedbackModal';
import { AppContext } from './app-context';
import { basicErrorHandler } from '../config/http-error-handler';



// background (only data, not notification)
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(remoteMessage);
});


const FcmController = () => {
    const { push, setTrigger } = useContext(NotificationContext);
    const { me } = useContext(AuthContext);
    const { simplefetch } = useContext(AppContext);

    const [dailyFeedbackId, setDailyFeedbackId] = useState();
    const [weeklyFeedbackId, setWeeklyFeedbackId] = useState();
    const [monthlyFeedbackId, setMonthlyFeedbackId] = useState();

    // foreground push control
    useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log(remoteMessage);
            
            setTrigger(new Date().getTime());

            const title = remoteMessage.notification.title;
            const message = remoteMessage.notification.body;
            const code = remoteMessage.data?.code;

            let info, feedback_id;
            info = remoteMessage.data?.data;
            if (info) {
                info = JSON.parse(info);
            }

            switch (code) {
                case 'daily_feedback':
                    feedback_id = info.feedback_id;
                    setDailyFeedbackId(feedback_id);
                    break;
                case 'weekly_feedback':
                    feedback_id = info.feedback_id;
                    setWeeklyFeedbackId(feedback_id);
                    break;
                case 'monthly_feedback':
                    feedback_id = info.feedback_id;
                    setMonthlyFeedbackId(feedback_id);
                    break;
            }

            push(title, message, remoteMessage.data);
		});

		return unsubscribe;
	}, [ me ]);
    // end: foreground push control

    // 이 앱에서는 앱 실행시 처리해야할 팝업이 있어서 여기서 진행
    // 보여질 피드백 팝업이 있는지 확인후 있을시 팝업 오픈
    useEffect(() => {
        if (me) {
            simplefetch('get', '/user/check_unread_feedback.php')
            .then(feedback => {
                if (feedback) {
                    if (feedback.division === 'daily') return setDailyFeedbackId(feedback.id);
                    else if (feedback.division === 'weekly') return setWeeklyFeedbackId(feedback.id);
                    else if (feedback.division === 'monthly') return setMonthlyFeedbackId(feedback.id);
                }
            })
            .catch(basicErrorHandler);
        }
    }, [ me ]);
    
    return (<>
        {dailyFeedbackId && <DailyFeedbackModal feedbackId={dailyFeedbackId} setFeedbackId={setDailyFeedbackId} />}
        {weeklyFeedbackId && <WeeklyFeedbackModal feedbackId={weeklyFeedbackId} setFeedbackId={setWeeklyFeedbackId} />}
        {monthlyFeedbackId && <MonthlyFeedbackModal feedbackId={monthlyFeedbackId} setFeedbackId={setMonthlyFeedbackId} />}
    </>)
};

export default FcmController;
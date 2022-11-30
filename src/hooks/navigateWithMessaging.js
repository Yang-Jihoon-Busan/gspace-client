import { navigationRef } from "./appNavigation";

const navigateWithMessaging = (data, withDelay) => {
    if (!data) return;
    
    let info;
    if (data.data) info = JSON.parse(data.data);
    const delay = withDelay ? 2800 : 0;

    switch (data.code) {
        case 'daily_feedback':
            setTimeout(() => {
                navigationRef.current?.navigate('Home', { screen: 'Feedback', params: { tab: 'daily', feedback_id: info.feedback_id } });
            }, delay);
            break;
        case 'weekly_feedback':
            setTimeout(() => {
                navigationRef.current?.navigate('Home', { screen: 'Feedback', params: { tab: 'weekly', feedback_id: info.feedback_id } });
            }, delay);
            break;
        case 'monthly_feedback':
            setTimeout(() => {
                navigationRef.current?.navigate('Home', { screen: 'Feedback', params: { tab: 'monthly', feedback_id: info.feedback_id } });
            }, delay);
            break;
    }
}

export default navigateWithMessaging;
import React, { createContext, useState } from 'react';
import PushNotification from "react-native-push-notification";


const NotificationContext = createContext({});

const NotificationContextProvider = ({ children }) => {

    const testPush = () => {
        PushNotification.localNotification({
            title: "My Notification Title", // (optional)
            message: "My Notification Message", // (required)
        });
    }

    const push = (title, message, data) => {
        PushNotification.localNotification({ channelId: 'app_default', title, message, userInfo: data });
    }

    // 화면을 다시 그리기
    const [ trigger, setTrigger ] = useState();

    const [ chatDoing, setChatDoing ] = useState(false)

	return (
		<NotificationContext.Provider  
			value={{    
                testPush,
                push,

                trigger,
                setTrigger,

                chatDoing,
                setChatDoing,
			}}
		>
			{children} 
		</NotificationContext.Provider>
	);
};

export {
	NotificationContext,
	NotificationContextProvider
};
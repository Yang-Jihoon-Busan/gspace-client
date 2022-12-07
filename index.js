import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppContextProvider } from './src/contexts/app-context';
import { AuthContextProvider } from './src/contexts/auth-context';
 
 
const Root = () => (
    <AppContextProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </AppContextProvider>
);
 
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => Root);
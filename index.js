/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppContextProvider } from './src/contexts/app-context';


const Root = () => (
    <AppContextProvider>
        <App />
    </AppContextProvider>
);

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => Root);
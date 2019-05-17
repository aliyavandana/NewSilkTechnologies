/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import start from './src/pages/start';

// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => start);

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import details from './src/pages/details';
import routes from './src/Routes';

// AppRegistry.registerComponent(appName, () =>App);


AppRegistry.registerComponent(appName, () => routes);

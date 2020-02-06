/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './storybook';
// import App from './demo'; // switch this line with the previous to toggle storybook/realistic demo
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);

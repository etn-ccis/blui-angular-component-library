/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json.js';
import ThemedStorybook from './storybook';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => ThemedStorybook);

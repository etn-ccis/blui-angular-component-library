/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import StorybookUIRoot from './storybook';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

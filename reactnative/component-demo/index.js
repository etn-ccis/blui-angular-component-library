/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StoryBook from './storybook';
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => StoryBook);

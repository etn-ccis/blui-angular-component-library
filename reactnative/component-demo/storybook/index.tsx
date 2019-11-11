import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { ThemeProvider } from '@pxblue/react-native-components';
import { ReactNativeThemes } from '@pxblue/themes';
import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

const ThemedStorybook = () => (
  <ThemeProvider theme={ReactNativeThemes.blue}>
    <StorybookUIRoot />
  </ThemeProvider>
);

export default ThemedStorybook;

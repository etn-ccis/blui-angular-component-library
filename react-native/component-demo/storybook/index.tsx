import React from 'react';
import { configure, getStorybookUI } from '@storybook/react-native';
import './rn-addons';
import { ThemeProvider } from '@pxblue/react-native-components';
import { gray, white, blue, red } from '@pxblue/colors';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

const ThemedStorybook = () =>
  <ThemeProvider theme={{
    roundness: 3,
    colors: {
      primary: gray[600],
      background: white[500],
      surface: white[100],
      accent: blue[700],
      error: red[500],
      text: gray[600],
    },
    sizes: {
      small: 10,
      medium: 12,
      large: 16,
      extraLarge: 94
    }
  }}>
    <StorybookUIRoot />
  </ThemeProvider>

export default ThemedStorybook;

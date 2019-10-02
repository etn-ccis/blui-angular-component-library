import React from 'react';
import { configure, getStorybookUI } from '@storybook/react-native';
import './rn-addons';
// TODO: Put the theme provider back
// import { ThemeProvider } from '@pxblue/react-native-components';
import { gray, white, blue, red, green, black } from '@pxblue/colors';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

const ThemedStorybook = () =>
  // <ThemeProvider theme={{
  //   roundness: 3,
  //   fonts: {
  //     bold: {
  //       fontFamily: 'Open Sans',
  //       fontWeight: '600'
  //     },
  //     regular: {
  //       fontFamily: 'Open Sans',
  //       fontWeight: 'normal'
  //     },
  //     medium: {
  //       fontFamily: 'Open Sans',
  //       fontWeight: '400'
  //     },
  //     light: {
  //       fontFamily: 'Open Sans',
  //       fontWeight: '300'
  //     },
  //     thin: {
  //       fontFamily: 'Open Sans',
  //       fontWeight: '200'
  //     }
  //   },
  //   colors: {
  //     primary: blue[500],
  //     background: white[500],
  //     surface: white[200],
  //     accent: blue[700],
  //     error: red[500],
  //     text: black[500],
  //     onPrimary: white[500]
  //   },
  //   sizes: {
  //     small: 12,
  //     medium: 14,
  //     large: 20,
  //     extraLarge: 34
  //   }
  // }}>
    <StorybookUIRoot />
  // </ThemeProvider>

export default ThemedStorybook;

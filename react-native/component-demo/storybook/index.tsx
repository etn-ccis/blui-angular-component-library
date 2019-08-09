import React from 'react';
import { configure, getStorybookUI } from '@storybook/react-native';
import './rn-addons';
import { ThemeProvider } from '@pxblue/react-native-components';
import { gray, white, blue, red, green } from '@pxblue/colors';

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
    fonts: {
      bold: {
        fontFamily: 'Open Sans',
        // fontWeight: '700'
      },
      regular: {
        fontFamily: 'Open Sans',
        fontWeight: '600'
      },
      medium: {
        fontFamily: 'Open Sans',
        fontWeight: '400'
      },
      light: {
        fontFamily: 'Beth Ellen',
        fontWeight: '300'
      },
      thin: {
        fontFamily: 'Open Sans',
        fontWeight: '200'
      }
    },
    colors: {
      primary: blue[600],
      background: white[500],
      surface: white[200],
      accent: blue[700],
      error: red[500],
      text: gray[600],
      onPrimary: white[200]
    },
    sizes: {
      small: 12,
      medium: 14,
      large: 20,
      extraLarge: 34
    }
  }}>
    <StorybookUIRoot />
  </ThemeProvider>

export default ThemedStorybook;

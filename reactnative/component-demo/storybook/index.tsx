import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { ThemeProvider } from '@pxblue/react-native-components';
import { blue, gray, white, red, lightBlue } from '@pxblue/colors';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

const ThemedStorybook = () => (
  // This is the PX Blue theme
  <ThemeProvider theme={{
      roundness: 4,
      fonts: {
        extraBold: {
          fontFamily: 'Open Sans',
          fontWeight: '800'
        },
        bold: {
          fontFamily: 'Open Sans',
          fontWeight: '700'
        },
        semiBold: {
          fontFamily: 'Open Sans',
          fontWeight: '600'
        },
        regular: {
          fontFamily: 'Open Sans',
          fontWeight: '400'
        },
        light: {
          fontFamily: 'Open Sans',
          fontWeight: '300'
        }
      },
      colors: {
        primary: blue[500],
        background: gray[50],
        surface: white[50],
        accent: lightBlue[500],
        error: red[500],
        text: gray[500],
        onPrimary: white[50]
      },
      sizes: {
        tiny: 10,
        extraSmall: 12,
        small: 14,
        medium: 16,
        large: 20,
        extraLarge: 24,
        giant: 34
      }
    }} >
    <StorybookUIRoot/>
  </ThemeProvider>
);

export default ThemedStorybook;

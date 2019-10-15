import { createTheming } from '@callstack/react-theme-provider';
import { gray, white, blue, red, lightBlue } from '@pxblue/colors';
import { TextStyle } from 'react-native';

type Font = {
  fontFamily: string;
  fontWeight: TextStyle['fontWeight'];
}

export interface Theme {
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onPrimary: string;
  };
  fonts: {
    extraBold: Partial<Font>;
    bold: Partial<Font>;
    semiBold: Partial<Font>;
    regular: Partial<Font>;
    light: Partial<Font>;
  };
  sizes: {
    tiny: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    giant: number;
  };
};

// TODO: This default theme is the PX Blue theme...it should be extracted to the @pxblue/themes package
// and this default theme should be something a bit more generic/material (colors).
const { ThemeProvider, withTheme } = createTheming<Theme>({
  roundness: 3,
  fonts: {
    extraBold: {
      fontFamily: 'Open Sans',
      fontWeight: '800'
    },
    bold: {
      fontFamily: 'Open Sans',
      fontWeight: '700'
    },
    semiBold: {
      fontFamily: 'Open Sans',
      fontWeight: '600'
    },
    regular: {
      fontFamily: 'Open Sans',
      fontWeight: '400'
    },
    light: {
      fontFamily: 'Open Sans',
      fontWeight: '300'
    }
  },
  colors: {
    primary: blue[500],
    background: gray[50],
    surface: white[50],
    accent: lightBlue[500],
    error: red[500],
    text: gray[500],
    onPrimary: white[50]
  },
  sizes: {
    tiny: 10,
    extraSmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    extraLarge: 24,
    giant: 34
  }
});

type WithTheme<T> = T & {
  theme: Theme;
}

export {
  ThemeProvider,
  WithTheme,
  withTheme
};
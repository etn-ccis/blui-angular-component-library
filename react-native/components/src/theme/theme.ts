import { createTheming } from '@callstack/react-theme-provider';
import { gray, white, blue, red } from '@pxblue/colors';
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
  };
  fonts: {
    bold: Partial<Font>;
    regular: Partial<Font>;
    medium: Partial<Font>;
    light: Partial<Font>;
    thin: Partial<Font>;
  };
  sizes: {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
  };
};

const { ThemeProvider, withTheme } = createTheming<Theme>({
  roundness: 3,
  fonts: {
    bold: {},
    regular: {},
    medium: {},
    light: {},
    thin: {},
  },
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
    extraLarge: 24
  }
});

export {
  ThemeProvider,
  withTheme
};
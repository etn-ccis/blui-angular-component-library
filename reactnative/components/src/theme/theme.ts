import { createTheming } from '@callstack/react-theme-provider';
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

/* This is the default theme for the component library (Material) */
const { ThemeProvider, withTheme } = createTheming<Theme>({
  roundness: 4,
  fonts: {
    extraBold: {
      fontFamily: 'System',
      fontWeight: '800'
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700'
    },
    semiBold: {
      fontFamily: 'System',
      fontWeight: '600'
    },
    regular: {
      fontFamily: 'System',
      fontWeight: '400'
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300'
    }
  },
  // default material theme colors
  colors: {
    primary: '#6200EE',
    background: "#FFFFFF",
    surface: '#FFFFFF',
    accent: '#03DAC6',
    error: '#B00020',
    text: '#000000',
    onPrimary: '#FFFFFF'
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
# Theming

Components in this library are themed using [@callstack/react-theme-provider](https://github.com/callstack/react-theme-provider). You don't need to provide any theme, but you may if desired.

## Theme Overview

The theme is structured as one object of type
```
{
  roundness: number
  colors: {
    primary: string
    background: string
    surface: string
    accent: string
    error: string
    text: string
    onPrimary: string
  }
  fonts: {
    bold: Partial<Font>
    regular: Partial<Font>
    medium: Partial<Font>
    light: Partial<Font>
    thin: Partial<Font>
  }
  sizes: {
    small: number
    medium: number
    large: number
    extraLarge: number
  }
}
```
where `Font` is
```typescript
{
  fontFamily: string
  fontWeight: TextStyle['fontWeight']
}
```

## Using the theme in other components

If you want to consume data from the theme, you can use the provided `withTheme` helper. e.g.:

```typescript
import { withTheme, WithTheme } from '@pxblue/react-native-components';
const Example = withTheme(({ theme, ...props }: WithTheme<ViewProps>) => {
  const { colors, roundness } = theme;

  return (
    <View {...props} style={{
      backgroundColor: colors.primary,
      borderRadius: roundness,
      width: 200,
      height: 100
    }}>
      <Text>The background color and borderRadius came from the theme!</Text>
    </View>
  );
});

...

<Example />

```

## Defining Custom Themes

You can provide your own theme using the provided `ThemeProvider` and providing it a `theme` prop. e.g.:

```typescript
import { ThemeProvider } from '@pxblue/react-native-components';

...

<ThemeProvider theme={{
  roundness: 3,
  fonts: {
    bold: {
      fontFamily: 'Open Sans',
      fontWeight: '700'
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
  <YourApp />
</ThemeProvider>
```

## Overriding Themes for Specific Components

All components in this library that use themes have an optional prop call `theme` of type `DeepPartial<Theme>`, allowing you to selectively override items from the theme. For example, the text color can be overriden on a `Title` component with

```typescript
<Title theme={{ colors: text: { 'green' } }}>My text</Title>
```

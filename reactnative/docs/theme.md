# Theming
Components in this library are themed using [@callstack/react-theme-provider](https://github.com/callstack/react-theme-provider). When using the ```<ThemeProvider``` from this library, all child components will inherit various styling properties from the default theme.

## Overview
A Theme is a single JSON object with the following structure:
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
    extraBold: Partial<Font>;
    bold: Partial<Font>;
    semiBold: Partial<Font>;
    regular: Partial<Font>;
    light: Partial<Font>;
  }
  sizes: {
    tiny: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    giant: number;
  }
}
```
`Font` is another object with the following format:
```
{
  fontFamily: string
  fontWeight: TextStyle['fontWeight']
}
```

## Using the Theme
To use the theme from this library, simply wrap your application in a ```<ThemeProvider>``` and the rest is handled for you.

```
import { ThemeProvider } from '@pxblue/react-native-components';
...
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

## Using the Theme in Custom Components
To use the theme properties in your custom components, you can use the ```withTheme``` HOC to inject the theme into your component.

```
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

## Overriding the Theme
If you need to override the theme, you can do so by providing a ```theme``` property to the ```ThemeProvider```.

```
<ThemeProvider theme={{
  roundness: 3,
  fonts: {
    extraBold: {
      fontFamily: 'MyFont',
      fontWeight: '800'
    },
    bold: {
      fontFamily: 'MyFont',
      fontWeight: '700'
    },
    semiBold: {
      fontFamily: 'MyFont',
      fontWeight: '600'
    },
    regular: {
      fontFamily: 'MyFont',
      fontWeight: '400'
    },
    light: {
      fontFamily: 'MyFont',
      fontWeight: '300'
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
    tiny: 10,
    extraSmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    extraLarge: 24,
    giant: 34
  }
}}>
  <YourApp />
</ThemeProvider>
```

### For a Single Component
If you don't want to modify the theme for all components, but rather just one individual component, you can do so by directly passing a ```theme``` (or partial theme) property to the component. The following example overrides the text color of the Title component.

```
<Title theme={{ colors: { text: { 'green' } } }}>My text</Title>
```
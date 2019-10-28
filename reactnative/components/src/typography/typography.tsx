import React, { ComponentType } from 'react';
import { Text, TextProps, TextStyle, StyleProp } from 'react-native';
import { WithTheme, withTheme, Theme } from '../theme/theme';
import { $DeepPartial } from '@callstack/react-theme-provider';

interface TypographyInnerProps extends TextProps {
  /**
   * Key to use for font size.
   */
  fontSize?: keyof Theme['sizes'];

  /**
   * Font to use
   */
  font?: keyof Theme['fonts'];

  /**
   * Font to use
   */
  color?: keyof Theme['colors'];

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

export interface TypographyProps extends TypographyInnerProps {
  theme?: $DeepPartial<Theme>;
}

type Typography = ComponentType<TypographyProps>;

/*
 * createTypography is a component-generator function. It takes one argument.
 *     getStyle: a function that takes in a theme and returns a text style object
 * createTypography returns a theme-wrapped text component that utilizes that styles and theme that are provided
*/
const createTypography = (getStyle: (theme: Theme) => StyleProp<TextStyle>): Typography =>
  withTheme(({ theme, style, fontSize, font, color, ...props }: WithTheme<TypographyInnerProps>) => {
    let customStyle: StyleProp<TextStyle> = {};

    if (fontSize) {
      customStyle.fontSize = theme.sizes[fontSize];
    }

    if (font) {
      customStyle = {
        ...customStyle,
        ...theme.fonts[font]
      }
    }

    return (
      <Text {...props} style={[{ color: (color ? theme.colors[color] : theme.colors.text) }, getStyle(theme), customStyle, style]} />
    );
  });

/**
 * Typography Components
 */
export const H1 = createTypography(({ fonts, sizes }) => ({
  ...fonts.light,
  fontSize: 96
}));
export const H2 = createTypography(({ fonts, sizes }) => ({
  ...fonts.light,
  fontSize: 60
}));
export const H3 = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: 48
}));
export const H4 = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.giant
}));
export const H5 = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.extraLarge
}));
export const H6 = createTypography(({ fonts, sizes }) => ({
  ...fonts.semiBold,
  fontSize: sizes.large,
  letterSpacing: 0
}));
export const H7 = createTypography(({ fonts, sizes }) => ({
  ...fonts.semiBold,
  fontSize: 18
}));
export const Body = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.medium
}));
export const Label = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.medium,
  letterSpacing: 0
}));
export const Subtitle = createTypography(({ fonts, sizes }) => ({
  ...fonts.semiBold,
  fontSize: sizes.small
}));
export const Caption = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.tiny
}));
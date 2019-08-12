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
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

export interface TypographyProps extends TypographyInnerProps {
  theme?: $DeepPartial<Theme>;
}

export type Typography = ComponentType<TypographyProps>;

const createTypography = (getStyle: (theme: Theme) => StyleProp<TextStyle>): Typography => 
  withTheme(({ theme, style, fontSize, font, ...props }: WithTheme<TypographyInnerProps>) => {
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
      <Text {...props} style={[{ color: theme.colors.text }, getStyle(theme), customStyle, style ]} />
    );
  });

/**
 * Title component
 */
export const Title = createTypography(({ fonts, sizes }) => ({
  ...fonts.bold,
  fontSize: sizes.medium
}));

/**
 * Subtitle component
 */
export const Subtitle = createTypography(({ fonts, sizes }) => ({
  ...fonts.thin,
  fontSize: sizes.small
}));

/**
 * Heading component
 */
export const Heading = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.extraLarge
}));

/**
 * Subheading component
 */
export const Subheading = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.large
}));

/**
 * Label component
 */
export const Label = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.medium,
  letterSpacing: 0
}));

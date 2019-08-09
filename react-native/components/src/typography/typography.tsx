import React, { ComponentType } from 'react';
import { Text, TextProps, TextStyle, StyleProp } from 'react-native';
import { WithTheme, withTheme, Theme } from '../theme/theme';
import { $DeepPartial } from '@callstack/react-theme-provider';

interface TypographyInnerProps extends TextProps {
  fontSize?: keyof Theme['sizes'];
  font?: keyof Theme['fonts'];
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

export const Title = createTypography(({ fonts, sizes }) => ({
  ...fonts.bold,
  fontSize: sizes.medium
}));

export const Subtitle = createTypography(({ fonts, sizes }) => ({
  ...fonts.thin,
  fontSize: sizes.small
}));

export const Heading = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.extraLarge
}));

export const Subheading = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.large
}));

export const Label = createTypography(({ fonts, sizes }) => ({
  ...fonts.regular,
  fontSize: sizes.medium,
  letterSpacing: 0
}));

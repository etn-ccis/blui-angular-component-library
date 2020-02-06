import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '../decorators';
import { Text, View, ViewProps } from 'react-native';
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

storiesOf('Theme', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('example consuming theme', () =>
    <Example />
  );

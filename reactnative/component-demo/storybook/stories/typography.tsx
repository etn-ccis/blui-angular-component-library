import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { safeArea } from '../decorators';
import * as Typography from '@pxblue/react-native-components';
import { View } from 'react-native';
import { purple, green } from '@pxblue/colors';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('default appearance', () =>
    <View>
      <Typography.H1>Head. 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.H5>Heading 5</Typography.H5>
      <Typography.H6>Heading 6</Typography.H6>
      <Typography.Label>Label</Typography.Label>
      <Typography.Body>Body</Typography.Body>
      <Typography.Subtitle>Subtitle</Typography.Subtitle>
      <Typography.Caption>Caption</Typography.Caption>
    </View>
  )
  .add('with color props', () =>
    <View>
      <Typography.H4 color={'primary'}>Primary</Typography.H4>
      <Typography.H4 color={'accent'}>Accent</Typography.H4>
      <Typography.H4 color={'error'}>Error</Typography.H4>
      <Typography.H4 color={'text'}>Text/Default</Typography.H4>
    </View>
  )
  .add('with custom styles', () =>
    <View>
      <Typography.Label style={{ color: purple[500] }}>Typography styles can be overridden</Typography.Label>
      <Typography.Label theme={{ colors: { text: green[900]} }}>Their themes can be overridden as well</Typography.Label>
      <Typography.Label fontSize={'small'} font={'light'}>You can even override which parts of themes they use</Typography.Label>
    </View>
  );
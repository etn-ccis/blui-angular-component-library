import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { safeArea } from '../decorators';
import { Subtitle, Title, Label, Heading, Subheading } from '@pxblue/react-native-components';
import { View } from 'react-native';
import { blue, red } from '@pxblue/colors';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('all types', () =>
    <View>
      <Heading>This is a Heading</Heading>
      <Subheading>This is a Subheading</Subheading>
      <Title>This is a Title</Title>
      <Subtitle>This is a Subtitle</Subtitle>
      <Label>This is a Label</Label>
      <Label style={{ color: blue[900] }}>Typography styles can be overridden</Label>
      <Label theme={{ colors: { text: red[900]} }}>Their themes can be overridden as well</Label>
      <Label fontSize={'small'} font={'light'}>You can even override which parts of themes they use</Label>
    </View>
  );
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { safeArea } from '../decorators';
import { Subtitle, Title, Label, Heading, Subheading, Body } from '@pxblue/react-native-components';
import { View } from 'react-native';
import { purple, green } from '@pxblue/colors';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('default appearance', () =>
    <View>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <Label>Label</Label>
      <Body>Body</Body>
    </View>
  )
  .add('with color props', () =>
    <View>
      <Heading color={'primary'}>Primary</Heading>
      <Subheading color={'accent'}>Accent</Subheading>
      <Title color={'error'}>Error</Title>
      <Subtitle color={'text'}>Text</Subtitle>
    </View>
  )
  .add('with custom styles', () =>
    <View>
      <Label style={{ color: purple[500] }}>Typography styles can be overridden</Label>
      <Label theme={{ colors: { text: green[900]} }}>Their themes can be overridden as well</Label>
      <Label fontSize={'small'} font={'light'}>You can even override which parts of themes they use</Label>
    </View>
  );
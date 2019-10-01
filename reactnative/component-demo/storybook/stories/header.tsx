import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, text, withKnobs } from '@storybook/addon-knobs';
import { Header } from '@pxblue/react-native-components';
import { blue, white, red, green } from '@pxblue/colors';

const backgroundImage = require('../assets/farm.jpg');

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with default colors from theme', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'cloud-upload', onPress: () => {}},
        {icon: 'mail', onPress: () => {}},
        {icon: 'more-vert', onPress: () => {}}
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
    />
  ))
  .add('with background image', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'cloud-upload', onPress: () => {}},
        {icon: 'mail', onPress: () => {}},
        {icon: 'more-vert', onPress: () => {}}
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      backgroundImage={backgroundImage}
    />
  ))
  .add('with no subtitle', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'cloud-upload', onPress: () => {}},
        {icon: 'mail', onPress: () => {}},
        {icon: 'more-vert', onPress: () => {}}
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
    />
  ))
  .add('with search', () => (
    <Header
      expandable={true}
      title={text('title', 'With Search')}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'more-vert', onPress: () => {}}
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      searchableConfig={{ placeholder: 'Search', autoFocus: true }}
    />
  ))
  .add('with specified colors', () => (
    <Header
      expandable={true}
      title={text('title', 'With Search')}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'more-vert', onPress: () => {}}
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      searchableConfig={{ placeholder: 'Search', autoFocus: true }}
      fontColor={color('fontColor', blue[900])}
      backgroundColor={color('backgroundColor', blue[100])}
    />
  ));

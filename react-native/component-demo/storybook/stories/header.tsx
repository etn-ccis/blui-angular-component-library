import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, text, withKnobs } from '@storybook/addon-knobs';
import { Header } from '@pxblue/react-native-components';
import { blue, white } from '@pxblue/colors';

const backgroundImage = require('../assets/farm.jpg');

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with all props', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'search', onPress: () => {}},
        {icon: 'mail', onPress: () => {}},
        {icon: 'more-vert', onPress: () => {}}
      ]}
      backgroundColor={color('backgroundColor', blue[500])}
      fontColor={color('fontColor', white[500])}
      backgroundImage={backgroundImage}
    />
  ));

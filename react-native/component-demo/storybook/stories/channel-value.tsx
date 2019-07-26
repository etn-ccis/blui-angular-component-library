import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { ChannelValue } from '@pxblue/react-native-components';
import { text } from '@storybook/addon-knobs';

storiesOf('ChannelValue', module)
  .add('without icon', () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChannelValue value={'123'} />
    </View>
  ), {
    notes: 'sample ChannelValue'
  });
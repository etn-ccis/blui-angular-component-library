import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, View } from 'react-native';
import { ChannelValue } from '@pxblue/react-native-components';

storiesOf('ChannelValue', module)
  .add('without icon', () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChannelValue value={123} />
    </View>
  ), {
    notes: 'This is just a button.'
  });
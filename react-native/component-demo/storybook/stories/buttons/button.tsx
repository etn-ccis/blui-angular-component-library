import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, View } from 'react-native';

storiesOf('Buttons', module).add('React Native Button', () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button title={'Press Me!'} onPress={() => {
    }} color={'blue'}/>
  </View>
), {
  notes: 'This is just a button.'
});

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from 'react-native';
import { centered } from '../../decorators';

storiesOf('Buttons', module)
  .addDecorator(centered)
  .add('React Native Button', () => (
    <Button title={'Press Me!'} onPress={() => {
    }} color={'blue'}/>
), {
  notes: 'This is just a button.'
});

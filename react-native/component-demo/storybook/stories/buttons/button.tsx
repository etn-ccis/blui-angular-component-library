import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

storiesOf('Buttons', module).add('React Native Button', () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button title={'Press Me!'} onPress={() => {
    }} color={'blue'}/>
  </View>
), {
  notes: 'This is just a button.'
})
  .add('SVG test', () => (
    <View
      style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
    </View>
  ));

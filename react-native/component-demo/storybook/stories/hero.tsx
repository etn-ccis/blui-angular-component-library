import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '../decorators';
import { Hero } from '@pxblue/react-native-components';
import Leaf from '@pxblue/icons-svg/leaf.svg';

const icon = <Leaf fill={'green'}/>;

storiesOf('Hero', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('with only required props', () => (
    <Hero label={'Leaf'} icon={icon}/>
  ))
  .add('with value', () => (
    <Hero label={'Leaf'} icon={icon} value={100}/>
  ))
  .add('with value and units', () => (
    <Hero label={'Leaf'} icon={icon} value={100} units={'leaves'}/>
  ));

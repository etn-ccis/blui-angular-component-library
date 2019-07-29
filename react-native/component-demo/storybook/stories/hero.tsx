import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import { centered } from '../decorators';
import { Hero } from '@pxblue/react-native-components';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const icon = <Leaf height={36} width={36} fill={'green'}/>;
const cloud = <Icon name={'cloud-off-outline'} size={36} color={'blue'}/>;
const line = <Icon name={'chart-line-variant'} size={12} color={'red'}/>;

storiesOf('Hero', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('with only required props', () => (
    <Hero label={text('label', 'Leaf')} icon={icon}/>
  ))
  .add('with value', () => (
    <Hero label={text('label', 'Leaf')} icon={icon} value={text('value', '100')}/>
  ))
  .add('with value and units', () => (
    <Hero
      label={text('label', 'Leaf')}
      icon={icon}
      value={text('value', '100')}
      units={text('units', 'leaves')}
    />
  ))
  .add('material icon with all props', () => (
    <Hero
      label={text('label', 'No Clouds')}
      icon={cloud}
      value={text('value', '100')}
      units={text('units', '°C')}
      valueIcon={line}
    />
  ));

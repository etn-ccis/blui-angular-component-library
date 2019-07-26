import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Hero, HeroBanner } from '@pxblue/react-native-components';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import { safeArea } from '../decorators';

const icon = <Leaf height={36} width={36} fill={'green'}/>;

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('with one Hero component', () => (
    <HeroBanner divider={boolean('divider', true)}>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
    </HeroBanner>
  ))
  .add('with two Hero components', () => (
    <HeroBanner divider={boolean('divider', true)}>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
    </HeroBanner>
  ))
  .add('with three Hero components', () => (
    <HeroBanner divider={boolean('divider', true)}>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
    </HeroBanner>
  ))
  .add('with four Hero components', () => (
    <HeroBanner divider={boolean('divider', true)}>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
      <Hero label={'Leaf'} icon={icon} value={100} units={'%'}/>
    </HeroBanner>
  ));

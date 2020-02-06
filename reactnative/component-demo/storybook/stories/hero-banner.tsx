import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';
import { Hero, HeroBanner, ChannelValue } from '@pxblue/react-native-components';
import _Leaf from '@pxblue/icons-svg/leaf.svg';
import _A from '@pxblue/icons-svg/grade_a.svg';
import _Battery from '@pxblue/icons-svg/battery.svg';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { safeArea } from '../decorators';
import { green, blue, gray } from '@pxblue/colors';
import { wrapIcon } from '@pxblue/react-native-components';

const ChartLineVariant = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-line-variant'})
const Battery = wrapIcon({ IconClass: _Battery });
const A = wrapIcon({ IconClass: _A });
const Pie = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-pie' });
const Clock = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'clock-outline' });

const heroes = [
  <Hero
    label={'Healthy'}
    value={96}
    units={'/100'}
    IconClass={A} 
    iconColor={green[500]}
  />,
  <Hero
    label={'Battery'}
    value={'Full'}
    IconClass={Battery} 
    iconColor={blue[500]}
  />,
  <Hero
    label={'Estimated'}
    IconClass={Clock} 
    iconColor={gray[500]}
  >
    <ChannelValue fontSize={'large'} value={1} units={'h'} />
    <ChannelValue fontSize={'large'} value={37} units={'m'} />
  </Hero>,
  <Hero
    label={'Loaded'}
    IconClass={Pie} 
    iconColor={blue[500]}
  >
    <ChannelValue fontSize={'large'} value={65} units={'%'} IconClass={ChartLineVariant} />
  </Hero>,
  <Hero
    label={'Not Shown'}
    value={'5th Item'}
    IconClass={Battery} 
    iconColor={blue[500]}
  />
]

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('with a variety of Heroes', () => (
    <HeroBanner divider={boolean('divider', true)} limit={number('limit', 4)}>
      {heroes.slice(0, (number('count', 4, { range: true, min: 0, max: 5, step: 1 })))}
    </HeroBanner>
  ));

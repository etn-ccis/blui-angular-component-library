import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';
import { Hero, HeroBanner, ChannelValue } from '@pxblue/react-native-components';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import A from '@pxblue/icons-svg/grade_a.svg';
import Battery from '@pxblue/icons-svg/battery.svg';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { safeArea } from '../decorators';
import { green, blue, gray, red } from '@pxblue/colors';
import { wrapIcon } from '@pxblue/react-native-components/dist/icon-wrapper/icon-wrapper';

const ChartLineVariant = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-line-variant'})

const heroes = [
  <Hero
    label={'Healthy'}
    value={96}
    units={'/100'}
    icon={<A height={36} width={36} fill={green[500]} />}
  />,
  <Hero
    label={'Battery'}
    value={'Full'}
    icon={<Battery height={36} width={36} fill={blue[500]} />}
  />,
  <Hero
    label={'Estimated'}
    icon={<Ionicon name={'md-stopwatch'} size={36} color={gray[500]} />}
  >
    <ChannelValue value={1} units={'h'} />
    <ChannelValue value={37} units={'m'} />
  </Hero>,
  <Hero
    label={'Loaded'}
    icon={<MaterialCommunityIcon name={'chart-pie'} size={36} color={blue[500]} />}
  >
    <ChannelValue value={65} units={'%'} IconClass={ChartLineVariant} />
  </Hero>,
  <Hero
    label={'Fifth item'}
    value={'Will not be shown'}
    icon={<Battery height={36} width={36} fill={blue[500]} />}
  />
]

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('with a variety of Heroes', () => (
    <HeroBanner divider={boolean('divider', true)}>
      {heroes.slice(0, (number('count', 4, { range: true, min: 0, max: 5, step: 1 })))}
    </HeroBanner>
  ));

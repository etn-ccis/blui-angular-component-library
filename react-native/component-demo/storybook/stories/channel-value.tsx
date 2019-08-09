import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { ChannelValue } from '@pxblue/react-native-components';
import { text, withKnobs, boolean, number, color, select } from '@storybook/addon-knobs';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wrapIcon } from '@pxblue/react-native-components';

const notes = {
  notes: 'Any React Element may be passed in as `icon`; if using an svg, its color and size are not controlled by `ChannelValue`'
};

const WrappedLeaf = wrapIcon({ IconClass: Leaf });
const WrappedIcon = wrapIcon({ IconClass: Icon, name: 'chart-pie' });

storiesOf('ChannelValue', module)
  .addDecorator(withKnobs)
  .add('with only required props', () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChannelValue
        value={text('value', text('value', '123'))}
      />
    </View>
  ), notes)
  .add('with icon', () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChannelValue
        value={text('value', text('value', '123'))}
        IconClass={WrappedLeaf}
      />
    </View>
  ), notes)
  .add('with units and overridden theme', () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChannelValue
        value={text('value', text('value', '123'))}
        units={text('units', 'hz')}
        theme={{
          sizes: { medium: 77 }
        }}
      />
    </View>
  ), notes)
  .add('with all props', () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChannelValue
        value={text('value', text('value', '123'))}
        IconClass={WrappedIcon}
        units={text('units', 'hz')}
        prefix={boolean('prefix', false)}
        fontSize={select('fontSize', { small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' }, 'medium')}
        color={color('color', 'blue')}
      />
    </View>
  ), notes);

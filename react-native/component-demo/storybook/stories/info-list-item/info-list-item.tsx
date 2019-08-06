import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { InfoListItem } from '@pxblue/react-native-components';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import { framedRow } from '../../decorators';
import { wrapIcon } from '@pxblue/react-native-components/dist/icon-wrapper/icon-wrapper';

const notes = {
  notes: 'The borders are NOT part of the component; they are provided for framing only. Any React Element may be passed in as `icon`; if using an svg, its color and size are not controlled by `ChannelValue`'
};

const LeafIcon = wrapIcon({ IconClass: Leaf });

storiesOf('InfoListItem', module)
  .addDecorator(withKnobs)
  .addDecorator(framedRow)
  .add('without the fancy stuff', () => (
    <InfoListItem
      title={text('title', 'Test')}
      subtitle={text('subtitle', 'A simpler view')}
    />
  ), notes)
  .add('with all props', () => (
    <InfoListItem
      title={text('title', 'Test')}
      IconClass={LeafIcon}
      subtitle={text('subtitle', 'the subtitle can be text or a list of elements')}
      color={color('tabColor', '#4455cc')}
    />
  ), notes)
  .add('with long text', () => (
    <InfoListItem
      title={text('title', 'This is a really really really really really really really really long title')}
      IconClass={LeafIcon}
      subtitle={text('subtitle', 'this is a really really really really really really really really really really long subtitle')}
      color={color('tabColor', '#4455cc')}
    />
  ), notes)
  .add('with long text and a chevron', () => (
    <InfoListItem
      title={text('title', 'This is a really really really really really really really really long title')}
      IconClass={LeafIcon}
      subtitle={text('subtitle', 'this is a really really really really really really really really really really long subtitle')}
      color={color('tabColor', '#4455cc')}
      onPress={() => {}}
    />
  ), notes)
  .add('array for subtitles', () => (
    <InfoListItem
      title={text('title', 'Test')}
      IconClass={LeafIcon}
      subtitle={['4', <Leaf width={12} height={12} />, 'leaves']}
      color={color('tabColor', '#4455cc')}
    />
  ), notes);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { InfoListItem, ChannelValue } from '@pxblue/react-native-components';
import { text, boolean, withKnobs, color } from '@storybook/addon-knobs';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import { framedRow } from '../../decorators';
import { wrapIcon } from '@pxblue/react-native-components';
import * as PXBColors from '@pxblue/colors';

const notes = {
  notes: 'The borders are NOT part of the component; they are provided for framing only. Any React Element may be passed in as `icon`; if using an svg, its color and size are not controlled by `ChannelValue`'
};

const LeafIcon = wrapIcon({ IconClass: Leaf });
storiesOf('InfoListItem', module)
  .addDecorator(withKnobs)
  .addDecorator(framedRow)
  .add('basic list item', () => (
    <InfoListItem
      title={text('title', 'Test')}
      subtitle={text('subtitle', 'A simpler view')}
      hidePadding={boolean('hidePadding', true)}
      divider={boolean('divider', true) ? 'full' : undefined}
    />
  ), notes)
  .add('with icon', () => (
    <InfoListItem
      title={text('title', 'Test')}
      avatar={boolean('avatar', false)}
      IconClass={LeafIcon}
      iconColor={color('iconColor', '#ff3333')}
      subtitle={text('subtitle', 'A simpler view')}
    />
  ), notes)
  .add('with status and background color', () => (
    <InfoListItem
      title={text('title', 'Test')}
      IconClass={LeafIcon}
      avatar={boolean('avatar', false)}
      subtitle={text('subtitle', 'A simpler view')}
      statusColor={color('statusColor', '#ff3333')}
      fontColor={color('fontColor', '#ff3333')}
      backgroundColor={color('backgroundColor', PXBColors.blue[50])}
    />
  ), notes)
  .add('with long text', () => (
    <InfoListItem
      title={text('title', 'This is a really really really really really really really really long title')}
      IconClass={LeafIcon}
      subtitle={text('subtitle', 'this is a really really really really really really really really really really long subtitle')}
      onPress={boolean('action', true) ? () => {} : undefined}
    />
  ), notes)
  .add('array for subtitles', () => (
    <InfoListItem
      title={text('title', 'Test')}
      IconClass={LeafIcon}
      subtitle={['4', <Leaf width={12} height={12} />, 'leaves']}
      subtitleSeparator={text('separator', '-')}
    />
  ), notes)
  .add('with custom control', () => (
    <InfoListItem
      title={text('title', 'Test')}
      IconClass={LeafIcon}
      subtitle={text('subtitle', 'A simpler view')}
      rightComponent={<ChannelValue value={15} units={'A'}/>}
    />
  ), notes);

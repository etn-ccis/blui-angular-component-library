import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, text, withKnobs } from '@storybook/addon-knobs';
import { Header } from '@pxblue/react-native-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { blue } from '@pxblue/colors';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import { wrapIcon } from '@pxblue/react-native-components';

const LeafIcon = wrapIcon({ IconClass: Leaf });
const MailIcon = wrapIcon({IconClass: Icon, name:'mail'});
const MenuIcon = wrapIcon({IconClass: Icon, name:'menu'});
const MoreIcon = wrapIcon({IconClass: Icon, name:'more-vert'});
const CloudIcon = wrapIcon({IconClass: Icon, name:'cloud-upload'});
const backgroundImage = require('../assets/farm.jpg');

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with default colors from theme', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MailIcon, onPress: () => {}},
        {icon: CloudIcon, onPress: () => {}},
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
    />
  ))
  .add('with background image', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MailIcon, onPress: () => {}},
        {icon: MailIcon, onPress: () => {}},
        {icon: MailIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      backgroundImage={backgroundImage}
    />
  ))
  .add('with no subtitle', () => (
    <Header
      expandable={true}
      title={text('title', 'Title')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MailIcon, onPress: () => {}},
        {icon: MailIcon, onPress: () => {}},
        {icon: MailIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
    />
  ))
  .add('with search', () => (
    <Header
      expandable={true}
      title={text('title', 'With Search')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      searchableConfig={{ placeholder: 'Search', autoFocus: true }}
    />
  ))
  .add('with specified colors', () => (
    <Header
      expandable={true}
      title={text('title', 'With Search')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      searchableConfig={{ placeholder: 'Search', autoFocus: true }}
      fontColor={color('fontColor', blue[900])}
      backgroundColor={color('backgroundColor', blue[100])}
    />
  ));

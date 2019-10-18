import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, number, text, withKnobs } from '@storybook/addon-knobs';
import { Header } from '@pxblue/react-native-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { red, green } from '@pxblue/colors';
import { wrapIcon } from '@pxblue/react-native-components';

const MailIcon = wrapIcon({IconClass: Icon, name:'mail'});
const MenuIcon = wrapIcon({IconClass: Icon, name:'menu'});
const MoreIcon = wrapIcon({IconClass: Icon, name:'more-vert'});
const CloudIcon = wrapIcon({IconClass: Icon, name:'cloud-upload'});
const backgroundImage = require('../assets/farm.jpg');

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('standard styling', () => (
    <Header
      title={text('title', 'Title')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MailIcon, onPress: () => {}},
        {icon: CloudIcon, onPress: () => {}},
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
    />
  ))
  .add('expandable with background image', () => (
    <Header
      expandable={true}
      title={text('title', 'Long Title Text')}
      subtitle={text('subtitle', 'Really Really Long Subtitle Text')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MailIcon, onPress: () => {}},
        {icon: CloudIcon, onPress: () => {}},
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      backgroundImage={backgroundImage}
    />
  ))
  .add('with search', () => (
    <Header
      expandable={false}
      title={text('title', 'With Search')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      searchableConfig={{ placeholder: 'Search', autoFocus: true }}
    />
  ))
  .add('with custom colors', () => (
    <Header
      title={text('title', 'With Custom Colors')}
      navigation={{icon: MenuIcon, onPress: () => {}}}
      actionItems={[
        {icon: MoreIcon, onPress: () => {}},
      ].slice(0, (number('action items', 3, { range: true, min: 0, max: 3, step: 1 })))}
      fontColor={color('fontColor', green[900])}
      backgroundColor={color('backgroundColor', red[500])}
    />
  ));

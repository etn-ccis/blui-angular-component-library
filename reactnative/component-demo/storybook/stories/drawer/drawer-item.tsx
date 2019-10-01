import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Drawer, wrapIcon } from '@pxblue/react-native-components';
import { framedRow } from '../../decorators';
import Leaf from '@pxblue/icons-svg/leaf.svg';

const LeafIcon = wrapIcon({ IconClass: Leaf });

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .addDecorator(framedRow)
  .add('Drawer.Item', () => (
    <Drawer.Item
      active={boolean('active', true)}
      onPress={() => {}}
      label={text('label', 'Drawer Item')}
      IconClass={LeafIcon}
    />
  ));

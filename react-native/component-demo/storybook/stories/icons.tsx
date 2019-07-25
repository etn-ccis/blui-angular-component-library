import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import Wheat from '@pxblue/icons-svg/wheat.svg';
import { centered } from '../decorators';
import { color, withKnobs } from '@storybook/addon-knobs';

storiesOf('Icons', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Leaf', () => (
      <Leaf width={50} height={50} fill={color('fill', 'green')}/>
    )
  )
  .add('Wheat', () => (
      <Wheat width={50} height={50} fill={color('fill', 'brown')}/>
    )
  );

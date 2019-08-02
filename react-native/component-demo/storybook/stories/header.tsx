import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { Header } from '@pxblue/react-native-components';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with all props', () => (
    <Header
      expandable={true}
      title={'Title'}
      subtitle={'Subtitle'}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'search', onPress: () => {}},
        {icon: 'mail', onPress: () => {}},
        {icon: 'more-vert', onPress: () => {}}
      ]}
    />
  ));

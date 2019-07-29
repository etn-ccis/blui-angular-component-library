import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LayoutView } from '@pxblue/react-native-components';
import { View, Text, SafeAreaView } from 'react-native'

const header = (
  <SafeAreaView style={{flex: 0, height: '15%', backgroundColor: 'lightblue'}}>
    <Text>I'm in a header.</Text>
  </SafeAreaView>
);

const content = (
  <Text style={{marginVertical: 8, marginHorizontal: 16}}>I'm in a layout view.</Text>
);

const footer = (
  <SafeAreaView style={{flex: 0, height: '15%', backgroundColor: 'pink'}}>
    <Text>I'm in a footer.</Text>
  </SafeAreaView>
);

storiesOf('LayoutView', module)
  .add('with no header and footer', () => (
    <LayoutView>
      {content}
    </LayoutView>
  ))
  .add('with a header and no footer', () => (
    <LayoutView header={header}>
      {content}
    </LayoutView>
  ))
  .add('with a footer and no header', () => (
    <LayoutView footer={footer}>
      {content}
    </LayoutView>
  ))
  .add('with a footer and header', () => (
    <LayoutView header={header} footer={footer}>
      {content}
    </LayoutView>
  ));

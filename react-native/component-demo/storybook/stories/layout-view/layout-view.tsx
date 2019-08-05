import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LayoutView } from '@pxblue/react-native-components';
import { SafeAreaView, Text, View } from 'react-native';
import faker from 'faker';
import { Appbar, TextInput } from 'react-native-paper';
import { blue } from '@pxblue/colors';
import { color, withKnobs } from '@storybook/addon-knobs';

const notes = {
  notes: 'Any React Element may be passed in as `header` or `footer`. ' +
    'There is also the prop `needsKeyboard` which may be used if there is a text input in the content that needs to not be covered by a keyboard.' +
    'However, this functionality is buggy when demoed for iOS using Storybook, so check the docs for a gif showing it instead.'
};

const header = (
  <Appbar.Header style={{backgroundColor: blue[500]}}>
    <Appbar.BackAction/>
    <Appbar.Content title={'Title'} subtitle={'Subtitle'}/>
    <Appbar.Action icon={'search'}/>
    <Appbar.Action icon={'more-vert'}/>
  </Appbar.Header>
);

const content = (
  <View style={{flex: 1, marginVertical: 8, marginHorizontal: 16}}>
    <TextInput mode={'outlined'} label={'Text Input 1'} placeholder={'Type Here'}/>
    <TextInput mode={'outlined'} label={'Text Input 2'} placeholder={'Type Here'}/>
    <Text style={{marginTop: 8}}>{faker.lorem.paragraphs(2)}</Text>
  </View>
);

const footer = (
  <SafeAreaView style={{backgroundColor: blue[500], zIndex: 100}}>
    <Appbar style={{backgroundColor: blue[500], shadowOpacity: 0}}>
      <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
      <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
      <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
      <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
    </Appbar>
  </SafeAreaView>
);

storiesOf('LayoutView', module)
  .addDecorator(withKnobs)
  .add('with no header and footer', () => (
    <LayoutView backgroundColor={color('backgroundColor', 'transparent')}>
      {content}
    </LayoutView>
  ), notes)
  .add('with a header and no footer', () => (
    <LayoutView header={header} backgroundColor={color('backgroundColor', 'transparent')}>
      {content}
    </LayoutView>
  ), notes)
  .add('with a footer and no header', () => (
    <LayoutView footer={footer} backgroundColor={color('backgroundColor', 'transparent')}>
      {content}
    </LayoutView>
  ), notes)
  .add('with a footer and header', () => (
    <LayoutView header={header} footer={footer} backgroundColor={color('backgroundColor', 'transparent')}>
      {content}
    </LayoutView>
  ), notes);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LayoutView } from '@pxblue/react-native-components';
import { SafeAreaView, Text, View } from 'react-native';
import faker from 'faker';
import { Appbar, TextInput } from 'react-native-paper';
import { blue } from '@pxblue/colors';

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
    <TextInput mode={'outlined'} label={'Username'} placeholder={'Type Here'}/>
    <TextInput mode={'outlined'} label={'Password'} placeholder={'Type Here'}/>
    <Text style={{marginTop: 8}}>{faker.lorem.paragraphs(1)}</Text>
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
  .add('with no header and footer', () => (
    <LayoutView>
      {content}
    </LayoutView>
  ))
  .add('with a background color and no header and footer', () => (
    <LayoutView backgroundColor={'lightgreen'}>
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

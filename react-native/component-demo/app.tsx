import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import faker from 'faker';
import { LayoutView } from '@pxblue/react-native-components';
import { Appbar, TextInput } from 'react-native-paper';
import { blue } from "@pxblue/colors";

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
    <Text style={{marginTop: 8}}>{faker.lorem.paragraphs(1)}</Text>
    <TextInput mode={'outlined'} label={'Text Input 1'} placeholder={'Type Here'}/>
    <Text style={{marginTop: 8}}>{faker.lorem.paragraphs(3)}</Text>
    <TextInput mode={'outlined'} label={'Text Input 2'} placeholder={'Type Here'}/>
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

class App extends React.Component {
  render() {
    return (
      <LayoutView needsKeyboard={true} header={header} footer={footer}>
        {content}
      </LayoutView>
    )
  }
}

export default App;

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import faker from 'faker';
import { LayoutView } from '@pxblue/react-native-components';

const header = (
  <SafeAreaView style={{
    height: 96,
    backgroundColor: 'lightblue'
  }}>
    <Text>I'm in a header.</Text>
  </SafeAreaView>
);

const content = (
  <View style={{flex: 1, marginVertical: 8, marginHorizontal: 16}}>
    <Text>{faker.lorem.paragraphs(4)}</Text>
    <TextField title={'Enter your username here'} label={'Username'} placeholder={'Type Here'}/>
    <TextField title={'Enter your password here'} label={'Password'} placeholder={'Type Here'}/>
  </View>
);

const footer = (
  <SafeAreaView style={{
    height: 96,
    backgroundColor: 'pink'
  }}>
    <Text>I'm in a footer.</Text>
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

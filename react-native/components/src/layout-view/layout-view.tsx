import React, { Fragment } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export interface LayoutViewProps {

}

export class LayoutView extends React.Component<LayoutViewProps> {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{backgroundColor: 'lightblue'}}/>
        <SafeAreaView style={styles.container}>
          <Text>I'm a layout view.</Text>
        </SafeAreaView>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightgreen'
  }
});

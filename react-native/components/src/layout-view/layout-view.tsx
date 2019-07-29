import React, { Fragment } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export interface LayoutViewProps {
  header?: React.ReactElement;
  footer?: React.ReactElement;
}

export class LayoutView extends React.Component<LayoutViewProps> {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {this.header()}
        <SafeAreaView style={styles.content}>
          {children}
        </SafeAreaView>
        {this.footer()}
      </Fragment>
    )
  }

  private header() {
    if (this.props.header) {
      return this.props.header;
    } else {
      return <SafeAreaView/>;
    }
  }

  private footer() {
    if (this.props.footer) {
      return this.props.footer;
    } else {
      return <SafeAreaView/>
    }
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gray } from '@pxblue/colors';

export interface DrawerSectionProps {
  title?: string;
  children: React.ReactNode;
  divider?: boolean;
}

export class DrawerSection extends React.Component<DrawerSectionProps> {
  static displayName = 'Drawer.Section';

  public render() {
    const { children } = this.props;
    return (
      <View style={styles.section}>
        {this.title()}
        {children}
        {this.divider()}
      </View>
    )
  }

  private title() {
    const { title } = this.props;

    if (title) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )
    }
  }

  private divider() {
    const { divider = true } = this.props;

    if (divider) {
      return (
        <View style={styles.divider}/>
      )
    }
  }
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 8
  },
  titleContainer: {
    // backgroundColor: 'lightgreen',
    height: 28,
    paddingHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'flex-end'
  },
  title: {
    // marginLeft: 16,
    // marginBottom: 8,
    fontSize: 13,
    color: gray[500]
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: gray[100],
    paddingTop: 8
  }
});

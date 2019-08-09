import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { DrawerItem } from './drawer-item';
import { DrawerSection } from './drawer-section';
import { black, blue, gray, white } from '@pxblue/colors';
import { DrawerPage } from './drawer-page';

export interface DrawerProps {
  title: string;
  subtitle?: string;
  children: React.ReactElement | [React.ReactElement] | [React.ReactElement, React.ReactElement];
}

interface DrawerState {
  pageToggled: boolean;
}

export class Drawer extends React.Component<DrawerProps, DrawerState> {
  public static Item = DrawerItem;
  public static Section = DrawerSection;
  public static Page = DrawerPage;

  constructor(props: DrawerProps) {
    super(props);

    this.state = {
      pageToggled: false
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 0, backgroundColor: blue[500] }}/>
        <SafeAreaView style={{ flex: 1 }}>
          {this.header()}
          {this.content()}
        </SafeAreaView>
      </View>
    );
  }

  private header() {
    const { title } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.togglePage()} disabled={this.singlePage()}>
          <Text style={styles.title}>User Name</Text>
          {this.subtitle()}
        </TouchableOpacity>
      </View>
    )
  }

  private subtitle() {
    const { subtitle } = this.props;

    if (subtitle) {
      return (
        <Text style={styles.subtitle}>{subtitle}</Text>
      );
    }
  }

  private content() {
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    const { pageToggled } = this.state;

    const page = pageToggled ? 1 : 0;
    const content = children.length > 1 ? children[page] : children;

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {content}
      </ScrollView>
    )
  }

  private singlePage() {
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    return children.length < 2;
  }

  private togglePage() {
    const { pageToggled } = this.state;

    this.setState({
      pageToggled: !pageToggled
    })
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: blue[500],
    padding: 16
  },
  title: {
    fontSize: 20,
    color: white[500]
  },
  subtitle: {
    fontSize: 13,
    color: white[500]
  }
});

import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { DrawerItem } from './drawer-item';
import { DrawerSection } from './drawer-section';
import { black, blue, gray, white } from '@pxblue/colors';
import { DrawerPage } from './drawer-page';

export interface DrawerProps {
  title: string;
  subtitle?: string;
  headerContent?: React.ReactNode;
  footer?: React.ReactNode;
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

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 0, backgroundColor: blue[500] }}/>
        <View style={{ flex: 1 }}>
          {this.header()}
          {this.content()}
        </View>
      </View>
    );
  }

  private header() {
    const { title } = this.props;
    return (
      <View style={styles.header}>
        {this.headerContent()}
        <TouchableOpacity onPress={() => this.togglePage()} disabled={this.singlePage()}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title}>{title}</Text>
          {this.subtitle()}
        </TouchableOpacity>
      </View>
    )
  }

  private headerContent() {
    const { headerContent } = this.props;

    if (headerContent) {
      return (
        <View style={styles.headerContent}>
          {headerContent}
        </View>
      )
    }
  }

  private subtitle() {
    const { subtitle } = this.props;

    if (subtitle) {
      return (
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.subtitle}>{subtitle}</Text>
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
        {this.footer()}
      </ScrollView>
    )
  }

  private footer() {
    const { footer } = this.props;

    if (footer) {
      return (
        <View style={styles.footer}>
          {footer}
        </View>
      )
    }
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
  headerContent: {
    flex: 0,
    justifyContent: 'center',
    paddingBottom: 8
  },
  title: {
    fontSize: 20,
    color: white[500]
  },
  subtitle: {
    fontSize: 13,
    color: white[500]
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16
  }
});

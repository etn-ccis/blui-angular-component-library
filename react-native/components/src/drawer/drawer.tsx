import React, { createRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerItem } from './drawer-item';
import { DrawerSection } from './drawer-section';
import { blue, white } from '@pxblue/colors';
import { DrawerPage } from './drawer-page';
import color from 'color';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface DrawerProps {
  title: string;
  subtitle?: string;
  headerContent?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  children: React.ReactElement | [React.ReactElement] | [React.ReactElement, React.ReactElement];
}

interface DrawerState {
  pageToggled: boolean;
}

/**
 * Drawer component
 *
 * This component is meant to be used as the drawer menu that
 * can be used to switch between screens in your app.
 */
export class Drawer extends React.Component<DrawerProps, DrawerState> {
  public static Item = DrawerItem;
  public static Section = DrawerSection;
  public static Page = DrawerPage;

  private scrollViewRef = createRef<ScrollView>();

  constructor(props: DrawerProps) {
    super(props);

    this.state = {
      pageToggled: false
    }
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={this.statusBarStyle()}/>
        <SafeAreaView style={{ flex: 0, backgroundColor: this.backgroundColor() }}/>
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
      <View style={this.headerStyle()}>
        {this.headerContent()}
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.togglePage()} disabled={this.singlePage()}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={this.titleStyle()}>{title}</Text>
            {this.subtitle()}
          </View>
          {this.pageToggleIcon()}
        </TouchableOpacity>
      </View>
    )
  }

  private pageToggleIcon() {
    const { pageToggled } = this.state;

    if (!this.singlePage()) {
      const icon = pageToggled
        ? <Icon name={'caret-up'} size={18} color={this.fontColor()}/>
        : <Icon name={'caret-down'} size={18} color={this.fontColor()}/>;

      return (
        <View style={styles.titleIconContainer}>{icon}</View>
      )
    }
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
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={this.subtitleStyle()}>{subtitle}</Text>
      );
    }
  }

  private content() {
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    const { pageToggled } = this.state;

    const page = pageToggled ? 1 : 0;
    const content = children.length > 1 ? children[page] : children;

    return (
      <ScrollView ref={this.scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
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
    const scrollView = this.scrollViewRef.current;

    if (scrollView) {
      scrollView.scrollTo({ x: 0, y: 0, animated: false });
    }

    this.setState({
      pageToggled: !pageToggled
    })
  }

  private statusBarStyle() {
    return color(this.backgroundColor()).isDark() ? 'light-content' : 'dark-content';
  }

  private headerStyle() {
    return [
      styles.header,
      { backgroundColor: this.backgroundColor() }
    ];
  }

  private titleStyle() {
    return [
      styles.title,
      { color: this.fontColor() }
    ];
  }

  private subtitleStyle() {
    return [
      styles.subtitle,
      { color: this.fontColor() }
    ];
  }

  private backgroundColor() {
    const { backgroundColor } = this.props;
    return backgroundColor ? backgroundColor : blue[500];
  }

  private fontColor() {
    const { fontColor } = this.props;
    return fontColor ? fontColor : white[500];
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 16
  },
  headerContent: {
    flex: 0,
    justifyContent: 'center',
    paddingBottom: 8
  },
  titleContainer: {
    flexDirection: 'column'
  },
  titleIconContainer: {
    flex: 1,
    padding: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 13
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16
  }
});

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface HeaderIcon {
  icon: string;
  onPress: () => void;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  navigation?: HeaderIcon;
  actionItems?: HeaderIcon[];
  expandable?: boolean;
}

export class Header extends React.Component<HeaderProps> {
  static readonly REGULAR_HEIGHT = 56 + getStatusBarHeight();
  static readonly EXTENDED_HEIGHT = 128 + getStatusBarHeight();
  static readonly ICON_SIZE = 24;

  render() {
    const { expandable = false } = this.props;
    const barStyle = this.barStyle();
    const contentStyle = this.contentStyle();

    return (
      <TouchableWithoutFeedback disabled={this.props.expandable}>
      <SafeAreaView style={barStyle}>
        <View style={contentStyle}>
          {this.navigation()}
          {this.title()}
          {this.actionItems()}
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    )
  }

  private navigation() {
    const { navigation } = this.props;
    if ( navigation ) {
      return (
        <TouchableOpacity onPress={navigation.onPress} style={styles.navigation}>
          <Icon name={navigation.icon} size={Header.ICON_SIZE}/>
        </TouchableOpacity>
      )
    }
  }

  private title() {
    const { title } = this.props;
    return (
      <Text style={styles.title}>{title}</Text>
    );
  }

  private actionItems() {
    const { actionItems } = this.props;
    if ( actionItems ) {
      return actionItems.map(actionItem => (
        <TouchableOpacity onPress={actionItem.onPress} style={styles.actionItem}>
          <Icon name={actionItem.icon} size={Header.ICON_SIZE}/>
        </TouchableOpacity>
      ))
    }
  }

  private barStyle() {
    return [styles.bar, { height: Header.REGULAR_HEIGHT }];
  }

  private contentStyle() {
    return [styles.content];
  }
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    backgroundColor: 'lightblue'
  },
  content: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row'
  },
  navigation: {
    marginRight: 32
  },
  title: {
    flex: 1,
    fontSize: 20,
    backgroundColor: 'pink'
  },
  actionItem: {
    marginLeft: 24
  }
});

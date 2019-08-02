import React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import createAnimatedComponent = Animated.createAnimatedComponent;

const AnimatedSafeAreaView = createAnimatedComponent(SafeAreaView);

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

interface HeaderState {
  expanded: boolean;
  headerHeight: Animated.Value;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  static readonly REGULAR_HEIGHT = 56 + getStatusBarHeight();
  static readonly EXTENDED_HEIGHT = 128 + getStatusBarHeight();
  static readonly ICON_SIZE = 24;

  private expand: Animated.CompositeAnimation;
  private contract: Animated.CompositeAnimation;

  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      expanded: false,
      headerHeight: new Animated.Value(Header.REGULAR_HEIGHT)
    };

    this.expand = Animated.timing(this.state.headerHeight, {
      toValue: Header.EXTENDED_HEIGHT,
      duration: 300
    });

    this.contract = Animated.timing(this.state.headerHeight, {
      toValue: Header.REGULAR_HEIGHT,
      duration: 300
    });
  }

  render() {
    const { expandable = false } = this.props;
    const barStyle = this.barStyle();
    const contentStyle = this.contentStyle();

    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()} disabled={!expandable}>
        <AnimatedSafeAreaView style={barStyle}>
          <View style={contentStyle}>
            {this.navigation()}
            {this.title()}
            {this.actionItems()}
          </View>
        </AnimatedSafeAreaView>
      </TouchableWithoutFeedback>
    )
  }

  private onPress() {
    const { expanded } = this.state;
    if (expanded) {
      this.contract.start();
      this.setState({
        expanded: false
      });
    } else {
      this.expand.start();
      this.setState({
        expanded: true
      });
    }
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
    return [styles.bar, { height: this.state.headerHeight }];
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

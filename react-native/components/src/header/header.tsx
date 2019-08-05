import React from 'react';
import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import createAnimatedComponent = Animated.createAnimatedComponent;
import { blue, white } from '@pxblue/colors';

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
  backgroundColor?: string;
  fontColor?: string;
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
          <Animated.View style={contentStyle}>
            {this.navigation()}
            {this.title()}
            {this.actionItems()}
          </Animated.View>
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
          <Icon name={navigation.icon} size={Header.ICON_SIZE} color={this.fontColor()}/>
        </TouchableOpacity>
      )
    }
  }

  private title() {
    const { title } = this.props;
    return (
      <View style={styles.titleContainer}>
        <View style={{flex: 0, justifyContent: 'center'}}>
          <Animated.Text
            style={this.titleStyle()}
            numberOfLines={2}
            ellipsizeMode={'clip'}
          >
            {title}
          </Animated.Text>
          {this.subtitle()}
        </View>
      </View>
    );
  }

  private subtitle() {
    const { subtitle } = this.props;
    if (subtitle) {
      return <Animated.Text
        style={this.subtitleStyle()}
        numberOfLines={1}
        ellipsizeMode={'clip'}
      >
        {subtitle}
      </Animated.Text>;
    }
  }

  private actionItems() {
    const { actionItems } = this.props;
    if ( actionItems ) {
      return actionItems.map(actionItem => (
        <TouchableOpacity onPress={actionItem.onPress} style={styles.actionItem}>
          <Icon name={actionItem.icon} size={Header.ICON_SIZE} color={this.fontColor()}/>
        </TouchableOpacity>
      ))
    }
  }

  private barStyle() {
    return [styles.bar, {
      height: this.state.headerHeight,
      backgroundColor: this.backgroundColor()
    }];
  }

  private contentStyle() {
    const contractedPadding = this.props.subtitle ? 8 : 16;
    return [styles.content, {
      paddingBottom: this.state.headerHeight.interpolate({
        inputRange: [Header.REGULAR_HEIGHT, Header.EXTENDED_HEIGHT],
        outputRange: [contractedPadding, 28]
      })
    }];
  }

  private titleStyle() {
    return {
      color: this.fontColor(),
      fontSize: this.state.headerHeight.interpolate({
        inputRange: [Header.REGULAR_HEIGHT, Header.EXTENDED_HEIGHT],
        outputRange: [20, 24]
      })
    };
  }

  private subtitleStyle() {
    return {
      color: this.fontColor(),
      fontWeight: '300',
      fontSize: this.state.headerHeight.interpolate({
        inputRange: [Header.REGULAR_HEIGHT, Header.EXTENDED_HEIGHT],
        outputRange: [18, 22]
      })
    };
  }

  private fontColor() {
    return this.props.fontColor ? this.props.fontColor : white[500];
  }

  private backgroundColor() {
    return this.props.backgroundColor ? this.props.backgroundColor : blue[500];
  }
}

const styles = StyleSheet.create({
  bar: {
    width: '100%'
  },
  content: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row'
  },
  navigation: {
    marginRight: 32
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  actionItem: {
    marginLeft: 24
  }
});

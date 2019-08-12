import React, { createRef } from 'react';
import {
  Animated,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { blue, white } from '@pxblue/colors';
import color from 'color';
import createAnimatedComponent = Animated.createAnimatedComponent;

const AnimatedSafeAreaView = createAnimatedComponent(SafeAreaView);

export interface HeaderIcon {
  /** Name of the icon */
  icon: string;

  /** Callback when icon is pressed */
  onPress: () => void;
}

export interface SearchableConfig {
  /** Icon to override default search icon */
  icon?: string;

  /** TextInput Prop. Placeholder text for the search input */
  placeholder?: string;

  /** TextInput Prop. Determines whether the search input will be focused on when it is rendered */
  autoFocus?: boolean;

  /** TextInput Prop. Callback for when the text in the search input changes */
  onChangeText?: (text: string) => void;

  /** TextInput Prop. Determines how the search input will be capitalized */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';

  /** TextInput Prop. Determines whether auto-correct is enabled in the search input */
  autoCorrect?: boolean;
}

export interface HeaderProps {
  /** Header title */
  title: string;

  /** Optional header subtitle */
  subtitle?: string;

  /** Leftmost icon on header, used for navigation */
  navigation?: HeaderIcon;

  /** List of up to three action items on the right of the header */
  actionItems?: HeaderIcon[];

  /** Determines whether the header can be expanded by being pressed */
  expandable?: boolean;

  /** Background color of the header */
  backgroundColor?: string;

  /** Color of the title, subtitle, and icons in the header */
  fontColor?: string;

  /** Background image to render when header is expanded */
  backgroundImage?: ImageSourcePropType;

  /** Configuration object that determines whether the Header can have a search bar */
  searchableConfig?: SearchableConfig;
}

interface HeaderState {
  expanded: boolean;
  searching: boolean;
  query: string;
  headerHeight: Animated.Value;
}

/**
 * Header component
 *
 * This component is used to display a title and navigation and action items on the top of a screen.
 * It can be tapped to expand or contract.
 */
export class Header extends React.Component<HeaderProps, HeaderState> {
  static readonly REGULAR_HEIGHT = 56 + getStatusBarHeight(true);
  static readonly EXTENDED_HEIGHT = 128 + getStatusBarHeight(true);
  static readonly ICON_SIZE = 24;
  static readonly ANIMATION_LENGTH = 300;

  private expand: Animated.CompositeAnimation;
  private contract: Animated.CompositeAnimation;

  private searchRef = createRef<TextInput>();

  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      expanded: false,
      searching: false,
      query: '',
      headerHeight: new Animated.Value(Header.REGULAR_HEIGHT)
    };

    this.expand = Animated.timing(this.state.headerHeight, {
      toValue: Header.EXTENDED_HEIGHT,
      duration: Header.ANIMATION_LENGTH
    });

    this.contract = Animated.timing(this.state.headerHeight, {
      toValue: Header.REGULAR_HEIGHT,
      duration: Header.ANIMATION_LENGTH
    });
  }

  render() {
    const { expandable = false } = this.props;
    const { searching } = this.state;
    const barStyle = this.barStyle();
    const contentStyle = this.contentStyle();

    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()} disabled={!expandable || searching}>
        <AnimatedSafeAreaView style={barStyle}>
          {this.backgroundImage()}
          <Animated.View style={contentStyle}>
            {this.navigation()}
            {this.content()}
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

  private backgroundImage() {
    const { backgroundImage } = this.props;
    if (backgroundImage) {
      return (
        <Animated.Image
          testID={'header-background-image'}
          source={backgroundImage}
          style={{
            position: 'absolute',
            resizeMode: 'cover',
            height: this.state.headerHeight,
            opacity: this.state.headerHeight.interpolate({
              inputRange: [Header.REGULAR_HEIGHT, Header.EXTENDED_HEIGHT],
              outputRange: [0, 0.3]
            })
          }}
        />
      );
    }
  }

  private navigation() {
    const { navigation } = this.props;
    const { searching } = this.state;

    if ( searching ) {
      return (
        <View>
          <TouchableOpacity testID={'header-search-close'} onPress={() => this.onPressSearchClose()} style={styles.navigation}>
            <Icon name={'arrow-back'} size={Header.ICON_SIZE} color={this.fontColor()}/>
          </TouchableOpacity>
        </View>
      )
    }
    if ( navigation ) {
      return (
        <View>
          <TouchableOpacity testID={'header-navigation'} onPress={navigation.onPress} style={styles.navigation}>
            <Icon name={navigation.icon} size={Header.ICON_SIZE} color={this.fontColor()}/>
          </TouchableOpacity>
        </View>
      )
    }
  }

  private content() {
    const { searchableConfig } = this.props;
    const { searching } = this.state;
    let content = [];

    if (searchableConfig && searching) {
      content = [this.search(searchableConfig)];
    } else {
      content = [this.title(), this.subtitle()];
    }
    return (
      <View style={styles.titleContainer}>
        <View style={{flex: 0, justifyContent: 'center'}}>
          {content}
        </View>
      </View>
    );
  }

  private title() {
    const { title } = this.props;
    return (
      <Animated.Text
        key={'header-title'}
        testID={'header-title'}
        style={this.titleStyle()}
        numberOfLines={2}
        ellipsizeMode={'clip'}
      >
        {title}
      </Animated.Text>
    )
  }

  private subtitle() {
    const { subtitle } = this.props;
    if (subtitle) {
      return (
        <Animated.Text
          key={'header-subtitle'}
          testID={'header-subtitle'}
          style={this.subtitleStyle()}
          numberOfLines={1}
          ellipsizeMode={'clip'}
        >
          {subtitle}
        </Animated.Text>
      );
    }
  }

  private search(config: SearchableConfig) {
    const placeholderTextColor = color(this.fontColor()).fade(0.4).string();
    const onChangeText = (text: string) => {
      this.setState({ query: text });
      config.onChangeText && config.onChangeText(text);
    };

    return (
      <TextInput
        key={'search-input'}
        ref={this.searchRef}
        style={this.searchStyle()}
        autoCapitalize={config.autoCapitalize}
        autoCorrect={config.autoCorrect}
        autoFocus={config.autoFocus}
        numberOfLines={1}
        onChangeText={onChangeText}
        placeholder={config.placeholder || 'Search'}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={'search'}
        selectionColor={placeholderTextColor}
        underlineColorAndroid={'transparent'}
      />
    )
  }

  private actionItems() {
    const { actionItems, searchableConfig } = this.props;
    const { searching, query } = this.state;
    let items = actionItems;

    if (searching) {
      if (query) {
        items = [{ icon: 'clear', onPress: () => this.onPressSearchClear() }]
      } else {
        items = [];
      }
    } else if ( searchableConfig ) {
      items = [{icon: 'search', onPress: () => this.onPressSearch() }].concat(actionItems || []);
    }

    if ( items ) {
      return items.slice(0, 3).map((actionItem, index) => (
        <View key={`${index}`}>
          <TouchableOpacity testID={`header-action-item${index}`} onPress={actionItem.onPress} style={styles.actionItem}>
            <Icon name={actionItem.icon} size={Header.ICON_SIZE} color={this.fontColor()}/>
          </TouchableOpacity>
        </View>
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

  private searchStyle() {
    return {
      padding: 0, // TextInput on Android has some default padding, so this needs to be explicitly set to 0
      color: this.fontColor(),
      fontSize: 20
    }
  }

  private fontColor() {
    return this.props.fontColor ? this.props.fontColor : white[500];
  }

  private backgroundColor() {
    return this.props.backgroundColor ? this.props.backgroundColor : blue[500];
  }

  private onPressSearch() {
    this.contract.start(() => this.setState({ searching: true }));
    this.setState({
      expanded: false
    });
  }

  private onPressSearchClose() {
    const searchInput = this.searchRef.current;
    if (searchInput) {
      searchInput.props.onChangeText && searchInput.props.onChangeText('');
    }
    this.setState({
      searching: false,
      query: ''
    });
  }

  private onPressSearchClear() {
    const searchInput = this.searchRef.current;
    if (searchInput) {
      searchInput.clear();
      searchInput.props.onChangeText && searchInput.props.onChangeText('');
    }
    this.setState({
      query: ''
    });
  }
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 0
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

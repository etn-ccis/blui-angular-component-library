import React, { createRef, Component, ComponentType } from 'react';
import {
  Animated,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from 'color';
import createAnimatedComponent = Animated.createAnimatedComponent;
import { withTheme, Theme, WithTheme } from '../theme';
import { wrapIcon } from '../icon-wrapper/icon-wrapper';
import { $DeepPartial } from '@callstack/react-theme-provider';

const ClearIcon = wrapIcon({ IconClass: Icon, name: 'clear' })
const SearchIcon = wrapIcon({ IconClass: Icon, name: 'search' })

const AnimatedSafeAreaView = createAnimatedComponent(SafeAreaView);

export interface HeaderIcon {
  /** Name of the icon */
  icon: ComponentType<{ size: number, color: string }>;

  /** Callback when icon is pressed */
  onPress: () => void;
}

export interface SearchableConfig {
  /** Icon to override default search icon */
  icon?: ComponentType<{ size: number, color: string }>;

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

  /** Optional header third line of text (hidden when collapsed) */
  info?: string;

  /** Leftmost icon on header, used for navigation */
  navigation?: HeaderIcon;

  /** List of up to three action items on the right of the header */
  actionItems?: Array<HeaderIcon>;

  /** Determines whether the header can be expanded by being pressed */
  expandable?: boolean;

  /** Determines whether the header should start in the expanded state */
  startExpanded?: boolean;

  /** Background color of the header */
  backgroundColor?: string;

  /** Color of the title, subtitle, and icons in the header */
  fontColor?: string;

  /** Background image to render when header is expanded */
  backgroundImage?: ImageSourcePropType;

  /** Configuration object that determines whether the Header can have a search bar */
  searchableConfig?: SearchableConfig;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

interface HeaderState {
  expanded: boolean;
  searching: boolean;
  query: string;
  headerHeight: Animated.Value;
}

class HeaderClass extends Component<WithTheme<HeaderProps>, HeaderState> {
  static readonly REGULAR_HEIGHT = 56 + getStatusBarHeight(true);
  static readonly EXTENDED_HEIGHT = 200 + getStatusBarHeight(true);
  static readonly ICON_SIZE = 24;
  static readonly ICON_SPACING = 16;
  static readonly ANIMATION_LENGTH = 300;

  private expand: Animated.CompositeAnimation;
  private contract: Animated.CompositeAnimation;

  private searchRef = createRef<TextInput>();

  constructor(props: WithTheme<HeaderProps>) {
    super(props);

    this.state = {
      expanded: props.startExpanded || false,
      searching: false,
      query: '',
      headerHeight: props.startExpanded ? new Animated.Value(HeaderClass.EXTENDED_HEIGHT) : new Animated.Value(HeaderClass.REGULAR_HEIGHT)
    };

    this.expand = Animated.timing(this.state.headerHeight, {
      toValue: HeaderClass.EXTENDED_HEIGHT,
      duration: HeaderClass.ANIMATION_LENGTH
    });

    this.contract = Animated.timing(this.state.headerHeight, {
      toValue: HeaderClass.REGULAR_HEIGHT,
      duration: HeaderClass.ANIMATION_LENGTH
    });
  }

  render() {
    const { expandable = false } = this.props;
    const { searching } = this.state;
    const barStyle = this.barStyle();
    const contentStyle = this.contentStyle();

    return (
      <>
        <StatusBar barStyle={this.statusBarStyle()} />
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
      </>
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
    const { searching } = this.state;
    if (backgroundImage && !searching) {
      return (
        <Animated.Image
          testID={'header-background-image'}
          source={backgroundImage}
          resizeMethod={'resize'}
          style={{
            position: 'absolute',
            width: '100%',
            resizeMode: 'cover',
            height: this.state.headerHeight,
            // opacity: 0.3
            opacity: this.state.headerHeight.interpolate({
              inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
              outputRange: [0.2, 0.3]
            })
          }}
        />
      );
    }
  }

  private navigation() {
    const { navigation } = this.props;
    const { searching } = this.state;

    if (searching) {
      return (
        <View>
          <TouchableOpacity testID={'header-search-close'} onPress={() => this.onPressSearchClose()} style={styles.navigation}>
            <Icon name={'arrow-back'} size={HeaderClass.ICON_SIZE} color={this.fontColor()} />
          </TouchableOpacity>
        </View>
      )
    }
    if (navigation) {
      return (
        <View>
          <TouchableOpacity testID={'header-navigation'} onPress={navigation.onPress} style={styles.navigation}>
            {this.icon(navigation.icon)}
          </TouchableOpacity>
        </View>
      )
    }
  }

  private icon(IconClass: ComponentType<{ size: number, color: string }>) {
    if (IconClass) {
      return <IconClass size={HeaderClass.ICON_SIZE} color={this.fontColor()} />
    }
  }

  private content() {
    const { searchableConfig } = this.props;
    const { searching } = this.state;
    let content = [];

    if (searchableConfig && searching) {
      content = [this.search(searchableConfig)];
    } else {
      content = [this.title(), this.info(), this.subtitle()];
    }
    return (
      <Animated.View style={[styles.titleContainer, {
        marginRight: this.state.headerHeight.interpolate({
          inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
          outputRange: [this.actionPanelWidth(), 0]
        })
      }]}>
        <View style={{ flex: 0, justifyContent: 'center' }}>
          {content}
        </View>
      </Animated.View>
    );
  }

  private title() {
    const { title } = this.props;
    return (
      <Animated.Text
        key="title_key"
        testID={'header-title'}
        style={this.titleStyle()}
        numberOfLines={1}
        ellipsizeMode={'tail'}
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
          key="subtitle_key"
          testID={'header-subtitle'}
          style={this.subtitleStyle()}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {subtitle}
        </Animated.Text>
      );
    }
  }

  private info() {
    const { info } = this.props;
    if (info) {
      return (
        <Animated.Text
          key="info_key"
          testID={'header-info'}
          style={this.infoStyle()}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {info}
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
        autoCapitalize={config.autoCapitalize || 'none'}
        autoCorrect={config.autoCorrect || false}
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
    let items: HeaderIcon[] = actionItems || [];

    if (searching) {
      if (query) {
        items = [
          {
            icon: ClearIcon,
            onPress: () => this.onPressSearchClear()
          }
        ]
      } else {
        items = [];
      }
    }
    else if (searchableConfig) {
      items = [
        {
          icon: SearchIcon,
          onPress: () => this.onPressSearch()
        }
      ];
      if (actionItems) {
        items = items.concat(actionItems)
      }
    }

    if (items) {
      return (
        <View style={styles.actionPanel}>
          {items.slice(0, 3).map((actionItem, index) => (
            <View key={`action_${index}`}>
              <TouchableOpacity testID={`header-action-item${index}`} onPress={actionItem.onPress} style={styles.actionItem}>
                {this.icon(actionItem.icon)}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )
    }
  }

  private barStyle() {
    return [styles.bar, {
      height: this.state.headerHeight,
      backgroundColor: this.backgroundColor()
    }];
  }

  private contentStyle() {
    const contractedPadding = this.props.subtitle && !this.state.searching ? 12 : 16;
    return [styles.content, {
      paddingBottom: this.state.headerHeight.interpolate({
        inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
        outputRange: [contractedPadding, 28]
      })
    }];
  }

  private titleStyle() {
    const { theme } = this.props;
    return {
      color: this.fontColor(),
      lineHeight: this.state.headerHeight.interpolate({
        inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
        outputRange: [theme.sizes.large, 30]
      }),
      fontFamily: theme.fonts.semiBold.fontFamily,
      fontSize: this.state.headerHeight.interpolate({
        inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
        outputRange: [theme.sizes.large, 30]
      })
    };
  }

  private subtitleStyle() {
    const { theme } = this.props;
    return {
      color: this.fontColor(),
      lineHeight: 18,
      fontFamily: theme.fonts.light.fontFamily,
      fontSize: 18,
    };
  }

  private infoStyle() {
    const { theme } = this.props;
    return {
      color: this.fontColor(),
      lineHeight: this.state.headerHeight.interpolate({
        inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
        outputRange: [0.1, theme.sizes.large*1.05] // Avoid clipping top of CAP letters
      }),
      opacity: this.state.headerHeight.interpolate({
        inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
        outputRange: [0, 1]
      }),
      fontFamily: theme.fonts.regular.fontFamily,
      fontSize: this.state.headerHeight.interpolate({
        inputRange: [HeaderClass.REGULAR_HEIGHT, HeaderClass.EXTENDED_HEIGHT],
        outputRange: [0.1, theme.sizes.large]
      })
    };
  }

  private searchStyle() {
    const { theme } = this.props;
    return {
      padding: 0, // TextInput on Android has some default padding, so this needs to be explicitly set to 0
      color: this.fontColor(),
      fontFamily: theme.fonts.light.fontFamily,
      fontSize: theme.sizes.large,
      ...theme.fonts.light
    }
  }

  private statusBarStyle() {
    return color(this.backgroundColor()).isDark() ? 'light-content' : 'dark-content';
  }

  private fontColor() {
    const { fontColor, theme } = this.props;
    const { searching } = this.state;

    if (searching) {
      return theme.colors.text;
    } else {
      return fontColor || theme.colors.onPrimary;
    }
  }

  private backgroundColor() {
    const { backgroundColor, theme } = this.props;
    const { searching } = this.state;

    if (searching) {
      return theme.colors.surface;
    } else {
      return backgroundColor || theme.colors.primary;
    }
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

  private actionPanelWidth() {
    const { actionItems, searchableConfig } = this.props;
    let length = actionItems ? actionItems.length : 0;
    if (searchableConfig) length++;
    if (length < 1) return 0;
    length = Math.min(3, length);
    return (length * (HeaderClass.ICON_SIZE + HeaderClass.ICON_SPACING))
  }
};

/**
 * Header component
 *
 * This component is used to display a title and navigation and action items on the top of a screen.
 * It can be tapped to expand or contract.
 */
export const Header = withTheme(HeaderClass);

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
    flexDirection: 'row',
  },
  navigation: {
    marginRight: 24,
    height:40,
    width: 40,
    margin: -8, 
    padding: 8, 
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  actionPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    height: 56
  },
  actionItem: {
    height: 40,
    width: 40,
    padding: 8
  }
});

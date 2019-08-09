import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible';
import { gray, blue } from '@pxblue/colors';
import { Theme, withTheme } from '../theme';

export interface CollapsibleSectionProps {
  /** Title to show in heading */
  title: string;

  /** Whether or not the section starts open - defaults to true */
  startOpen?: boolean;

  /** Whether to toggle collapse/expand when tapping the header */
  disabled?: boolean;

  /** Color styles to use */
  style?: {
    /** Color to use for title and icon */
    titleColor?: string;

    /** Background color for component */
    backgroundColor?: string;
  }

  testID?: string;
  theme: Theme;
}

interface CollapsibleSectionState {
  collapsed: boolean;
}

/**
 * Component that provides a header and a collapsible content section
 */
export const CollapsibleSection = withTheme(class CollapsibleSection extends Component<CollapsibleSectionProps, CollapsibleSectionState> {
  public static readonly ICON_SIZE = 24;
  public static readonly TITLE_COLOR = blue[700];

  constructor(props: CollapsibleSectionProps) {
    super(props);

    this.state = {
      collapsed: props.startOpen === false
    };
  }

  public render() {
    const { title, children, disabled, theme, style = {} } = this.props;
    const { collapsed } = this.state;

    const titleColor = style.titleColor || theme.colors.primary;
    const backgroundColor = style.backgroundColor || theme.colors.surface;

    return (
      <View>
        <TouchableOpacity
          disabled={disabled}
          testID={'header'}
          style={{ flexDirection: 'row' }}
          onPress={() => !disabled && this.setState({ collapsed: !collapsed })}
        >
          <View style={[styles.headerContainer, { backgroundColor }]}>
            <View style={[styles.headerRow, styles.withMargin]}>
              <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
              <MaterialIcon
                style={[collapsed ? styles.iconImageUp : styles.iconImageDown]}
                size={CollapsibleSection.ICON_SIZE}
                name={'apple-keyboard-control'}
                color={titleColor}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ backgroundColor }}>
          <View style={[styles.divider, { borderBottomColor: theme.colors.text }]} />
        </View>
        <Collapsible collapsed={collapsed} style={{ backgroundColor }}>
          {children}
        </Collapsible>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
    flex: 1
  },
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    borderBottomWidth: 1
  },
  withMargin: {
    marginLeft: 28,
    marginRight: 15
  },
  title: {
    color: CollapsibleSection.TITLE_COLOR,
    fontSize: 15,
    fontWeight: '600',
    height: 20,
    flex: 1,
  },
  iconImageUp: {
    transform: [
      { rotate: '0deg' },
      { translateY: 4 }
    ]
  },
  iconImageDown: {
    transform: [
      { rotate: '180deg' },
      { translateY: 2 }
    ]
  }
});

import React, { Component } from 'react';
import { StyleProp, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible';
import { gray, blue } from '@pxblue/colors';

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
}

interface CollapsibleSectionState {
  collapsed: boolean;
}

/**
 * Component that provides a header and a collapsible content section
 */
export class CollapsibleSection extends Component<CollapsibleSectionProps, CollapsibleSectionState> {
  public static readonly ICON_SIZE = 24;
  public static readonly TITLE_COLOR = blue[700];
  public static readonly DIVIDER_COLOR = gray[200];
  public static readonly BACKGROUND_COLOR = 'transparent';

  constructor(props: CollapsibleSectionProps) {
    super(props);

    this.state = {
      collapsed: props.startOpen === false
    };
  }

  public render() {
    const { title, children, disabled, style = {} } = this.props;
    const { collapsed } = this.state;

    const titleColor = style.titleColor || CollapsibleSection.TITLE_COLOR;
    const backgroundColor = style.backgroundColor || CollapsibleSection.BACKGROUND_COLOR;

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
        <Collapsible collapsed={collapsed} style={{ backgroundColor }}>
          <View style={{ backgroundColor }}>
            <View style={[styles.divider, styles.withMargin]} />
          </View>
          {children}
        </Collapsible>
      </View>
    );
  }
}

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
    borderBottomWidth: 1,
    borderBottomColor: CollapsibleSection.DIVIDER_COLOR
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

import React, { Component, Fragment, ComponentType } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '@pxblue/colors';
import { interleave } from '../helpers/utils';
import { Theme } from '..';
import { withTheme } from '../theme';

export interface InfoListItemProps {
  /** Title to show */
  title: string;

  /** Subtitle. If an array, will be separated by dots. */
  subtitle?: string | Array<React.ReactNode>;

  /** Component to render to the left of the title */
  IconClass?: ComponentType<{ size: number, color: string }>;

  /** Color to use for title and tab on left side */
  color?: string;

  /** Callback to be called on press. If provided, will add chevron on the right side of the item */
  onPress?: () => void;

  theme: Theme;
}

class InfoListItemClass extends Component<InfoListItemProps> {
  private static readonly MAX_SUBTITLE_ELEMENTS = 3;

  public render() {
    const { title, color, onPress, theme } = this.props;
    const { bigText, fixedHeight, row, fullHeight, tab, iconContainer, contentContainer, withMargins, withRightPadding } = styles;
    const titleColor = color || theme.colors.text;
    const bigFont = theme.fonts.bold;

    return (
      <TouchableOpacity onPress={onPress} style={[fixedHeight, row, withRightPadding]} disabled={!onPress}>
        <View style={[fullHeight, tab, { backgroundColor: color }]} />
        <View style={[iconContainer, withMargins]}>
          {this.icon()}
        </View>
        <View style={contentContainer}>
          <Text style={[bigText, bigFont, { color: titleColor }]} numberOfLines={1} ellipsizeMode={'tail'}>
            {title}
          </Text>
          <View style={row}>
            {this.subtitle()}
          </View>
        </View>
        {this.chevron()}
      </TouchableOpacity>
    );
  }

  private icon() {
    const { IconClass, color } = this.props;

    if (IconClass) {
      return (
        <IconClass size={24} color={color || Colors.gray[800]} />
      );
    }
  }

  private chevron() {
    const { onPress, theme } = this.props;
    if (onPress) {
      return (
        <Icon name="chevron-right" size={24} color={theme.colors.text} />
      );
    }
  }

  private subtitle() {
    const { subtitle } = this.props;

    if (!subtitle) {
      return null;
    }

    const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
    const renderableSubtitleParts = subtitleParts
      .splice(0, InfoListItemClass.MAX_SUBTITLE_ELEMENTS)
      .map(element => this.renderableSubtitleComponent(element));
    
    return this.withKeys(this.separate(renderableSubtitleParts));
  }

  private separate(array: Array<React.ReactNode>) {
    return interleave(array, () => this.interpunct());
  }

  private withKeys(array: Array<React.ReactNode>) {
    return array.map((element, index) => (
      <Fragment key={index}>{element}</Fragment>
    ))
  }

  private renderableSubtitleComponent(element: React.ReactNode) {
    const { smallText, withGrayText } = styles;

    switch (typeof element) {
      case 'string':
      case 'number':
        return (
          <Text numberOfLines={1} style={[smallText, withGrayText]}>{`${element}`}</Text>
        );
      default:
        return element;
    }
  }

  private interpunct() {
    const { bold, withGrayText, withSmallMargins } = styles;
    return (
      <Text style={[bold, withGrayText, withSmallMargins]}>
        {'\u00B7'}
      </Text>
    )
  }
}

export const InfoListItem = withTheme(InfoListItemClass);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  withRightPadding: {
    paddingRight: 6
  },
  bold: {
    fontWeight: '900'
  },
  bigText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24
  },
  smallText: {
    fontSize: 13
  },
  iconContainer: {
    width: 24
  },
  contentContainer: {
    flex: 1,
    paddingRight: 10
  },
  tab: {
    width: 6
  },
  withMargins: {
    marginHorizontal: 12
  },
  withSmallMargins: {
    marginHorizontal: 4
  },
  fullHeight: {
    height: '100%'
  },
  fixedHeight: {
    height: 72
  },
  withGrayText: {
    color: Colors.gray[600]
  }
});

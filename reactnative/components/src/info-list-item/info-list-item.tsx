import React, { Component, Fragment, ComponentType } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { interleave } from '../helpers/utils';
import { Theme, withTheme, WithTheme} from '../theme';
import { Body, Subtitle } from '../typography';
import { $DeepPartial } from '@callstack/react-theme-provider';

export interface InfoListItemProps {
  /** Title to show */
  title: string;

  /** Subtitle. If an array, will be separated by dots. */
  subtitle?: string | Array<React.ReactNode>;

  /** Subtitle Separator. Displays between array of subtitle items */
  subtitleSeparator?: string;

  /** Component to render to the left of the title */
  IconClass?: ComponentType<{ size: number, color: string }>;

  /** Color to use for title and tab on left side */
  color?: string;

  /** Background color of element */
  backgroundColor?: string;

  /* Hide left padding when icon is not present */
  hidePadding?: boolean;

  /** Callback to be called on press. If provided, will add chevron on the right side of the item */
  onPress?: () => void;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

class InfoListItemClass extends Component<WithTheme<InfoListItemProps>> {
  private static readonly MAX_SUBTITLE_ELEMENTS = 3;

  public render() {
    const { title, color, backgroundColor, onPress, theme } = this.props;
    const { fixedHeight, row, fullHeight, tab, iconContainer, contentContainer, withMargins, withRightPadding } = styles;
    const style = {
      backgroundColor: backgroundColor || 'transparent' 
    };
    const titleStyle = {
      color: color || theme.colors.text,
    };

    return (
      <TouchableOpacity onPress={onPress} style={[fixedHeight, row, withRightPadding, style]} disabled={!onPress}>
        <View style={[fullHeight, tab, { backgroundColor: color }]} />
        {this.props.IconClass || !this.props.hidePadding ? 
          <View style={[iconContainer, withMargins]}>
            {this.icon()}
          </View> 
          : null
        }
        <View style={contentContainer}>
          <Body style={titleStyle} numberOfLines={1} ellipsizeMode={'tail'} font={'bold'}>
            {title}
          </Body>
          <View style={row}>
            {this.subtitle()}
          </View>
        </View>
        {this.chevron()}
      </TouchableOpacity>
    );
  }

  private icon() {
    const { IconClass, color, theme } = this.props;

    if (IconClass) {
      return (
        <IconClass size={24} color={color || theme.colors.text } />
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
    switch (typeof element) {
      case 'string':
      case 'number':
        return (
          <Subtitle numberOfLines={1} font={'regular'}>
            {`${element}`}
          </Subtitle>
        );
      default:
        return element;
    }
  }

  private interpunct() {
    const { subtitleSeparator } = this.props;
    const { withSmallMargins } = styles;
    return (
      <Subtitle style={withSmallMargins} font={'regular'}>
        {subtitleSeparator || '\u00B7'}
      </Subtitle>
    )
  }
}

/**
 * A flexible component to be rendered within FlatLists
 */
export const InfoListItem = withTheme(InfoListItemClass);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  withRightPadding: {
    paddingRight: 6
  },
  iconContainer: {
    width: 24
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  tab: {
    width: 6
  },
  withMargins: {
    marginLeft: 10
  },
  withSmallMargins: {
    marginHorizontal: 4
  },
  fullHeight: {
    height: '100%'
  },
  fixedHeight: {
    height: 72
  }
});

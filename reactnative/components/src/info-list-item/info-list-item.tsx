import React, { Component, Fragment, ComponentType } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { interleave } from '../helpers/utils';
import { Theme, withTheme, WithTheme } from '../theme';
import { Body, Subtitle } from '../typography';
import { $DeepPartial } from '@callstack/react-theme-provider';
import * as Colors from '@pxblue/colors';
//@ts-ignore
import color from 'color';

export interface InfoListItemProps {
  /** Title to show */
  title: string;

  /** Subtitle. If an array, will be separated by dots. */
  subtitle?: string | Array<React.ReactNode>;

  /** Subtitle Separator. Displays between array of subtitle items */
  subtitleSeparator?: string;

  /** Specifies whether to show color background around the icon */
  avatar?: boolean;

  /** Component to render to the left of the title */
  IconClass?: ComponentType<{ size: number, color: string }>;

  /** Color to use for stripe */
  statusColor?: string;

  /** Color to use for title text */
  fontColor?: string;

  /** Color to use for icon */
  iconColor?: string;

  /** Background color of element */
  backgroundColor?: string;

  /* Hide left padding when icon is not present */
  hidePadding?: boolean;

  /* If present, a Chevron will be displayed on the right. This can be overridden by rightComponent. */
  chevron?: boolean;

  /* Reduce overall height of listItem */
  dense?: boolean;

  /* Whether to show the bottom divider for the list item */
  divider?: 'full' | 'partial';

  /* Component to render on the right */
  rightComponent?: JSX.Element;

  /** Callback to be called on press. */
  onPress?: () => void;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

class InfoListItemClass extends Component<WithTheme<InfoListItemProps>> {
  private static readonly MAX_SUBTITLE_ELEMENTS = 3;

  public render() {
    const { title, statusColor, dense, fontColor, backgroundColor, onPress, theme } = this.props;
    const { row, fullHeight, tab, iconContainer, contentContainer, withRightPadding } = styles;
    const style = {
      backgroundColor: backgroundColor || 'transparent'
    };
    const titleStyle = {
      color: fontColor || theme.colors.text,
      lineHeight: theme.sizes.medium
    };
    const fixedHeight = {
      height: dense ? 52 : 72,
    };

    return (
      <View style={[fixedHeight, style]}>
        <TouchableOpacity onPress={onPress} style={[fullHeight, row, withRightPadding]} disabled={!onPress} activeOpacity={0.7}>
          <View style={[fullHeight, tab, { backgroundColor: statusColor }]} />
          {this.props.IconClass || !this.props.hidePadding ?
            <View style={iconContainer}>
              {this.icon()}
            </View>
            : null
          }
          <View style={contentContainer}>
            <Body style={titleStyle} numberOfLines={1} ellipsizeMode={'tail'} font={'semiBold'}>
              {title}
            </Body>
            <View style={row}>
              {this.subtitle()}
            </View>
          </View>
          {this.rightComponent()}
          {this.divider()}
        </TouchableOpacity>
      </View>
    );
  }

  private icon() {
    const { IconClass, avatar } = this.props;
    if (IconClass) {
      return (
        <View style={avatar ? this.avatarStyle() : null}>
          <IconClass size={24} color={this.iconColor()} />
        </View>
      );
    }
  }

  private iconColor() {
    const { avatar, statusColor, iconColor, theme } = this.props;
    if (iconColor) return iconColor;
    if (avatar) {
      return statusColor ? 
        (color(statusColor).isDark() ? Colors.white[50] : Colors.black[500])
        : Colors.white[50]; // default avatar is dark gray -> white text
    }
    return statusColor ? statusColor : theme.colors.text;
  }
  private avatarStyle() {
    const { statusColor } = this.props;
    const avatarStyle = { ...styles.avatar };
    avatarStyle.backgroundColor = statusColor || Colors.black[500];
    return avatarStyle;
  }

  private rightComponent() {
    const { chevron, theme, rightComponent } = this.props;
    if (rightComponent) {
      return rightComponent;
    }
    else if (chevron) {
      return (
        <Icon name="chevron-right" size={24} color={theme.colors.text} />
      );
    }
  }

  private divider() {
    const { divider } = this.props;
    if (divider) {
      return (
        <View style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: divider === 'partial' ? 72 : 0,
          alignItems: 'stretch'
        }}>
          <View style={[styles.divider]} />
        </View>
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
    paddingRight: 16
  },
  iconContainer: {
    marginLeft: 10,
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderColor: Colors.black['100']
  },
  tab: {
    width: 6
  },
  withSmallMargins: {
    marginHorizontal: 4
  },
  fullHeight: {
    height: '100%'
  }
});

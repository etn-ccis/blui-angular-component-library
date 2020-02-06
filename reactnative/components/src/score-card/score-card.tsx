import React, { Component, ComponentType } from 'react';
import { View, StyleSheet, ImageSourcePropType, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { gray, black } from '@pxblue/colors';
import { ScoreCardListItem } from './list-item';
import * as Typography from '../typography';
import { withTheme, WithTheme, Theme } from '../theme';
import { $DeepPartial } from '@callstack/react-theme-provider';

export interface HeaderIcon {
  /** Name of the icon */
  icon: ComponentType<{ size: number, color: string }>;

  /** Callback when icon is pressed */
  onPress: () => void;
}

export interface ScoreCardProps {
  /** Background color of header */
  headerColor?: string;

  /** Primary text to show in header */
  headerTitle: string;

  /** Second line of text to show in header */
  headerSubtitle?: string;

  /** Third line of text to show in header */
  headerInfo?: string;

  /** Color to use for header text and icons */
  headerFontColor?: string;

  /** Hero component to render on the right side of the card */
  badge?: JSX.Element;

  /** Offset to shift the badges up or down */
  badgeOffset?: number;

  /** Action item to show at bottom of card */
  actionRow?: JSX.Element;

  /** Background image to render when header is expanded */
  headerBackgroundImage?: ImageSourcePropType;

  /** Style configuration for the wrapper View */
  style?: StyleProp<ViewStyle>;

  /**
   * Array of actions to render in the header.
   * A maximum of two will be rendered.
   * */
  actionItems?: Array<HeaderIcon>;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
};

class ScoreCardClass extends Component<WithTheme<ScoreCardProps>> {
  public static ListItem = ScoreCardListItem;
  public static readonly PADDING_AMOUNT = 16;
  private static readonly ICON_SIZE = 24;

  public render() {
    const { children, theme, headerColor = theme.colors.primary, style } = this.props;
    const newStyle = {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.roundness
    }

    return (
      <View style={[styles.card, newStyle, style]}>
        <View style={[styles.header, { backgroundColor: headerColor, borderTopLeftRadius: theme.roundness, borderTopRightRadius: theme.roundness }]}>
          {this.backgroundImage()}
          <View style={[styles.padded, styles.headerContent]}>
            {this.headerText()}
            {this.actionItems()}
          </View>
        </View>
        <View style={[styles.row]}>
          <View style={{ flex: 1, justifyContent: 'center', marginRight: this.props.badge ? 16 : 0 }}>
            {children}
          </View>
          {this.heroes()}
        </View>
        {this.footer()}
      </View>
    );
  }

  private headerText() {
    const { headerTitle, headerSubtitle, headerInfo } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Typography.H7 testID={'header_title'}
          style={{ color: this.fontColor() }}
          font={'semiBold'}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {headerTitle}
        </Typography.H7>
        {headerSubtitle ?
          <Typography.Subtitle testID={'header_subtitle'}
            style={{ color: this.fontColor() }}
            font={'regular'}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {headerSubtitle}
          </Typography.Subtitle> : null
        }
        {headerInfo ?
          <Typography.Subtitle testID={'header_info'}
            style={{ color: this.fontColor() }}
            font={'light'}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {headerInfo}
          </Typography.Subtitle> : null}
      </View>
    );
  }

  private heroes() {
    const { badge, badgeOffset = 0 } = this.props;
    if (badge) {
      return (
        <View style={{ flex: 0, marginTop: badgeOffset }}>
          {badge}
        </View>
      );
    }
  }

  private backgroundImage() {
    const { headerBackgroundImage } = this.props;
    if (headerBackgroundImage) {
      return (
        <Image
          testID={'header-background-image'}
          source={headerBackgroundImage}
          style={{
            position: 'absolute',
            width: '100%',
            resizeMode: 'cover',
            height: '100%',
            opacity: 0.1
          }}
        />
      );
    }
  }

  private footer() {
    const { actionRow } = this.props;

    if (actionRow) {
      return (
        <View style={[styles.footer]}>
          {actionRow}
        </View>
      );
    }
  }

  private actionItems() {
    const { actionItems } = this.props;

    if (actionItems) {
      return (
        <View style={{ flexDirection: 'row', margin: -8 }}>
          {actionItems.slice(0, 2).map((actionItem, index) => (
            <TouchableOpacity key={`${index}`} testID={`action-item${index}`} onPress={actionItem.onPress} style={styles.actionItem}>
              {this.icon(actionItem.icon)}
            </TouchableOpacity>
          ))}
        </View>
      )
    }
  }

  private icon(IconClass: ComponentType<{ size: number, color: string }>) {
    if (IconClass) {
      return <IconClass size={ScoreCardClass.ICON_SIZE} color={this.fontColor()} />
    }
  }

  private fontColor() {
    const { headerFontColor, theme } = this.props;
    return headerFontColor || theme.colors.onPrimary;
  }
}

/**
 * ScoreCard component.
 * This component renders a "score card" with optional Hero badge,
 * title and subtitles, and actionRow at the bottom.
 */
export const ScoreCard = withTheme(ScoreCardClass);

const styles = StyleSheet.create({
  card: {
    shadowColor: black[900],
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 1,
    flex: 1
  },
  actionItem: {
    height: 40,
    width: 40,
    padding: 8,
  },
  header: {
    height: 100,
    overflow: 'hidden'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: ScoreCardClass.PADDING_AMOUNT,
  },
  footer: {
    borderTopColor: black[50],
    borderTopWidth: 1
  },
  padded: {
    padding: ScoreCardClass.PADDING_AMOUNT
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: ScoreCardClass.PADDING_AMOUNT
  },
});

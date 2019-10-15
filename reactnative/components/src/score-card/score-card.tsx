import React, { Component } from 'react';
import { Text, View, StyleSheet, TextProps, ImageSourcePropType, Image, TouchableOpacity } from 'react-native';
import { gray, white } from '@pxblue/colors';
import { ScoreCardListItem } from './list-item';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { withTheme, WithTheme, Theme } from '../theme';
import { $DeepPartial } from '@callstack/react-theme-provider';

export interface HeaderIcon {
  /** Name of the icon */
  icon: string;

  /** Callback when icon is pressed */
  onPress: () => void;
}

export interface ScoreCardProps {
  /** Background color of header */
  headerColor?: string;

  /** Text to show in header */
  headerText: string | Array<string>;

  /** Hero compnonent to render on the right side of the card */
  badge?: JSX.Element;

  /** Action item to show at bottom of card */
  actionRow?: JSX.Element;

  /** Background image to render when header is expanded */
  headerBackgroundImage?: ImageSourcePropType;

  /**
   * Array of actions to render in the header.
   * A maximum of two will be rendered.
   * If more than two actionItems are passed in and onPressOverflow is provided, only the overflow button will be shown
   * */
  actionItems?: Array<HeaderIcon>;

  /** Callback to be called when overflow icon is pressed. */
  onPressOverflow?: () => void;

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
    const { children, theme, headerColor = theme.colors.primary } = this.props;
    const style = {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.roundness 
    }

    return (
      <View style={[styles.card, style]}>
        <View style={[styles.padded, styles.header, { backgroundColor: headerColor }]}>
          {this.backgroundImage()}
          {this.headerTextElements()}
          {this.actionItems()}
        </View>
        <View style={[styles.row]}>
          <View style={this.childrenWrapperStyle()}>
            {children}
          </View>
          {this.hero()}
        </View>
        {this.footer()}
      </View>
    );
  }

  private headerTextElements() {
    const headerText = this.headerTextArray();

    return (
      <View style={{ flex: 1 }}>
        {headerText.map((text, i) =>
          <Text style={[styles.headerText, headerTextProps[i].style]} testID={headerTextProps[i].testID} numberOfLines={1} ellipsizeMode={'tail'} key={`${i}`}>
            {text}
          </Text>
        )}
      </View>
    );
  }

  private childrenWrapperStyle() {
    const { badge } = this.props;

    if (badge) {
      return [styles.padded, styles.firstColumn];
    } else {
      return [styles.padded];
    }
  }

  private headerTextArray(): Array<string> {
    const { headerText } = this.props;

    return typeof headerText === 'string' ? [headerText] : headerText.slice(0, 3);
  }

  private hero() {
    const { badge } = this.props;
    if (badge) {
      return (
        <View style={{ position: 'absolute', right: ScoreCardClass.PADDING_AMOUNT, top: -24 }}>
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
            resizeMode: 'cover',
            height: 100,
            opacity: 0.3
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
    const { actionItems, onPressOverflow } = this.props;

    if (onPressOverflow && !actionItems || actionItems && actionItems.length > 2 && onPressOverflow) {
      return (
        <View>
          <TouchableOpacity testID={'overflow-item'} onPress={onPressOverflow} style={styles.actionItem}>
            <MaterialIcon name={'more-vert'} size={ScoreCardClass.ICON_SIZE} color={this.fontColor()}/>
          </TouchableOpacity>
        </View>
      );
    } else if (actionItems) {
      return actionItems.slice(0, 2).map((actionItem, index) => (
        <View key={`${index}`}>
          <TouchableOpacity testID={`action-item${index}`} onPress={actionItem.onPress} style={styles.actionItem}>
            <MaterialIcon name={actionItem.icon} size={ScoreCardClass.ICON_SIZE} color={this.fontColor()}/>
          </TouchableOpacity>
        </View>
      ))
    }
  }

  private fontColor() {
    return white[500];
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
    shadowColor: gray[900],
    shadowOpacity: 0.6,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1,
    flex: 1
  },
  actionItem: {
    marginLeft: 12
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: ScoreCardClass.PADDING_AMOUNT,
    height: 100,
    overflow: 'hidden'
  },
  headerText: {
    color: white[500],
  },
  headerText1: {
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 4
  },
  headerText2: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 3
  },
  headerText3: {
    fontSize: 14,
    fontWeight: '200'
  },
  footer: {
    borderTopColor: gray[100],
    borderTopWidth: 1
  },
  padded: {
    padding: ScoreCardClass.PADDING_AMOUNT
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  firstColumn: {
    marginRight: 90
  }
});

const headerTextProps: ReadonlyArray<TextProps> = [
  { testID: 'header1', style: styles.headerText1 },
  { testID: 'header2', style: styles.headerText2 },
  { testID: 'header3', style: styles.headerText3 },
];

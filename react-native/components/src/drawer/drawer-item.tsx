import React, { ComponentType } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { gray } from '@pxblue/colors';
import color from 'color';
import { WithTheme, Theme, withTheme } from '../theme';
import { $DeepPartial } from '@callstack/react-theme-provider';

export interface DrawerItemProps {
  /** Determines if the drawer item is considered active */
  active: boolean;

  /** Callback when drawer item is pressed */
  onPress: () => void;

  /** Label of drawer item */
  label: string;

  /** Icon class to show on left side of drawer item */
  IconClass: ComponentType<{ size: number, color: string }>;

  /** Override for the font color */
  fontColor?: string;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

class DrawerItemClass extends React.Component<WithTheme<DrawerItemProps>> {
  static displayName = 'Drawer.Item';

  public render() {
    const { onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={onPress}
          underlayColor={this.itemUnderlayColor()}
        >
          <View style={this.itemStyle()}>
            {this.icon()}
            {this.label()}
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  private icon() {
    const { IconClass } = this.props;

    return (
      <IconClass size={24} color={this.fontColor()} />
    );
  }

  private label() {
    const { label } = this.props;
    const font = this.getFont();

    return (
      <Text
        ellipsizeMode={'tail'}
        numberOfLines={1}
        style={[styles.label, font, { color: this.fontColor() }]}
      >
        {label}
      </Text>
    )
  }

  private itemStyle() {
    const { active } = this.props;
    const backgroundColor = color(this.fontColor()).lighten(1.5).desaturate(0.65).string();

    if (active) {
      return [styles.item, {
        backgroundColor: backgroundColor
      }];
    } else {
      return [styles.item, {
        backgroundColor: 'transparent'
      }];
    }
  }

  private fontColor() {
    const { active, fontColor, theme } = this.props;
    const activeColor = fontColor ? fontColor : theme.colors.primary;

    return active ? activeColor : theme.colors.text;
  }

  private getFont() {
    const { active, theme } = this.props;

    return active ? theme.fonts.bold : theme.fonts.regular;
  }

  private itemUnderlayColor() {
    const { active } = this.props;
    const activeUnderlayColor = color(this.fontColor()).lighten(0.2).string();

    return active ? activeUnderlayColor : gray[50];
  }
}

/**
 * Drawer.Item component
 *
 * This component is a tappable list item that has an icon and label,
 * and is either active or inactive depending on the passed props.
 */
export const DrawerItem = withTheme(DrawerItemClass);
export { DrawerItemClass };

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginVertical: 2
  },
  item: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  label: {
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    marginLeft: 32
  }
});

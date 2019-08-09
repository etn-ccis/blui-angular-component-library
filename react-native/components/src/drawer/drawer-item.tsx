import React, { ComponentType } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { black, blue, gray } from '@pxblue/colors';
import color from 'color';

export interface DrawerItemProps {
  active: boolean;
  onPress: () => void;
  label: string;
  IconClass: ComponentType<{ size: number, color: string }>;
  fontColor?: string;
}

/**
 * Drawer.Item component
 *
 * This component is a tappable list item that has an icon and label,
 * and is either active or inactive depending on the passed props.
 */
export class DrawerItem extends React.Component<DrawerItemProps> {
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

    return (
      <Text
        ellipsizeMode={'tail'}
        numberOfLines={1}
        style={[styles.label, { color: this.fontColor(), fontWeight: this.fontWeight() }]}
      >
        {label}
      </Text>
    )
  }

  private itemStyle() {
    const { active, fontColor } = this.props;
    const backgroundColor = fontColor ? color(fontColor).lighten(1.5).desaturate(0.65).string() : blue[50];

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
    const { active, fontColor } = this.props;
    const activeColor = fontColor ? fontColor : blue[500];

    return active ? activeColor : black[500];
  }

  private fontWeight() {
    const { active } = this.props;

    return active ? '600' : 'normal';
  }

  private itemUnderlayColor() {
    const { active, fontColor } = this.props;
    const activeUnderlayColor = fontColor ? color(fontColor).lighten(0.2).string() : blue[300];

    return active ? activeUnderlayColor : gray[50];
  }
}

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

import React, { ComponentType } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { black, blue, gray, white } from '@pxblue/colors';

export interface DrawerItemProps {
  active: boolean;
  onPress: () => void;
  label: string;
  IconClass: ComponentType<{ size: number, color: string }>;
}

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
      <View style={styles.iconContainer}>
        <IconClass size={24} color={this.fontColor()} />
      </View>
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
    const { active } = this.props;

    if (active) {
      return [styles.item, {
        backgroundColor: blue[50]
      }];
    } else {
      return [styles.item, {
        backgroundColor: 'transparent'
      }];
    }
  }

  private fontColor() {
    const { active } = this.props;

    return active ? blue[500] : black[500];
  }

  private fontWeight() {
    const { active } = this.props;

    return active ? '600' : 'normal';
  }

  private itemUnderlayColor() {
    const { active } = this.props;

    return active ? blue[300] : gray[50];
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
  iconContainer: {
    // marginLeft: 16
  },
  label: {
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    marginLeft: 32,
    // marginRight: 16
  }
});

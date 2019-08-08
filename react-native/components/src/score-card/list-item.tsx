import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { gray } from '@pxblue/colors';

export interface ListItemProps {
  /** Label to be shown on the left */
  label: string;

  /** 
   * Callback to be called when the component is tapped.
   * If onPress is provided, a chevron will be rendered.
   */
  onPress?: () => void;
};

/**
 * ListItem component made for use as the default actionRow of a ScoreCard
 */
export class ListItem extends Component<ListItemProps> {
  public render() {
    const { label, onPress } = this.props;

    return (
      <TouchableOpacity style={[styles.container, styles.row]} disabled={!onPress} onPress={onPress}>
        <Text style={[styles.fill, styles.text]}>
          {label}
        </Text>
        {this.chevron()}
      </TouchableOpacity>
    );
  }

  private chevron() {
    if (this.props.onPress) {
      return (
        <Icon name={'chevron-right'} size={24} color={gray[400]} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  text: {
    color: gray[600]
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  fill: {
    flex: 1
  }
});

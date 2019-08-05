import React, { Component, ComponentType } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface ChannelValueProps {
  /** Value to show (bold text) */
  value: string | number;

  /** Icon component to render */
  IconClass?: ComponentType<{ size: number, color: string }>

  /** Text to show for units (light text) */
  units?: string;

  /** Whether to show units before the value. Default: false */
  prefix?: boolean;

  /** Font size for all text */
  fontSize?: number;

  /** Font color for all text */
  color?: string;
}

/**
 * ChannelValue component
 *
 * Used to show a channel value and its units.
 * An arbitrary icon may be added
 */
export class ChannelValue extends Component<ChannelValueProps> {
  public render() {
    const { value, fontSize, color } = this.props;

    return (
      <View style={styles.row}>
        {this.icon()}
        <Text numberOfLines={1} ellipsizeMode={'tail'} testID={'text-wrapper'}>
          {this.prefixUnits()}
          <Text style={[styles.bold, { fontSize, color }]}>
            {value}
          </Text>
          {this.suffixUnits()}
        </Text>
      </View>
    );
  }

  private icon() {
    const { color, IconClass } = this.props;

    if (IconClass) {
      return (
        <IconClass size={18} color={color || 'black'} />
      );
    }
  }

  private prefixUnits() {
    const { prefix = false } = this.props;
    if (prefix) {
      return this.units();
    }
  }

  private suffixUnits() {
    const { prefix = false } = this.props;
    if (!prefix) {
      return this.units();
    }
  }

  private units() {
    const { fontSize, color, units } = this.props;
    if (units) {
      return (
        <Text style={[styles.light, { fontSize, color }]}>
          {units}
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bold: {
    fontWeight: '600'
  },
  light: {
    fontWeight: '300'
  }
})

import React, { Component } from 'react';
import { Text, View, StyleSheet, StyleProp, TextStyle } from 'react-native';

export interface ChannelValueProps {
  value: string | number;
  icon?: React.ReactNode;
  units?: string;
  prefix?: boolean;
  fontSize?: number;
  color?: string;
}

export class ChannelValue extends Component<ChannelValueProps> {
  public render() {
    const { value, icon, fontSize, color } = this.props;

    return (
      <View style={styles.row}>
        {icon}
        {this.prefixUnits()}
        <Text style={[styles.bold, { fontSize, color }]}>{value}</Text>
        {this.suffixUnits()}
      </View>
    );
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
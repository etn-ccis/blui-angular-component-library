import React, { Component } from 'react';
import { Text, View } from 'react-native';

export interface ChannelValueProps {
  value: string | number;
  icon?: React.ReactNode;
  units?: string;
  prefix?: string;
  fontSize?: number;
  color?: string;
}

export class ChannelValue extends Component<ChannelValueProps> {
  public render() {
    const { value, icon, units, prefix, fontSize, color } = this.props;

    return (
      <View>
        {icon}
        <Text>{value}</Text>
        <Text>{units}</Text>
      </View>
    );
  }
}
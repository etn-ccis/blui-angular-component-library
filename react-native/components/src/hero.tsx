import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChannelValue } from './channel-value';
import * as Colors from '@pxblue/colors';

enum FontSize {
  Normal = 'NORMAL',
  Small = 'SMALL'
}

export interface HeroProps {
  label: string;
  icon: React.ReactNode;
  iconSize?: string | number;
  value?: number | string;
  valueIcon?: React.ReactNode;
  units?: string;
  onPress?: () => void;
}

export class Hero extends Component<HeroProps> {
  public render() {
    const {label, icon, iconSize = 36, value, valueIcon, units, onPress, children} = this.props;
    return (
      <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.wrapper}>
        <View style={styles.icon}>
          {icon}
        </View>
        <View style={styles.values}>
          {!children && value &&
            <ChannelValue value={value} units={units} icon={valueIcon}/>
          }
          {children}
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8
  },
  icon: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 36,
    width: 36
  },
  values: {
    alignItems: 'center',
    maxWidth: '100%',
  },
  label: {
    letterSpacing: 0,
    fontWeight: '600',
    width: '100%',
    overflow: 'hidden',
    color: Colors.gray['500']
  }
});

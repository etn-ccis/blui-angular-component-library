import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChannelValue } from '../channel-value';
import * as Colors from '@pxblue/colors';
import { wrapIcon } from '../icon-wrapper/icon-wrapper';
import { Theme, withTheme, WithTheme } from '../theme';
import { Label } from '..';
import { $DeepPartial } from '@callstack/react-theme-provider';

export interface HeroProps {
  /** Label to show */
  label: string;

  /** Primary icon */
  icon: React.ReactNode;

  /** Value for ChannelValue child */
  value?: number | string;

  /** Icon component for ChannelValue child */
  ValueIconClass?: ReturnType<typeof wrapIcon>;

  /** Units for value of ChannelValue child */
  units?: string;

  /** Callback for onPress event  */
  onPress?: () => void;

  /**
   * TestID
   */
  testID?: string;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

class HeroClass extends Component<WithTheme<HeroProps>> {
  public render() {
    const {label, icon, value, ValueIconClass, units, onPress, children} = this.props;

    return (
      <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.wrapper}>
        <View style={styles.icon}>
          {icon}
        </View>
        <View style={styles.values}>
          {!children && !!value &&
            <ChannelValue value={value} units={units} IconClass={ValueIconClass}/>
          }
          {children}
        </View>
        <Label style={styles.label} numberOfLines={1} ellipsizeMode={'tail'}>
          {label}
        </Label>
      </TouchableOpacity>
    )
  }
}

/**
 * Hero component
 *
 * Used to call attention to particular values of importance to the user.
 * An arbitrary value, value icon, and units may be added,
 * or <ChannelValue/> components may be passed as children.
 */
export const Hero = withTheme(HeroClass);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    padding: 0,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 48,
    width: 48
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  },
  label: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center'
  }
});

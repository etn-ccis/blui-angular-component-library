import React, { Component, ComponentType } from 'react';
import { View, StyleSheet, TextProps } from 'react-native';
import { withTheme, Theme } from '../theme';
import { Label } from '..';
import { WithTheme } from '../theme/theme';
import { $DeepPartial } from '@callstack/react-theme-provider';

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
  fontSize?: keyof Theme['sizes'];

  /** Font color for all text */
  color?: string;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

class ChannelValueClass extends Component<WithTheme<ChannelValueProps>> {
  public render() {
    const { value, fontSize } = this.props;
    const labelOverrides = this.textOverrides();

    return (
      <View style={styles.row}>
        {this.icon()}
        <Label numberOfLines={1} ellipsizeMode={'tail'} testID={'text-wrapper'} fontSize={fontSize} {...labelOverrides}>
          {this.prefixUnits()}
          <Label font={'bold'} fontSize={fontSize} {...labelOverrides}>
            {value}
          </Label>
          {this.suffixUnits()}
        </Label>
      </View>
    );
  }

  private icon() {
    const { IconClass } = this.props;

    if (IconClass) {
      return (
        <View style={{ marginRight: Math.round(this.getFontSize() / 6) }}>
          <IconClass size={this.getFontSize()} color={this.getColor()} />
        </View>
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

  private textOverrides() {
    const { color, theme } = this.props;

    const output: WithTheme<TextProps> = { theme };
    if (color) {
      output.style = { color: this.getColor() };
    }
    return output;
  }

  private units() {
    const { units, fontSize } = this.props;
    const labelOverrides = this.textOverrides();

    if (units) {
      return (
        <Label font={'light'} {...labelOverrides} fontSize={fontSize}>
          {units}
        </Label>
      );
    }
  }

  private getFontSize() {
    const { theme, fontSize } = this.props;

    return theme.sizes[fontSize || 'medium'];
  }

  private getColor() {
    const { color, theme } = this.props;
    if (!color) return theme.colors.text;
    if (Object.keys(theme.colors).indexOf(color) >= 0) return theme.colors[(color as keyof Theme['colors'])];
    return color;
  }
}

/**
 * ChannelValue component
 *
 * Used to show a channel value and its units.
 * An arbitrary icon may be added
 */
export const ChannelValue = withTheme(ChannelValueClass);

const styles = StyleSheet.create({
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

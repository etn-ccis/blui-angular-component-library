import React, { Component, ComponentType } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withTheme, Theme } from '../theme';

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

  theme: Theme;
}

/**
 * ChannelValue component
 *
 * Used to show a channel value and its units.
 * An arbitrary icon may be added
 */
class ChannelValueClass extends Component<ChannelValueProps> {
  public render() {
    const { value, theme } = this.props;

    const fontColor = this.props.color || theme.colors.text;
    const fontSize = this.getFontSize();

    return (
      <View style={styles.row}>
        {this.icon()}
        <Text numberOfLines={1} ellipsizeMode={'tail'} testID={'text-wrapper'} style={{ color: fontColor, fontSize }}>
          {this.prefixUnits()}
          <Text style={[styles.bold]}>
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
        <IconClass size={this.getFontSize()} color={color || 'black'} />
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
    const { units } = this.props;
    if (units) {
      return (
        <Text style={[styles.light]}>
          {units}
        </Text>
      );
    }
  }

  private getFontSize() {
    const { theme, fontSize } = this.props;

    return theme.sizes[fontSize || 'medium'];
  }
}

export const ChannelValue = withTheme(ChannelValueClass);

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

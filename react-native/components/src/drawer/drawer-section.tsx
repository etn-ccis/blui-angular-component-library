import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme, WithTheme, Theme } from '../theme';
import { gray } from '@pxblue/colors';
import { Title } from '../typography';
import { $DeepPartial } from '@callstack/react-theme-provider';

export interface DrawerSectionProps {
  /** Optional title for the section */
  title?: string;

  /** Child elements to be shown in the drawer section */
  children: React.ReactNode;

  /** Determines whether the section has a bottom border to divide it from other sections */
  divider?: boolean;

  /**
   * Overrides for theme
   */
  theme?: $DeepPartial<Theme>;
}

class DrawerSectionClass extends React.Component<WithTheme<DrawerSectionProps>> {
  static displayName = 'Drawer.Section';

  public render() {
    const { children } = this.props;
    return (
      <View style={styles.section}>
        {this.title()}
        {children}
        {this.divider()}
      </View>
    )
  }

  private title() {
    const { title } = this.props;

    if (title) {
      return (
        <View style={styles.titleContainer}>
          <Title>{title}</Title>
        </View>
      )
    }
  }

  private divider() {
    const { divider = true } = this.props;

    if (divider) {
      return (
        <View style={styles.divider}/>
      )
    }
  }
}

/**
 * Drawer.Section component
 *
 * This component wraps a number of Drawer.Item components and groups them
 * together with an optional title, and an optional divider.
 */
export default withTheme(DrawerSectionClass);
export { DrawerSectionClass };

const styles = StyleSheet.create({
  section: {
    paddingTop: 8
  },
  titleContainer: {
    height: 28,
    paddingHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'flex-end'
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: gray[100],
    paddingTop: 8
  }
});

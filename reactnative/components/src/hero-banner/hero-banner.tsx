import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Colors from '@pxblue/colors';
import { StyleProp, ViewStyle } from 'react-native';

export interface HeroBannerProps {
  /** Toggles a bottom divider */
  divider?: boolean;

  /** Max number of children to show */
  limit?: number;

  /** The children components to render in the HeroBanner */
  children?: React.ReactElement | React.ReactElement[];

   /** Style configuration for the wrapper View */
   style?: StyleProp<ViewStyle>;
}

/**
 * HeroBanner component
 *
 * Wrapper for 1-4 Hero components that neatly spaces
 * and displays them in a row.
 */
export class HeroBanner extends React.Component<HeroBannerProps> {
  render() {
    const { divider, children, limit, style } = this.props;
    const childrenArray = Array.isArray(children) ? children : [children];
    return (
      <React.Fragment>
        <View style={[styles.banner, style]}>
          { !!children &&
            childrenArray.slice(0, limit || 4).map((child: React.ReactNode) => child)
          }
        </View>
        { divider &&
          <View style={styles.divider}/>
        }
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    height: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.black['50']
  }
});

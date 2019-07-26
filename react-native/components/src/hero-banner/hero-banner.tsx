import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Colors from '@pxblue/colors';

export interface HeroBannerProps {
  divider?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

export class HeroBanner extends React.Component<HeroBannerProps> {
  render() {
    const { divider, children } = this.props;
    const childrenArray = Array.isArray(children) ? children : [children];
    return (
      <React.Fragment>
        <View style={styles.banner}>
          { !!children &&
            childrenArray.slice(0, 4).map((child: React.ReactNode) => child)
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
    borderColor: Colors.black['100']
  }
});

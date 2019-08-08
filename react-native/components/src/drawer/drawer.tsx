import React from 'react';
import { View } from 'react-native';
import { DrawerItem } from './drawer-item';

export class Drawer extends React.Component {
  public static Item = DrawerItem;

  render() {
    return (
      <View/>
    )
  }
}

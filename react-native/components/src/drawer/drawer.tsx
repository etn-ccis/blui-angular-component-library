import React from 'react';
import { View } from 'react-native';
import { DrawerItem } from './drawer-item';
import { DrawerSection } from './drawer-section';

export class Drawer extends React.Component {
  public static Item = DrawerItem;
  public static Section = DrawerSection;

  render() {
    return (
      <View/>
    )
  }
}

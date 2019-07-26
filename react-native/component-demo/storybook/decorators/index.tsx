import { View } from 'react-native';
import React from 'react';

export const centered = (storyFn: any) => <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{storyFn()}</View>;
export const centeredBordered = (storyFn: any) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View style={{borderColor: 'black', borderWidth: 1}}>
    {storyFn()}
    </View>
  </View>
);
export const framedRow = (storyFn: any) =>
  <View style={{ justifyContent: 'center', height: '100%' }}>
    <View style={{ height: 2, backgroundColor: '#dddddd', flex: 1 }} />
    {storyFn()}
    <View style={{ height: 2, backgroundColor: '#dddddd', flex: 1 }} />
  </View>;

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

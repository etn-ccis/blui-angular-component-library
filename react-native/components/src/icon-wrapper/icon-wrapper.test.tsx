import React from 'react';
import TestRenderer from 'react-test-renderer';
import { wrapIcon } from './icon-wrapper';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { IconProps } from 'react-native-vector-icons/Icon';

const Icon = (props: IconProps) =>
  <View />

const Leaf = (props: SvgProps) =>
  <View />

describe('IconWrapper', () => {
  describe('when passed a MaterialCommunity icon', () => {
    it('passes through the size and color', () => {
      const WrappedIcon = wrapIcon({ IconClass: Icon, name: 'chart-pie' });
      const instance = TestRenderer.create(
        <WrappedIcon size={100} color={'red'} />
      ).root;

      const icon = instance.find(x => x.props.testID === 'icon');

      expect(icon.props).toMatchObject({
        size: 100,
        color: 'red',
        name: 'chart-pie'
      });
    });
  });

  describe('when passed a pxblue svg icon', () => {
    it('converts size and color to height, width, and fill', () => {
      const WrappedLeaf = wrapIcon({ IconClass: Leaf });
      const instance = TestRenderer.create(
        <WrappedLeaf size={100} color={'red'} />
      ).root;

      const icon = instance.find(x => x.props.testID === 'icon');

      expect(icon.props).toMatchObject({
        width: 100,
        height: 100,
        fill: 'red'
      });
    });
  });
});
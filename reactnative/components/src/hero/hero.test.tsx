import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Hero, ChannelValue, wrapIcon } from '..';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Line = wrapIcon({ IconClass: Icon, name: 'chart-line-variant' });

describe('Hero', () => {
  describe('with only a label and icon', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Hero label={'Hero'} IconClass={Line}/>
      ).root;
    });

    it('renders without a ChannelValue', () => {
      expect(instance.findAllByType(ChannelValue)).toHaveLength(0);
    });

    it('renders the label', () => {
      const textElements = instance.findAllByType(Text);

      expect(textElements).toHaveLength(2); // first element is the icon
      expect(textElements[1].props.children).toEqual('Hero');
    });
  });

  describe('with all props', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Hero label={'Hero'} IconClass={Line} value={'100'} units={'%'} onPress={jest.fn()}/>
      ).root;
    });

    it('renders a ChannelValue', () => {
      const channelValue = instance.findByType(ChannelValue);

      expect(channelValue).toBeTruthy();
      expect(channelValue.props.value).toEqual('100');
      expect(channelValue.props.units).toEqual('%');
    });
  });
});

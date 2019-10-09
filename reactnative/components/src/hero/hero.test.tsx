import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Hero } from '.';
import { View, Text } from 'react-native';
import { ChannelValue } from '../channel-value';

describe('Hero', () => {
  describe('with only a label and icon', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Hero label={'Hero'} icon={<View/>}/>
      ).root;
    });

    it('renders without a ChannelValue', () => {
      expect(instance.findAllByType(ChannelValue)).toHaveLength(0);
    });

    it('renders the label', () => {
      const textElements = instance.findAllByType(Text);

      expect(textElements).toHaveLength(1);
      expect(textElements[0].props.children).toEqual('Hero');
    });
  });

  describe('with all props', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Hero label={'Hero'} icon={<View/>} value={'100'} units={'%'} onPress={jest.fn()}/>
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

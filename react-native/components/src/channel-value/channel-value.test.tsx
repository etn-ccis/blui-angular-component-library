import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ChannelValue } from '.';
import { Text, TouchableOpacity } from 'react-native';

describe('ChannelValue', () => {
  const getChildTextComponents = (channelValue: TestRenderer.ReactTestInstance) =>
    channelValue
      .findAllByType(Text)
      .filter(x => x.props.testID !== 'text-wrapper')

  describe('units Text element', () => {
    it('only renders one Text element when units are not present', () => {
      const instance = TestRenderer.create(
        <ChannelValue value={123} />
      ).root;

      expect(getChildTextComponents(instance)).toHaveLength(1);
    });

    it('renders units before value when prefix == true', () => {
      const instance = TestRenderer.create(
        <ChannelValue
          value={123}
          prefix={true}
          units="hz"
        />
      ).root;

      const textElements = getChildTextComponents(instance);

      expect(textElements).toHaveLength(2);
      expect(textElements[0].props.children).toEqual('hz');
      expect(textElements[1].props.children).toEqual(123);
    });

    it('renders units after value when prefix == false', () => {
      const instance = TestRenderer.create(
        <ChannelValue
          value={123}
          prefix={false}
          units="hz"
        />
      ).root;

      const textElements = getChildTextComponents(instance);

      expect(textElements).toHaveLength(2);
      expect(textElements[0].props.children).toEqual(123);
      expect(textElements[1].props.children).toEqual('hz');
    });

    it('renders units after value by default', () => {
      const instance = TestRenderer.create(
        <ChannelValue
          value={123}
          units="hz"
        />
      ).root;

      const textElements = getChildTextComponents(instance);

      expect(textElements).toHaveLength(2);
      expect(textElements[0].props.children).toEqual(123);
      expect(textElements[1].props.children).toEqual('hz');
    });
  });

  it('renders an icon if passed in', () => {
    const instance = TestRenderer.create(
      <ChannelValue
        value={123}
        IconClass={() => <TouchableOpacity />}
      />
    ).root;

    const icon = instance.findByType(TouchableOpacity);

    expect(icon).toBeTruthy();
  });
});
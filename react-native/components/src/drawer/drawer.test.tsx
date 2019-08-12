import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Drawer } from './index';
import { TouchableOpacity, View } from 'react-native';

const TestComponent1 = () => <View/>;
const TestComponent2 = () => <View/>;

describe('Drawer', () => {
  describe('with one child node', () => {

    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Drawer title={'Test Title'}>
          <TestComponent1/>
        </Drawer>
      ).root;
    });

    it('disables the touchable area', () => {
      const touchable = instance.findByType(TouchableOpacity);
      expect(touchable.props.disabled).toBeTruthy();
    });

    it('renders the only child node', () => {
      const child = instance.findAllByType(TestComponent1);
      expect(child).toHaveLength(1);
    });
  });

  describe('with two child nodes', () => {

    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Drawer title={'Test Title'}>
          <TestComponent1/>
          <TestComponent2/>
        </Drawer>
      ).root;
    });

    it('enables the touchable area', () => {
      const touchable = instance.findByType(TouchableOpacity);
      expect(touchable.props.disabled).toBeFalsy();
    });

    it('renders only the first child node when the header has not been pressed', () => {
      const child1 = instance.findAllByType(TestComponent1);
      const child2 = instance.findAllByType(TestComponent2);
      expect(child1).toHaveLength(1);
      expect(child2).toHaveLength(0);
    });

    it('renders only the second child node when the header has been pressed', () => {
      const touchable = instance.findByType(TouchableOpacity);
      touchable.props.onPress();
      const child1 = instance.findAllByType(TestComponent1);
      const child2 = instance.findAllByType(TestComponent2);
      expect(child1).toHaveLength(0);
      expect(child2).toHaveLength(1);
    });
  });
});

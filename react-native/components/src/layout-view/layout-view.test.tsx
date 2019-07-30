import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { LayoutView } from '.';
import { SafeAreaView, View } from 'react-native';

describe('LayoutView', () => {
  it('renders the content', () => {
    const instance = TestRenderer.create(
      <LayoutView>
        <View/>
      </LayoutView>
    ).root;

    expect(instance.findAllByType(View)).toHaveLength(1);
  });

  describe('when there is no header or footer', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView/>
      ).root;
    });

    it('renders the default header and footer', () => {
      expect(instance.findAllByType(SafeAreaView)).toHaveLength(3);
    });
  });

  describe('when there is a header and no footer', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView header={<View/>}/>
      ).root;
    });

    it('renders the header and default footer', () => {
      expect(instance.findAllByType(SafeAreaView)).toHaveLength(2);
      expect(instance.findAllByType(View)).toHaveLength(1);
    });
  });

  describe('when there is a footer and no header', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView footer={<View/>}/>
      ).root;
    });

    it('renders the footer and default header', () => {
      expect(instance.findAllByType(SafeAreaView)).toHaveLength(2);
      expect(instance.findAllByType(View)).toHaveLength(1);
    });
  });

  describe('when there is a header and a footer', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView header={<View/>} footer={<View/>}/>
      ).root;
    });

    it('renders the header and footer', () => {
      expect(instance.findAllByType(SafeAreaView)).toHaveLength(1);
      expect(instance.findAllByType(View)).toHaveLength(2);
    });
  });
});

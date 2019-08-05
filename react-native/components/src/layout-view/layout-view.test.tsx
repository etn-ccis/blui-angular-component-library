import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { LayoutView } from '.';
import { View } from 'react-native';

describe('LayoutView', () => {
  it('renders the content', () => {
    const instance = TestRenderer.create(
      <LayoutView>
        <View testID={'content'}/>
      </LayoutView>
    ).root;

    const content = instance.find(x => x.props.testID == 'content');
    expect(content).toBeTruthy();
  });

  describe('when there is no header or footer', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView/>
      ).root;
    });

    it('renders the default header and footer', () => {
      const header = instance.find(x => x.props.testID == 'layout-default-header');
      const footer = instance.find(x => x.props.testID == 'layout-default-footer');
      expect(header).toBeTruthy();
      expect(footer).toBeTruthy();
    });
  });

  describe('when there is a header and no footer', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView header={<View testID={'custom-header'}/>}/>
      ).root;
    });

    it('renders the header and default footer', () => {
      const header = instance.find(x => x.props.testID == 'custom-header');
      const defaultHeader = instance.findAllByProps({'testId': 'layout-default-header'});
      const footer = instance.find(x => x.props.testID == 'layout-default-footer');
      expect(header).toBeTruthy();
      expect(defaultHeader).toHaveLength(0);
      expect(footer).toBeTruthy();
    });
  });

  describe('when there is a footer and no header', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView footer={<View testID={'custom-footer'}/>}/>
      ).root;
    });

    it('renders the footer and default header', () => {
      const header = instance.find(x => x.props.testID == 'layout-default-header');
      const footer = instance.find(x => x.props.testID == 'custom-footer');
      const defaultFooter = instance.findAllByProps({'testId': 'layout-default-footer'});
      expect(header).toBeTruthy();
      expect(footer).toBeTruthy();
      expect(defaultFooter).toHaveLength(0);
    });
  });

  describe('when there is a header and a footer', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <LayoutView header={<View testID={'custom-header'}/>} footer={<View testID={'custom-footer'}/>}/>
      ).root;
    });

    it('renders the header and footer', () => {
      const header = instance.find(x => x.props.testID == 'custom-header');
      const defaultHeader = instance.findAllByProps({'testId': 'layout-default-header'});
      const footer = instance.find(x => x.props.testID == 'custom-footer');
      const defaultFooter = instance.findAllByProps({'testId': 'layout-default-footer'});
      expect(header).toBeTruthy();
      expect(defaultHeader).toHaveLength(0);
      expect(footer).toBeTruthy();
      expect(defaultFooter).toHaveLength(0);
    });
  });
});

import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Header } from '.';
import { wrapIcon } from '..'
import Icon from 'react-native-vector-icons/MaterialIcons';
import faker from 'faker';
const MenuIcon = wrapIcon({IconClass: Icon, name:'menu'});

describe('Header', () => {
  describe('with only required props', () => {

    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Header title={'Test Title'}/>
      ).root;
    });

    it('renders just the title element', () => {
      const title = instance.find(x => x.props.testID === 'header-title');
      const subtitle = instance.findAll(x => x.props.testID === 'header-subtitle');
      const backgroundImage = instance.findAll(x => x.props.testID === 'header-background-image');
      const navigation = instance.findAll(x => x.props.testID === 'header-navigation');
      const actionItems = instance.findAll(x => x.props.testID === 'header-action-item');
      expect(title).toBeTruthy();
      expect(subtitle).toHaveLength(0);
      expect(backgroundImage).toHaveLength(0);
      expect(navigation).toHaveLength(0);
      expect(actionItems).toHaveLength(0);
    });
  });

  describe('with all props', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Header
          title={'Test Title'}
          subtitle={'Subtitle'}
          navigation={{icon: MenuIcon, onPress: () => {}}}
          actionItems={[
            {icon: MenuIcon, onPress: () => {}},
            {icon: MenuIcon, onPress: () => {}},
            {icon: MenuIcon, onPress: () => {}}
          ]}
          backgroundColor={'blue'}
          fontColor={'white'}
          backgroundImage={{ uri: faker.image.dataUri(100, 100) }}
        />
      ).root;
    });

    it('renders the title, subtitle, background image, navigation, and action items', () => {
      const title = instance.find(x => x.props.testID === 'header-title');
      const subtitle = instance.find(x => x.props.testID === 'header-subtitle');
      const backgroundImage = instance.find(x => x.props.testID === 'header-background-image');
      const navigation = instance.find(x => x.props.testID === 'header-navigation');
      const actionItem0 = instance.find(x => x.props.testID === 'header-action-item0');
      const actionItem1 = instance.find(x => x.props.testID === 'header-action-item1');
      const actionItem2 = instance.find(x => x.props.testID === 'header-action-item2');
      expect(title).toBeTruthy();
      expect(subtitle).toBeTruthy();
      expect(backgroundImage).toBeTruthy();
      expect(navigation).toBeTruthy();
      expect(actionItem0).toBeTruthy();
      expect(actionItem1).toBeTruthy();
      expect(actionItem2).toBeTruthy();
    });
  });

  describe('action items', () => {
    let instance: ReactTestInstance;
    beforeEach(() => {
      instance = TestRenderer.create(
        <Header
          title={'Test Title'}
          actionItems={[
            {icon: MenuIcon, onPress: () => {}},
            {icon: MenuIcon, onPress: () => {}},
            {icon: MenuIcon, onPress: () => {}},
            {icon: MenuIcon, onPress: () => {}}
          ]}
        />
      ).root;
    });

    it('only renders 3 action items when more than 3 are passed in', () => {
      const actionItem0 = instance.find(x => x.props.testID === 'header-action-item0');
      const actionItem1 = instance.find(x => x.props.testID === 'header-action-item1');
      const actionItem2 = instance.find(x => x.props.testID === 'header-action-item2');
      const actionItem3 = instance.findAll(x => x.props.testID === 'header-action-item3');
      expect(actionItem0).toBeTruthy();
      expect(actionItem1).toBeTruthy();
      expect(actionItem2).toBeTruthy();
      expect(actionItem3).toHaveLength(0);
    });
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { InfoListItem } from '.';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OtherComponent = () => <View />;

describe('InfoListItem', () => {
  describe('subtitle', () => {
    describe('string subtitle', () => {
      it('renders as a Text element when a string is passed in', () => {
        const instance = TestRenderer.create(
          <InfoListItem
            title={'some title'}
            subtitle={'some subtitle'}
          />
        ).root;

        const textElements = instance.findAllByType(Text);

        expect(textElements).toHaveLength(2);
        expect(textElements[1].props.children).toEqual('some subtitle')
      });
    });

    describe('when subtitle is an array of a string and an icon', () => {
      let instance: TestRenderer.ReactTestInstance;
      let instance2: TestRenderer.ReactTestInstance;

      beforeEach(() => {
        instance = TestRenderer.create(
          <InfoListItem
            title={'some title'}
            subtitle={['details...', <OtherComponent />]}
          />
        ).root;
        instance2 = TestRenderer.create(
          <InfoListItem
            title={'some title'}
            subtitleSeparator={'-'}
            subtitle={['details...', <OtherComponent />]}
          />
        ).root;
      });

      it('renders Text elements for the title, string from subtitles, and interpunct separator', () => {
        const textElements = instance.findAllByType(Text);

        expect(textElements).toHaveLength(3);

        expect(textElements[1].props.children).toEqual('details...')
        expect(textElements[2].props.children).toEqual('\u00B7');
      });

      it('renders Text elements for the title, string from subtitles, and CUSTOM interpunct separator', () => {
        const textElements = instance2.findAllByType(Text);

        expect(textElements).toHaveLength(3);

        expect(textElements[1].props.children).toEqual('details...')
        expect(textElements[2].props.children).toEqual('-');
      });

      it('renders the non-string subtitle element as it was given', () => {
        const otherElement = instance.findAllByType(OtherComponent);

        expect(otherElement).toHaveLength(1);
      });
    });

    it('truncates subtitle elements to a max of 3', () => {
      const instance = TestRenderer.create(
        <InfoListItem
          title={'some title'}
          subtitle={['a', 'b', 'c', 'd']}
        />
      ).root;

      const textElements = instance.findAllByType(Text);

      const titleCount = 1;
      const subtitleElementCount = 3;
      const interpunctCount = 2;

      expect(textElements).toHaveLength(titleCount + subtitleElementCount + interpunctCount);
    });
  });

  describe('chevron', () => {
    let instance: TestRenderer.ReactTestInstance;

    describe('when provided', () => {
      
      it('appears when there is no rightComponent', () => {
        instance = TestRenderer.create(
          <InfoListItem title={'some title'} chevron />
        ).root;
        expect(instance.findAllByType(Icon)).toHaveLength(1);
      });
      
      it('does not appear when there is a rightComponent', () => {
        instance = TestRenderer.create(
          <InfoListItem title={'some title'} chevron rightComponent={<View/>} />
        ).root;
        expect(instance.findAllByType(Icon)).toHaveLength(0);
      });
    });

    describe('when not provided', () => {
      beforeEach(() => {
        instance = TestRenderer.create(
          <InfoListItem title={'some title'} onPress={() => {}} />
        ).root;
      });
      it('does not show its chevron', () => {
        expect(instance.findAllByType(Icon)).toHaveLength(0);
      });
    });
  });
});

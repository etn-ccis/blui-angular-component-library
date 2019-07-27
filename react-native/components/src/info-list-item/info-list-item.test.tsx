import React from 'react';
import TestRenderer from 'react-test-renderer';
import { InfoListItem } from '.';
import { Text, View, SectionList } from 'react-native';

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

      beforeEach(() => {
        instance = TestRenderer.create(
          <InfoListItem
            title={'some title'}
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

      it('renders the non-string subtitle element as it was given', () => {
        const otherElement = instance.findAllByType(OtherComponent);

        expect(otherElement).toHaveLength(1);
      });
    });

    describe('truncates subtitle elements to a max of 3', () => {
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
});

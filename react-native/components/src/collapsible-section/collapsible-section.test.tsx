import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CollapsibleSection } from './collapsible-section';
import { Text } from 'react-native';
import Collapsible from 'react-native-collapsible';

describe('CollapsibleSection', () => {
  describe('startOpen', () => {
    it('sets the Collapsible element to collapsed == false if startOpen == true', () => {
      const instance = TestRenderer.create(
        <CollapsibleSection title={'sample collapsible section'} startOpen={true}>
          <Text>Hello</Text>
        </CollapsibleSection>
      ).root;

      expect(instance.findByType(Collapsible).props.collapsed).toEqual(false);
    });

    it('sets the Collapsible element to collapsed == true if startOpen == false', () => {
      const instance = TestRenderer.create(
        <CollapsibleSection title={'sample collapsible section'} startOpen={false}>
          <Text>Hello</Text>
        </CollapsibleSection>
      ).root;

      expect(instance.findByType(Collapsible).props.collapsed).toEqual(true);
    });

    it('sets the Collapsible element to collapsed == false if startOpen is not provided', () => {
      const instance = TestRenderer.create(
        <CollapsibleSection title={'sample collapsible section'}>
          <Text>Hello</Text>
        </CollapsibleSection>
      ).root;

      expect(instance.findByType(Collapsible).props.collapsed).toEqual(false);
    });
  });

  describe('expanding and collapsing', () => {
    it('pressing the header multiple times collapses and expands the content', () => {
      const instance = TestRenderer.create(
        <CollapsibleSection title={'sample collapsible section'} startOpen={true}>
          <Text>Hello</Text>
        </CollapsibleSection>
      );

      const header = instance.root.find(x => x.props.testID === 'header');
      const content = instance.root.findByType(Collapsible);

      const collapsedAtStart = content.props.collapsed;

      header.props.onPress();
      const collapsedAfterFirstPress = content.props.collapsed;

      header.props.onPress();
      const collapsedAfterSecondPress = content.props.collapsed;

      expect(collapsedAtStart).toEqual(false);
      expect(collapsedAfterFirstPress).toEqual(true);
      expect(collapsedAfterSecondPress).toEqual(false);
    });
  });

  describe('when disabled', () => {
    it('pressing the header multiple times does not expand or collapse the content', () => {
      const instance = TestRenderer.create(
        <CollapsibleSection title={'sample collapsible section'} startOpen={true} disabled={true}>
          <Text>Hello</Text>
        </CollapsibleSection>
      );

      const header = instance.root.find(x => x.props.testID === 'header');
      const content = instance.root.findByType(Collapsible);

      const collapsedAtStart = content.props.collapsed;

      header.props.onPress();
      const collapsedAfterFirstPress = content.props.collapsed;

      expect(collapsedAtStart).toEqual(false);
      expect(collapsedAfterFirstPress).toEqual(false);
    });
  });
});
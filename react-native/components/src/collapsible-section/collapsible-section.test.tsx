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
    it('pressing the header when it is open collapses the body', () => {
      const instance = TestRenderer.create(
        <CollapsibleSection title={'sample collapsible section'} startOpen={true}>
          <Text>Hello</Text>
        </CollapsibleSection>
      );

      let header = instance.root.find(x => x.props.testID === 'header');
      let content = instance.root.findByType(Collapsible);

      expect(content.props.collapsed).toEqual(false);

      header.props.onPress();

      header = instance.root.find(x => x.props.testID === 'header');
      content = instance.root.findByType(Collapsible);

      expect(content.props.collapsed).toEqual(false);

    });
  });
});
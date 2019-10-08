import React from 'react';
import TestRenderer from 'react-test-renderer';
import { HeroBanner } from '.';
import { View, Text } from 'react-native';

// TODO: Fix these tests
describe('HeroBanner', () => {
  it('only renders four children when over four are passed in', () => {
    const instance = TestRenderer.create(
      <HeroBanner>
        <Text>A</Text>
        <Text>B</Text>
        <Text>C</Text>
        <Text>D</Text>
      </HeroBanner>
    ).root;

    expect(instance.findAllByType(Text)).toHaveLength(4);
  });

  describe('divider', () => {
    it('does not render if the prop is not specified', () => {
      const instance = TestRenderer.create(
        <HeroBanner/>
      ).root;

      expect(instance.findAllByType(View)).toHaveLength(1);
    });

    it('does render if the prop is set to true', () => {
      const instance = TestRenderer.create(
        <HeroBanner divider={true}/>
      ).root;

      expect(instance.findAllByType(View)).toHaveLength(2);
    });
  })
});

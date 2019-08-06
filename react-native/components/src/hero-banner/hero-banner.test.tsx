import React from 'react';
import TestRenderer from 'react-test-renderer';
import { HeroBanner } from '.';
import { Hero } from '../hero';
import { View } from 'react-native';

describe('HeroBanner', () => {
  it('only renders four children when over four are passed in', () => {
    const instance = TestRenderer.create(
      <HeroBanner>
        <Hero label={'Hero One'} icon={<View/>}/>
        <Hero label={'Hero Two'} icon={<View/>}/>
        <Hero label={'Hero Three'} icon={<View/>}/>
        <Hero label={'Hero Four'} icon={<View/>}/>
        <Hero label={'Hero Five'} icon={<View/>}/>
      </HeroBanner>
    ).root;

    expect(instance.findAllByType(Hero)).toHaveLength(4);
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

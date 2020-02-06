import React from 'react';
import TestRenderer from 'react-test-renderer';
import { HeroBanner, Hero, wrapIcon } from '..';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Line = wrapIcon({ IconClass: Icon, name: 'chart-line-variant' });

describe('HeroBanner', () => {
  it('only renders four children when over four are passed in', () => {
    const instance = TestRenderer.create(
      <HeroBanner>
        <Hero label={'Hero One'} IconClass={Line}/>
        <Hero label={'Hero Two'} IconClass={Line}/>
        <Hero label={'Hero Three'} IconClass={Line}/>
        <Hero label={'Hero Four'} IconClass={Line}/>
        <Hero label={'Hero Five'} IconClass={Line}/>
      </HeroBanner>
    ).root;

    expect(instance.findAllByType(Hero)).toHaveLength(4);
  });
  it('renders five children if limit is 5', () => {
    const instance = TestRenderer.create(
      <HeroBanner limit={5}>
        <Hero label={'Hero One'} IconClass={Line}/>
        <Hero label={'Hero Two'} IconClass={Line}/>
        <Hero label={'Hero Three'} IconClass={Line}/>
        <Hero label={'Hero Four'} IconClass={Line}/>
        <Hero label={'Hero Five'} IconClass={Line}/>
      </HeroBanner>
    ).root;

    expect(instance.findAllByType(Hero)).toHaveLength(5);
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

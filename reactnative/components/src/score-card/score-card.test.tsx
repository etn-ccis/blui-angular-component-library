import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { ScoreCard } from '.';
import { View } from 'react-native';
import { Hero, wrapIcon } from '..';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Line = wrapIcon({ IconClass: Icon, name: 'chart-line-variant' });

describe('ScoreCard', () => {
  describe('headerText', () => {
    describe('when a single string is passed in as headerText', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerTitle={'Hello'} />
        ).root;
      });

      it('finds a single header text element', () => {
        expect(instance.find(x => x.props.testID == 'header_title')).toBeTruthy();
        expect(instance.findAll(x => x.props.testID == 'header_subtitle')).toHaveLength(0);
        expect(instance.findAll(x => x.props.testID == 'header_info')).toHaveLength(0);
      });
    });

    describe('when an array of three strings is passed', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard
            headerTitle={'Portland Datacenter Long Name'}
            headerSubtitle={'6 UPS Devices'}
            headerInfo={'Attention Required'}
          />
        ).root;
      });

      it('renders at all three', () => {
        expect(instance.find(x => x.props.testID == 'header_title')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'header_subtitle')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'header_info')).toBeTruthy();
      });
    });
  });

  describe('actionRow', () => {
    describe('when present', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerTitle={'Hello'} actionRow={<View testID={'my-action'} />} />
        ).root;
      });

      it('is rendered', () => {
        expect(instance.find(x => x.props.testID == 'my-action')).toBeTruthy();
      });
    });
  });

  describe('badge', () => {
    describe('when present', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerTitle={'Hello'} badge={<Hero testID={'my-badge'} label={'...'} IconClass={Line} />} />
        ).root;
      });

      it('is rendered', () => {
        expect(instance.find(x => x.props.testID == 'my-badge')).toBeTruthy();
      });
    });
  });

  describe('actionItems', () => {
    describe('when 2 actionItems are passed in', () => {
      let instance: ReactTestInstance;
      let firstCallback: ReturnType<typeof jest.fn>;
      let secondCallback: ReturnType<typeof jest.fn>;
      beforeEach(() => {
        firstCallback = jest.fn();
        secondCallback = jest.fn();
        instance = TestRenderer.create(
          <ScoreCard
            headerTitle={'Hello'}
            actionItems={[
              { icon: Line, onPress: firstCallback },
              { icon: Line, onPress: secondCallback }
            ]}
          />
        ).root;
      });

      it('renders two actionItems', () => {
        expect(instance.find(x => x.props.testID == 'action-item0')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'action-item1')).toBeTruthy();
      });

      it('the first button can be pressed', () => {
        instance.find(x => x.props.testID == 'action-item0').props.onPress();

        expect(firstCallback).toHaveBeenCalled();
        expect(secondCallback).not.toHaveBeenCalled();
      });

      it('the second button can be pressed', () => {
        instance.find(x => x.props.testID == 'action-item1').props.onPress();

        expect(firstCallback).not.toHaveBeenCalled();
        expect(secondCallback).toHaveBeenCalled();
      });
    });

    describe('when more than 2 actionItems are passed in', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard
            headerTitle={'Hello'}
            actionItems={[
              { icon: Line, onPress: jest.fn() },
              { icon: Line, onPress: jest.fn() },
              { icon: Line, onPress: jest.fn() }
            ]}
          />
        ).root;
      });

      it('renders only the first two items', () => {
        expect(instance.find(x => x.props.testID == 'action-item0')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'action-item1')).toBeTruthy();
        expect(instance.findAll(x => x.props.testID == 'action-item2')).toHaveLength(0);
      });
    });
  });
});
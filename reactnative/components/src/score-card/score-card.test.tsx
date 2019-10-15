import React  from 'react';
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
          <ScoreCard headerText={'Hello'} />
        ).root;
      });

      it('finds a single header text element', () => {
        expect(instance.find(x => x.props.testID == 'header1')).toBeTruthy();
        expect(instance.findAll(x => x.props.testID == 'header2')).toHaveLength(0);
        expect(instance.findAll(x => x.props.testID == 'header3')).toHaveLength(0);
      });
    });

    describe('when an array of three strings is passed', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerText={['Hello', 'World', '!!']} />
        ).root;
      });

      it('renders at all three', () => {
        expect(instance.find(x => x.props.testID == 'header1')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'header2')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'header3')).toBeTruthy();
      });
    });

    describe('when an array of less than three strings is passed', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerText={['Hello']} />
        ).root;
      });

      it('only renders 1 header text element', () => {
        expect(instance.find(x => x.props.testID == 'header1')).toBeTruthy();
        expect(instance.findAll(x => x.props.testID == 'header2')).toHaveLength(0);
        expect(instance.findAll(x => x.props.testID == 'header3')).toHaveLength(0);
      });
    });
  });

  describe('actionRow', () => {
    describe('when present', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerText={'Hello'} actionRow={<View testID={'my-action'} />} />
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
          <ScoreCard headerText={'Hello'} badge={<Hero testID={'my-badge'} label={'...'} IconClass={Line} />} />
        ).root;
      });

      it('is rendered', () => {
        expect(instance.find(x => x.props.testID == 'my-badge')).toBeTruthy();
      });
    });
  });

  describe('actionItems and onPressOverflow', () => {
    describe('when 2 actionItems and onPressOverflow are passed in', () => {
      let instance: ReactTestInstance;
      let firstCallback: ReturnType<typeof jest.fn>;
      let secondCallback: ReturnType<typeof jest.fn>;
      beforeEach(() => {
        firstCallback = jest.fn();
        secondCallback = jest.fn();
        instance = TestRenderer.create(
          <ScoreCard
            headerText={'Hello'}
            actionItems={[
              { icon: 'autorenew', onPress: firstCallback },
              { icon: 'autorenew', onPress: secondCallback }
            ]}
            onPressOverflow={jest.fn()}
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

      it('doesn\'t render the overflow icon', () => {
        expect(instance.findAll(x => x.props.testID == 'overflow-item')).toHaveLength(0);
      });
    });

    describe('when more than 2 actionItems and onPressOverflow are passed in', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard
            headerText={'Hello'}
            actionItems={[
              { icon: 'autorenew', onPress: jest.fn() },
              { icon: 'autorenew', onPress: jest.fn() },
              { icon: 'autorenew', onPress: jest.fn() }
            ]}
            onPressOverflow={jest.fn()}
          />
        ).root;
      });

      it('doesn\'t render the action items', () => {
        expect(instance.findAll(x => x.props.testID == 'action-item0')).toHaveLength(0);
        expect(instance.findAll(x => x.props.testID == 'action-item1')).toHaveLength(0);
      });

      it('renders the overflow icon', () => {
        expect(instance.find(x => x.props.testID == 'overflow-item')).toBeTruthy();
      });
    });

    describe('when 1 actionItem and onPressOverflow are passed in', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard
            headerText={'Hello'}
            actionItems={[
              { icon: 'autorenew', onPress: jest.fn() }
            ]}
            onPressOverflow={jest.fn()}
          />
        ).root;
      });

      it('renders a single actionItem', () => {
        expect(instance.find(x => x.props.testID == 'action-item0')).toBeTruthy();
        expect(instance.findAll(x => x.props.testID == 'action-item1')).toHaveLength(0);
      });

      it('doesn\'t render the overflow icon', () => {
        expect(instance.findAll(x => x.props.testID == 'overflow-item')).toHaveLength(0);
      });
    });

    describe('when more than 2 actionItems are passed in, but onPressOverflow is not', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard
            headerText={'Hello'}
            actionItems={[
              { icon: 'autorenew', onPress: jest.fn() },
              { icon: 'autorenew', onPress: jest.fn() },
              { icon: 'autorenew', onPress: jest.fn() }
            ]}
          />
        ).root;
      });

      it('renders only two actionItems', () => {
        expect(instance.find(x => x.props.testID == 'action-item0')).toBeTruthy();
        expect(instance.find(x => x.props.testID == 'action-item1')).toBeTruthy();
      });

      it('doesn\'t render the overflow icon', () => {
        expect(instance.findAll(x => x.props.testID == 'overflow-item')).toHaveLength(0);
      });
    });

    describe('when onPressOverflow is passed in, but actionItems are not', () => {
      let instance: ReactTestInstance;
      beforeEach(() => {
        instance = TestRenderer.create(
          <ScoreCard headerText={'Hello'} onPressOverflow={jest.fn()} />
        ).root;
      });

      it('doesn\'t render any actionItems', () => {
        expect(instance.findAll(x => x.props.testID == 'action-item0')).toHaveLength(0);
        expect(instance.findAll(x => x.props.testID == 'action-item1')).toHaveLength(0);
      });

      it('renders the overflow icon', () => {
        expect(instance.find(x => x.props.testID == 'overflow-item')).toBeTruthy();
      });
    });
  });
});
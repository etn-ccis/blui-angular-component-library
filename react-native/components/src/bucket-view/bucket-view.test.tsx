import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { BucketView, BucketViewProps } from './bucket-view';

describe('BucketView', () => {
  type Data = {
    x: number;
  };

  const MyComponent: FunctionComponent<{ value: number, testID: string }> = ({ value, testID }) =>
    <Text testID={testID}>{value}</Text>

  const renderItem = (data: Data) =>
    <MyComponent value={data.x} testID={`${data.x}`} key={`${data.x}`} />
  
  const groupBy = (data: Data): string => {
    if (data.x < 10) {
      return 'under 10';
    } else if (data.x < 100) {
      return 'under 100';
    } else {
      return 'large';
    }
  }

  describe('when data falling in two of the buckets is provided', () => {
    const data: Array<Data> = [
      { x: 1 },
      { x: 2 },
      { x: 100 }
    ];

    let instance: ReactTestInstance;

    beforeEach(() => {
      instance = TestRenderer.create(
        <BucketView
          data={data}
          renderItem={renderItem}
          getGroupLabel={groupBy}
          groupLabels={['under 10', 'under 100', 'large']}
        />
      ).root;
    });

    it('renders the buckets that have data', () => {
      expect(instance.find(x => x.props.testID === 'collapsible-section[under 10]')).toBeTruthy();
      expect(instance.find(x => x.props.testID === 'collapsible-section[large]')).toBeTruthy();
    });

    it('doesn\'t render buckets that have no items', () => {
      expect(instance.findAll(x => x.props.testID === 'collapsible-section[under 100]')).toHaveLength(0);
    });

    it('renders the expected number of children in each section', () => {
      expect(instance.find(x => x.props.testID === 'collapsible-section[under 10]').props.children).toHaveLength(2);
      expect(instance.find(x => x.props.testID === 'collapsible-section[large]').props.children).toHaveLength(1);
    });
  });
});

import React, { Component, ComponentType } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { groupBy, interleave, LabeledArrays } from '../helpers/utils';
import { CollapsibleSection } from '../collapsible-section';

export interface BucketViewProps<T, TLabel extends string = string> {
  /** Data to be rendered to components */
  data: Array<T>;

  /** Function to render each element from data */
  renderItem: (element: T) => JSX.Element;

  /**
   * Function determine label for element.
   * All elements that map to a label will be shown in the same collapsible section
   */
  getLabel: (datum: T) => TLabel;

  /**
   * A comparitor between labels.
   * Used to sort labels
   */
  compareLabels?: (a: TLabel, b: TLabel) => number;

  /**
   * Labels to be shown.
   * getLabel should return an element from this array for any data.
   * Sutable when labels are from a known group.
   */
  labels?: Array<TLabel>;

  /** Style for outer container */
  style?: StyleProp<ViewStyle>;

  /** Optional separator to be rendered between items */
  ItemSeparatorComponent?: ComponentType;
};

export class BucketView<T> extends Component<BucketViewProps<T>> {
  public render() {
    const { data, getLabel, style } = this.props;
    const buckets = groupBy(getLabel, data);

    return (
      <View style={style}>
        {this.getLabels(buckets)
          .filter(label => buckets[label])
          .map(label => (
            <CollapsibleSection title={label} testID={`collapsible-section[${label}]`} key={label}>
              {this.bucketContents(buckets[label])}
            </CollapsibleSection>
          )
        )}
      </View>
    );
  }

  private getLabels(buckets: LabeledArrays<T>) {
    const { labels, compareLabels } = this.props;

    if (labels) {
      return labels;
    } else if (compareLabels) {
      return Object.keys(buckets).sort(compareLabels);
    } else {
      return Object.keys(buckets);
    }
  }

  private bucketContents(array: Array<T>) {
    const { renderItem, ItemSeparatorComponent } = this.props;
    const elements = array.map(renderItem);

    if (ItemSeparatorComponent) {
      return interleave(elements, () => <ItemSeparatorComponent />)
    } else {
      return elements;
    }
  }
}
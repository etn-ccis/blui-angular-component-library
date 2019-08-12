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
  getGroupLabel: (datum: T) => TLabel;

  /**
   * Labels to be shown.
   * getGroupLabel should return an element from this array for any data.
   * Sutable when labels are from a known group.
   */
  groupLabels?: Array<TLabel>;

  /**
   * A comparitor between labels.
   * Used to sort labels
   */
  compareGroupLabels?: (a: TLabel, b: TLabel) => number;

  /**
   * A comparitor between data.
   * Used to sort items in each group
   */
  compareData?: (a: T, b: T) => number;

  /** Style for outer container */
  style?: StyleProp<ViewStyle>;

  /** Optional separator to be rendered between items */
  ItemSeparatorComponent?: ComponentType;
};

/**
 * A component that groups data into buckets and presents each group in its own CollapsibleSection
 */
export class BucketView<T> extends Component<BucketViewProps<T>> {
  public render() {
    const { data, getGroupLabel, style } = this.props;
    const buckets = groupBy(getGroupLabel, data);

    return (
      <View style={style}>
        {this.getGroupLabels(buckets)
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

  private getGroupLabels(buckets: LabeledArrays<T>) {
    const { groupLabels, compareGroupLabels } = this.props;

    if (groupLabels) {
      return groupLabels;
    } else if (compareGroupLabels) {
      return Object.keys(buckets).sort(compareGroupLabels);
    } else {
      return Object.keys(buckets);
    }
  }

  private bucketContents(array: Array<T>) {
    const { renderItem, ItemSeparatorComponent, compareData } = this.props;
    const orderedArray = compareData ? array.sort(compareData) : array;

    const elements = orderedArray.map(renderItem);

    if (ItemSeparatorComponent) {
      return interleave(elements, () => <ItemSeparatorComponent />)
    } else {
      return elements;
    }
  }
}
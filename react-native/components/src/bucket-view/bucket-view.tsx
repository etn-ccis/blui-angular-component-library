import React, { Component, ComponentType } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { groupBy, interleave } from '../helpers/utils';
import { CollapsibleSection } from '../collapsible-section';

export interface BucketViewProps<T> {
  /** Data to be rendered to components */
  data: Array<T>;

  /** Function to render each element from data */
  renderItem: (element: T) => JSX.Element;

  /**
   * Function determine label for element.
   * All elements that map to a label will be shown in the same collapsible section
   */
  getLabel: (datum: T) => string;

  /** Style for outer container */
  style?: StyleProp<ViewStyle>;

  /** Optional separator to be rendered between items */
  ItemSeparatorComponent?: ComponentType;
};

export class BucketView<T> extends Component<BucketViewProps<T>> {
  public render() {
    const { data, renderItem, getLabel, style } = this.props;
    const buckets = groupBy(getLabel, data);

    return (
      <View style={style}>
        {Object.keys(buckets).map(label => (
          <CollapsibleSection title={label} testID={`collapsible-section[${label}]`} key={label}>
            {this.bucketContents(buckets[label])}
          </CollapsibleSection>
        ))}
      </View>
    );
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
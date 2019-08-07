import React from 'react';
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native';
import { Header } from '../index';
import { HeaderProps } from '../header/header';

export interface SearchScreenProps<T> {
  /** Predicate function used to filter or include an item based on the query */
  filterPredicate: (item: T, query: string) => boolean;

  /** Props for the Header component */
  headerProps: HeaderProps;

  /** Props for the FlatList component */
  flatListProps: FlatListProps<T>;
}

interface SearchScreenState {
  query: string;
}

/**
 * SearchScreen component
 *
 * Uses a Header with a search bar to filter the items in the accompanying FlatList.
 */
export class SearchScreen<T> extends React.Component<SearchScreenProps<T>, SearchScreenState> {
  constructor(props: SearchScreenProps<T>) {
    super(props);

    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.header()}
        {this.infoList()}
      </View>
    )
  }

  private header() {
    const { headerProps } = this.props;
    return (
      <Header
        {...headerProps}
        searchable={{
          ...headerProps.searchable,
          onChangeText: text => this.onChangeText(text)
        }}
      />
    )
  }

  private infoList() {
    const { flatListProps } = this.props;

    return (
      <FlatList
        {...flatListProps}
        style={[flatListProps.style, styles.infoList]}
        data={this.filteredData()}
      />
    );
  }

  private filteredData() {
    const { flatListProps, filterPredicate } = this.props;
    const { query } = this.state;

    if (flatListProps.data) {
      return flatListProps.data.filter(value =>
        filterPredicate(value, query)
      );
    } else {
      return [];
    }
  }

  private onChangeText(text: string) {
    const { headerProps } = this.props;

    this.setState({ query: text });
    if (headerProps.searchable && headerProps.searchable.onChangeText) {
      headerProps.searchable.onChangeText(text);
    }
  }
}

const styles = StyleSheet.create({
  infoList: {
    flex: 1
  }
});

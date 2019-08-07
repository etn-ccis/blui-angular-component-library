import React, { createRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header, InfoListItem } from '../index';
import { blue, white } from '@pxblue/colors';
import { InfoListItemProps } from '../info-list-item/info-list-item';

export interface SearchScreenProps {
  data: Array<InfoListItemProps>
}

interface SearchScreenState {
  query: string;
}

export class SearchScreen extends React.Component<SearchScreenProps, SearchScreenState> {
  private headerRef = createRef<Header>();

  constructor(props: SearchScreenProps) {
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
    return (
      <Header
        ref={this.headerRef}
        expandable={true}
        title={'Info List'}
        navigation={{icon: 'menu', onPress: () => {}}}
        actionItems={[
          {icon: 'more-vert', onPress: () => {}}
        ]}
        backgroundColor={blue[500]}
        fontColor={white[500]}
        searchable={{
          placeholder: 'Search',
          autoFocus: true,
          onChangeText: text => this.setState({ query: text })
        }}
      />
    )
  }

  private infoList() {
    const { data } = this.props;
    const { query } = this.state;

    return (
      <FlatList
        data={data}
        renderItem={item => <InfoListItem {...item.item}/>}
        style={styles.infoList}
      />
    );
  }
}

const styles = StyleSheet.create({
  infoList: {
    flex: 1,
    backgroundColor: 'lightblue'
  }
});

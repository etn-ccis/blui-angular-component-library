# SearchScreen

The search screen component combines a Header with a FlatList to provide a screen layout that lets you use the Header's search bar to filter the items in the FlatList. The data for the FlatList can be of any type, and the `filterPredicate` prop is used to control how the component filters data based on the query.

## Example
```
import { SearchScreen } from '@pxblue/react-native-components';
...
<SearchScreen
  filterPredicate={(value, query) => value.title.toLowerCase().startsWith(query.toLowerCase())}
  headerProps={{
    expandable: true,
    title: 'Info List',
    navigation: {icon: 'menu', onPress: () => {}},
    actionItems: [{icon: 'more-vert', onPress: () => {}}],
    backgroundColor: blue[500],
    fontColor: white[500],
    searchable: {
      placeholder: 'Search',
      autoFocus: true
    }
  }}
  flatListProps={{
    data: data,
    renderItem: item => <InfoListItem {...item.item}/>,
    ItemSeparatorComponent: Separator
  }}
/>
```

## Props

| Name            | Type                                          | Required | Default     | Examples                                                                                                         |
|-----------------|-----------------------------------------------|----------|-------------|------------------------------------------------------------------------------------------------------------------|
| filterPredicate | string                                        | yes      |             | (value, query) => value.title.startsWith(query)                                                                  |
| headerProps     | HeaderProps                                   | yes      |             | {expandable: true, title: 'Info List', searchable: {placeholder: 'Search', autoFocus: true}}                     |
| flatListProps   | FlatListProps                                 | yes      |             | {data: [{title: 'A New Hope', subtitle: 'Episode 4'}, {title: 'The Empire Strikes Back', subtitle: 'Episode 5'}] |

> NOTE: find `HeaderProps` [here](./header.md) and `FlatListProps` [here](https://facebook.github.io/react-native/docs/flatlist#props)

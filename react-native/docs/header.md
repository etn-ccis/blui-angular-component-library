# Header

The header component displays a title at the top of the screen, as well as an optional subtitle, navigation item, and action items. The component can also be tapped to expand or contract, and can show an optional background image while expanded.

## Example
```
import { Header } from '@pxblue/react-native-components';
...
<Header
      expandable={true}
      title={'Title'}
      subtitle={'Subtitle'}
      navigation={{icon: 'menu', onPress: () => {}}}
      actionItems={[
        {icon: 'search', onPress: () => {}},
        {icon: 'mail', onPress: () => {}},
        {icon: 'more-vert', onPress: () => {}}
      ]}
      backgroundColor={'blue'}
      fontColor={'white'}
      backgroundImage={require('../assets/background.jpg')}
      searchable: {
        placeholder: 'Search',
        autoFocus: true
       }
/>
```

## Props

| Name            | Type                                    | Required | Default   | Examples                                        |
|-----------------|-----------------------------------------|----------|-----------|-------------------------------------------------|
| title           | string                                  | yes      |           |                                                 |
| subtitle        | string                                  | no       |           |                                                 |
| navigation      | { icon: string, onPress: () => void }   | no       |           | { icon: 'menu', onPress: openMenu() }           |
| actionItems     | { icon: string, onPress: () => void }[] | no       |           | [{ icon: 'more-vert', onPress: openOptions() }] |
| expandable      | boolean                                 | no       | true      |                                                 |
| backgroundColor | string                                  | no       | '#007bc1' | 'green', '#6e29e8'                              |
| fontColor       | string                                  | no       | '#eef0f0' | 'green', '#6e29e8'                              |
| backgroundImage | ImageSourcePropType                     | no       |           | require('../assets/background.jpg')             |
| searchable      | SearchableConfig                        | no       |           | { placeholder: 'Search', autoFocus: true }      |

### `SearchableConfig`

| Name           | Type                                          | Required | Default     | Examples |
|----------------|-----------------------------------------------|----------|-------------|----------|
| icon           | string                                        | no       | 'search'    |          |
| placeholder    | string                                        | no       | 'Search'    |          |
| autoFocus      | boolean                                       | no       | true        |          |
| onChangeText   | (text: string) => void                        | no       |             |          |
| autoCapitalize | 'none' | 'sentences' | 'words' | 'characters' | no       | 'sentences' |          |
| autoCorrect    | boolean                                       | no       | true        |          |

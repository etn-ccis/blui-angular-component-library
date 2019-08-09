# InfoListItem

Component to be used in list views. It positions a title, as well as optional subtitles, icons, and tab on side.

Note: If provided, the IconClass must be a React.ComponentClass or React.FunctionComponent with props of `{ size: number, color: string }`. This library exposes a `wrapIcon` higher-order function that can convert components from `react-native-vector-icons` or from `@pxblue/icons-svg` to this format.

## Example
```
import Leaf from '@pxblue/icons-svg/leaf.svg';

const WrappedLeaf = wrapIcon({ IconClass: Leaf });

...

<InfoListItem
  title={text('title', 'Test')}
  IconClass={<WrappedLeaf />}
  subtitle={text('subtitle', 'the subtitle can be text or a list of elements')}
  color={color('tabColor', '#4455cc')}
/>
```

## Props

| Name      | Type                                                       | Required | Default | Examples                      |
|-----------|------------------------------------------------------------|----------|---------|-------------------------------|
| value     | string &vert; number                                       | yes      |         | 123, 'on'                     |
| IconClass | React.ComponentType&lt;{ size: number, color: string }&gt; | no       |         | &lt;MyIcon /&gt;              |
| units     | string                                                     | no       |         | 'hz', '$'                     |
| prefix    | boolean                                                    | no       | false   | true, false                   |
| fontSize  | number                                                     | no       | 20      | 12, 30                        |
| color     | string                                                     | no       | 'black' | 'black', '#000000'            |
| theme     | DeepPartial<Theme>                                         | no       |         | { colors: { text: 'green' } } |

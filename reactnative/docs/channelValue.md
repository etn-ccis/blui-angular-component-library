# Channel Value
The ChannelValue component is used to display...a channel value (and units). This component abstracts the styles used to display the channel and units as well as an optional inline icon. These are used as part of the [Hero](./hero.md) component, but can also be used inline (e.g., in a list)

<img width="300" alt="Channel Value component" src="./images/channelValue.png">

> Note: If provided, the IconClass must be a React.ComponentClass or React.FunctionComponent with props of `{ size: number, color: string }`. This library exposes a `wrapIcon` higher-order function that can convert components from `react-native-vector-icons` or from `@pxblue/icons-svg` to this format. See [IconWrapper](./iconWrapper.md).

### Usage
```
import { ChannelValue, wrapIcon } from '@pxblue/react-native-components';
import _Battery from '@pxblue/icons-svg/battery.svg';
const Battery = wrapIcon({ IconClass: _Battery });
...
<ChannelValue
    value={100}
    units={'%'}
    IconClass={Battery}
/>
```

### API
| Prop Name | Description                             | Type                                                               | Required | Default             | Examples                      |
|-----------|-----------------------------------------|--------------------------------------------------------------------|----------|---------------------|-------------------------------|
| value     | The value shown below the icon          | `string` &vert; `number`                                           | yes      |                     | 123, 'on'                     |
| IconClass | A component to render for the icon      | `React.Component<{ size: number, color: string }>`                 | no       |                     | `<WrappedLeaf/>`              |
| units     | The units for the supplied value        | `string`                                                           | no       |                     | 'hz', '$'                     |
| prefix    | If true, shows units before the value   | `boolean`                                                          | no       | false               | true, false                   |
| fontSize  | The size of the font for the value      | `extraSmall` &vert; `'small'` &vert; `'medium'` &vert; `'large'` &vert; `'extraLarge'` &vert; `giant` | no       | 'medium'            | 12, 30                        |
| color     | The color used for the text elements    | `string`                                                           | no       | `theme.colors.text` | 'black', '#000000'            |
| theme     | Theme partial for default styling       | `DeepPartial<Theme>`                                               | no       |                     | { colors: { text: 'green' } } |

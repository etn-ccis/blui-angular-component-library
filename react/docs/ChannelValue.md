# Channel Value
The ChannelValue component is used to display...a channel value (and units). This component abstracts the styles used to display the channel and units as well as an optional inline icon. These are used as part of the [Hero](./Hero.md) component, but can also be used inline (e.g., in a list).

<img width="100%" alt="Channel Value in Hero" src="./images/heroes.png">
<img width="100%" alt="Channel Value in a list item" src="./images/channelValue.png">

## Usage
```
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
...
<ChannelValue value={100} units={'%'} icon={<Icon/>} />
```


### API
| Prop Name   | Description                                    | Type                     | Required | Default   | Examples           |
|-------------|------------------------------------------------|--------------------------|----------|-----------|--------------------|
| value       | The the value (bold text) to display           | `string` &vert; `Number` | yes      |           | '125'              |
| units       | The text to display for the units (light text) | `string`                 | no       |           | 'Hz'               |
| icon        | The inline icon to display                     | `React.Component`        | no       |           | 'Hz'               |
| prefix      | Show units before the value                    | `boolean`                | no       | false     |                    |
| fontSize    | The size of the font                           | `string` &vert; `Number` | no       | 'inherit' | '12rem'            |
| color       | The color of the font                          | `string`                 | no       | 'inherit' | 'rgba(0,0,0,0.25)' |
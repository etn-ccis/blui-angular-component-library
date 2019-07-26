# ChannelValue

The ChannelValue component is used to display...a channel value (and units). This component abstracts the styles used to display the channel and units as well as an optional inline icon. These are used as part of the [Hero](./Hero.md) component, but can also be used inline (e.g., in a list)

<img alt="Sample Channel Value" src="./images/leaf-count.png">

## Example
```
import { ChannelValue } from '@pxblue/react-native-components';
...
<ChannelValue value={100} units={'%'} icon={<Icon />} />
```

## Props

| Name     | Type            | Required | Default | Examples           |
|----------|-----------------|----------|---------|--------------------|
| value    | string | number | yes      |         | 123, 'on'          |
| icon     | React.ReactNode | no       |         | <MyIcon />         |
| units    | string          | no       |         | 'hz', '$'          |
| prefix   | boolean         | no       | false   | true, false        |
| fontSize | number          | no       | 20      | 12, 30             |
| color    | string          | no       | 'black' | 'black', '#000000' |

# Hero

The Hero component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, PX Blue icon, or Progress Icon. It will also accept Text/Emoji values.

The value section of the Hero utilizes a [ChannelValue](./channel-value.md) component. To display a single simple value, the information can be passed as props (```value```, ```units```, ```valueIcon```). For more complex values (such as a duration that displays hours and minutes), you can pass in ```<ChannelValue/>``` components as children and they will be displayed inline.

## Example
```
import { Hero } from '@pxblue/react-native-components';
import Battery from '@pxblue/icons-svg/battery.svg';
...
<Hero 
    label={'Charge'}
    icon={<Battery height={36} width={36} color={'green'}/>}
    icon value={100}
    units={'%'}
/>
```

## Props

| Name      | Type                 | Required | Default | Examples            |
|-----------|----------------------|----------|---------|---------------------|
| label     | string               | yes      |         | 'Battery', 'Health' |
| icon      | React.ReactNode      | yes      |         |                     |
| value     | number &#124; string | no       |         | 100, 'off'          |
| valueIcon | React.ReactNode      | no       |         |                     |
| units     | string               | no       |         | '%', 'hz', '°C'     |
| onPress   | () => void           | no       |         |                     |

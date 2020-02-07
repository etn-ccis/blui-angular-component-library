# Hero
The PX Blue Hero components are used to call attention to particular values that are of the most importance to the user. These are typically displayed in a banner.

<img width="100%" alt="Hero Banner" src="./images/heroes.png">


## Hero
The Hero component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, PX Blue icon, or Progress Icon. It will also accept Text/Emoji values.

The value section of the Hero utilizes a [ChannelValue](./ChannelValue.md) component. To display a single simple value, the information can be passed as props (```value```, ```units```, ```valueIcon```). For more complex values (such as a duration that displays hours and minutes), you can pass in ```<ChannelValue>``` components as children and they will be displayed inline.

### Usage
```typescript
import { Hero } from '@pxblue/react-components';

// Simple usage passing props
<Hero
    icon={<Icon/>}
    label={'Label'}
    value={99}
    units={'%'}
/>
// Complex example with multiple values as children
<Hero
    icon={<Icon/>}
    label={'Label'}
>
    <ChannelValue value={1} units={'h'} />
    <ChannelValue value={26} units={'m'} />
</Hero>
```

### Hero API
| Prop Name           | Description                             | Type                                                               | Required | Default                | Examples                       |
|---------------------|-----------------------------------------|--------------------------------------------------------------------|----------|------------------------|--------------------------------|
| icon                | The primary icon                        | `React.Component` &vert; `string`                                  | yes      |                        | `<Icon/>`                      |
| label               | The text shown below the `ChannelValue` | `string`                                                           | yes      |                        | 'Status'                       |
| iconSize            | The size of the primary icon (10-72)    | `number`                                                           | no       | 36                     | 24                             |
| iconBackgroundColor | The color used behind the primary icon  | `string`                                                           | no       | 'transparent'          | 'red'                          |
| fontSize            | The text size for the value line        | 'normal' &vert; 'small'                                            | no       | 'normal'               |                                |
| value               | The value for the channel               | `string` &vert; `number`                                           | no       |                        | 240, 'Off'                     |
| units               | Text to show after the value            | `string`                                                           | no       |                        | 'Hz', '$'                      |
| valueIcon           | The inline icon with the value          | `React.Component`                                                  | no       |                        | `<Icon/>`                      |


## HeroBanner
The HeroBanner component is a simple wrapper component that is used to contain ```<Hero/>```s. It creates the flex container and sets up the spacing rules to display them. It accepts up to four ```<Hero/>``` components as its children.

### HeroBanner Usage
```typescript
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import Hero from '@pxblue/react-components/core/Hero';
...
<HeroBanner divider>
    <Hero/>
    <Hero/>
    <Hero/>
    <Hero/>
</HeroBanner>
```

### HeroBanner API
| Prop Name | Description                             | Type      | Required | Default | Examples |
|-----------|-----------------------------------------|-----------|----------|---------|----------|
| divider   | Whether to show the line separator      | `boolean` | no       | false   |          |
| limit     | Max number of children to display       | `number`  | no       | 4       |          |

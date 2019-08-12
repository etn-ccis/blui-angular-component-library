# Drawer

The `Drawer` component is for making a drawer navigation menu. It renders one or two child components with an optional footer, as well as a header containing a title, subtitle, and optional content.

## Example
```
import { Drawer } from '@pxblue/react-native-components';
...
<Drawer title={'App User'} subtitle={'appuser@example.com'}>
  <Drawer.Page>
    <Drawer.Section title={'Section 1'}>
      <Drawer.Item active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>
      <Drawer.Item active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Water Pumps'} IconClass={WaterIcon}/>
      <Drawer.Item active={activeItem === 'third'} onPress={() => this.setActive('third')} label={'Devices'} IconClass={DeviceIcon}/>
    </Drawer.Section>
    <Drawer.Section title={'Section 2'} divider={false}>
      <Drawer.Item active={activeItem === 'fourth'} onPress={() => this.setActive('fourth')} label={'PX White'} IconClass={PxwhiteIcon}/>
      <Drawer.Item active={activeItem === 'fifth'} onPress={() => this.setActive('fifth')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
    </Drawer.Section>
  </Drawer.Page>
</Drawer>
```

## Props

| Name            | Type                                                                                 | Required | Default | Examples                                  |
|-----------------|--------------------------------------------------------------------------------------|----------|---------|-------------------------------------------|
| title           | string                                                                               | yes      |         |                                           |
| subtitle        | string                                                                               | no       |         |                                           |
| headerContent   | React.ReactNode                                                                      | no       |         | <Text>Hello</Text>, <Image source={...}/> |
| footer          | React.ReactNode                                                                      | no       |         | <Text>Copyright 2019</Text>               |
| backgroundColor | string                                                                               | no       |         | 'blue', 'green'                           |
| fontColor       | string                                                                               | no       |         | 'black', 'white'                          |
| children        | React.ReactElement &vert; [React.ReactElement] &vert; [React.ReactElement, React.ReactElement] | yes      |         |                                           |
| theme           | DeepPartial<Theme>                                                                   | no       |         | { colors: { font: 'green' } }             |

## Drawer.Item

The `Drawer.Item` component is the base list item to use with the `Drawer` component.

## Example

```<Drawer.Item active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>```

### Props

| Name      | Type                                           | Required | Default | Examples                                  |
|-----------|------------------------------------------------|----------|---------|-------------------------------------------|
| active    | boolean                                        | yes      | false   |                                           |
| onPress   | () => void                                     | yes      |         |                                           |
| label     | string                                         | yes      |         | <Text>Hello</Text>, <Image source={...}/> |
| IconClass | ComponentType<{ size: number, color: string }> | yes      |         | <Text>Copyright 2019</Text>               |
| fontColor | string                                         | no       |         | 'blue', 'green'                           |
| theme     | DeepPartial<Theme>                             | no       |         | { colors: { font: 'green' } }             |

## Drawer.Section

The `Drawer.Section` component is a wrapper for multiple `Drawer.Item` components. It renders with an optional title and bottom divider.

### Props

| Name     | Type               | Required | Default | Examples                      |
|----------|--------------------|----------|---------|-------------------------------|
| title    | string             | no       |         |                               |
| children | React.ReactNode    | yes      |         |                               |
| divider  | boolean            | no       | true    |                               |
| theme    | DeepPartial<Theme> | no       |         | { colors: { font: 'green' } } |

## Example

```
<Drawer.Section title={'Section Title'} divider={false}>
    <Drawer.Item active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'PX White'} IconClass={PxwhiteIcon}/>
    <Drawer.Item active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
</Drawer.Section>
```

## Drawer.Page

The `Drawer.Page` component is a very simple wrapper meant to hold some content, like `Drawer.Section` components. It takes no props.

## Example

```
<Drawer.Page>
    <Drawer.Section title={'Section 1'}>
        <Drawer.Item active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>
        <Drawer.Item active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Water Pumps'} IconClass={WaterIcon}/>
        <Drawer.Item active={activeItem === 'third'} onPress={() => this.setActive('third')} label={'Devices'} IconClass={DeviceIcon}/>
    </Drawer.Section>
    <Drawer.Section title={'Section 2'} divider={false}>
        <Drawer.Item active={activeItem === 'fourth'} onPress={() => this.setActive('fourth')} label={'PX White'} IconClass={PxwhiteIcon}/>
        <Drawer.Item active={activeItem === 'fifth'} onPress={() => this.setActive('fifth')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
    </Drawer.Section>
</Drawer.Page>
```

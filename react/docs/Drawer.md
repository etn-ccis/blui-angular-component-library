# Drawer
The Drawer component is wrapper around the Material UI Drawer that adds specific PX Blue functionality and styling. It is used to organize content (typically navigation links) in a collapsible side panel. The PX Blue Drawer includes helper components for `DrawerHeader`, `DrawerSubheader`, `DrawerBody`, and `DrawerFooter` to help organize the content.

## Drawer
The Drawer component is the parent container, which manages the overall state of the drawer and renders the child components.

### Drawer Usage
```typescript
import { Drawer, DrawerHeader, DrawerSubheader, DrawerBody, DrawerFooter } from '@pxblue/react-components';
...
<Drawer open={true}>
    <DrawerHeader />
    <DrawerSubheader />
    <DrawerBody />
    <DrawerFooter />
</Drawer>
```

### Drawer API
| Prop Name           | Description                                      | Type        | Required | Default  |          
|---------------------|--------------------------------------------------|-------------|----------|----------|
| open                | Controls the open/closed state of the drawer     | `boolean`   | yes      |          |
| width               | Sets the width of the drawer (in px) when open   | `number `   | no       |          |


## DrawerHeader
The `DrawerHeader` contains the content at the top of the `Drawer`. It can render multiple lines of text in the PX Blue style, or your own custom content. 
    
### DrawerHeader API
| Prop Name         | Description                                    | Type              | Required | Default                      |
|-------------------|------------------------------------------------|-------------------|----------|------------------------------|
| backgroundColor   | The color used for the background              | `string`          | no       | `theme.palette.primary[500]` |
| backgroundImage   | An image to display in the header              | `string`          | no       |                              |
| backgroundOpacity | The opacity of the background image            | `number`          | no       | `0.3`                             |
| content           | Custom content for header                      | `React.Component` | no       |                              |
| fontColor         | The color of the text elements                 | `string`          | no       | `Colors.white[50]`           |
| icon              | A component to render for the icon             | `React.Component` | no       |                              |
| onIconClick       | A function to execute when the icon is clicked | `function`        | no       | `() => {}`                   |
| subtitle          | The text to show on the second line            | `string`          | no       |                              |
| title             | The text to show on the first line             | `string`          | no       |                              |

## DrawerSubheader
The `DrawerSubheader` is an optional section that renders below the header and above the body of the `Drawer`. It can be used to support custom content, such as filtering options or to display additional information.

### DrawerSubheader Usage
```typescript
import DrawerSubheader from '@pxblue/react-components/core/Drawer';
...
<DrawerSubheader>
    <div>Custom Subheader Content</div>
</DrawerSubheader>
```

## DrawerBody
The `DrawerBody` is a wrapper for the main content of the Drawer. The typical use case is to display `DrawerNavGroup` elements, but custom elements (e.g., for spacing) are accepted as well.

### DrawerBody Usage
```typescript
import DrawerBody from '@pxblue/react-components/core/Drawer';
...
<DrawerBody>
    <DrawerNavGroup title={'Nav Items'} items={...} />
</DrawerBody>
```

### DrawerBody API
| Prop Name               | Description                                    | Type          | Required | Default |
|-------------------------|------------------------------------------------|---------------|----------|---------|
| activeBackgroundColor   | Background color for the 'active' item         | `string`      | no       |         |
| activeFontColor         | Font color for the 'active' item               | `string`      | no       |         |
| activeIconColor         | Icon color for the 'active' item               | `string`      | no       |         |
| backgroundColor         | The color used for the background              | `string`      | no       |         |
| fontColor               | The color used for the text                    | `string`      | no       |         |
| iconColor               | The color used for icons                       | `string`      | no       |         |
| titleColor              | The color used for `DrawerNavGroup` title text | `string`      | no       |         |


## DrawerNavGroup 
A `DrawerNavGroup` will render inside of the `DrawerBody` and is used to organize links. Each group consists of a group title and a series of navigation items. Most style props are inherited from the `DrawerBody` but can be overridden at the NavGroup level if desired.

### DrawerNavGroup API
| Prop Name             | Description                             | Type              | Required | Default |
|-----------------------|-----------------------------------------|-------------------|----------|---------|
| activeBackgroundColor | Background color for the 'active' item  | `string`          | no       |         |
| activeFontColor       | Font color for the 'active' item        | `string`          | no       |         |
| activeIconColor       | Icon color for the 'active' item        | `string`          | no       |         | 
| backgroundColor       | The color used for the background       | `string`          | no       |         |   
| content               | Custom element, substitute for title    | `React.Component` | no       |         |    
| divider               | Whether to show a line between items    | `boolean`         | no       | true    |    
| fontColor             | The color used for the text             | `string`          | no       |         |   
| iconColor             | The color used for the icon             | `string`          | no       |         |   
| items                 | List of navigation items to render      | `NavItem[]`       | no       |         |  
| title                 | Text to display in the group header     | `string`          | no       |         |  


#### Item Object
The `items` prop of the `DrawerNavGroup` takes a list of items with the following structure (most of these properties are inherited from `<InfoListItem/>`):

| Attribute       | Description                             | Type               | Required | Default                      |
|-----------------|-----------------------------------------|--------------------|----------|------------------------------|
| active          | Is the item the current active item     | `boolean`          | no       | false                        |  
| chevron         | Show chevron icon to the right          | `boolean`          | no       | false                        |  
| divider         | Show a divider line below the item      | `boolean`          | no       | true                         |  
| icon            | A component to render for the icon      | `React.Component`  | no       |                              |      
| onClick         | A function to execute when clicked      | `function`         | no       |                              |    
| statusColor     | Status stripe and icon color            | `string`           | no       |                              |    
| subtitle        | The text to show on the second line     | `string`           | no       |                              |    
| title           | The text to show on the first line      | `string`           | no       |                              |    


## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the `Drawer`. It can be used to add any custom content.


### Drawer Footer API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| backgroundColor | The color used for the background       | `string`      | no       |         |   

### Usage
```typescript
import DrawerFooter from '@pxblue/react-components/core/Drawer';
...
<DrawerFooter>
    <div>Custom Footer goes here</div>
</DrawerFooter>
```

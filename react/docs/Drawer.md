# Drawer Component
The PX Blue Drawer component is used to organize navigation links within an application.  
It is fully customizable and consists of `DrawerHeader`, `DrawerSubheader`, `DrawerBody`, and `DrawerFooter` child nodes.


## Drawer
The Drawer component is the parent container; it manages the state of the drawer and renders the component.

### Usage
```
import { Drawer, DrawerHeader, DrawerSubheader, DrawerBody, DrawerFooter } from '@pxblue/react-components/core/Drawer';

return  <Drawer open={true}>
            <DrawerHeader />
            <DrawerSubheader />
            <DrawerBody />
            <DrawerFooter />
        </Drawer>
    />
```

### Drawer API
| Prop Name           | Description                                      | Type        | Required | Default  |          
|---------------------|--------------------------------------------------|-------------|----------|----------|
| open                | Manually set the drawer state                    | `boolean`   | no       |          |
| width               | Manually set the drawer width when open          | `number `   | no       |          |


## Drawer Header
The `DrawerHeader` is the top-most part of the `Drawer`.
It can be used to toggle the `Drawer` open or closed and it supports multi-line text inputs or children nodes to render instead.    
    
### Drawer Header API
| Prop Name       | Description                             | Type          | Required | Default            |
|-----------------|-----------------------------------------|---------------|----------|--------------------|
| backgroundColor | Background color                        | `string`      | no       | `Colors.blue[500]` |
| backgroundImage | Gradient or Image background            | `string`      | no       |                    |
| content         | Custom content for header               | `JSX Element` | no       |                    |
| fontColor       | Text color                              | `string`      | no       | `Colors.white[50]` |
| icon            | Used to toggle drawer open or closed    | `JSX Element` | no       |                    | 
| onIconClick     | Function to run when icon is clicked    | `function`    | no       | `() => {}`         |
| subtitle        | Secondary text                          | `string`      | no       |                    |
| title           |  Main text                              | `string`      | no       |                    |   

## Drawer Subheader
The `DrawerSubheader` is an optional section that renders below the header and above the body of the `Drawer`.
It can be used to support custom content, such as filtering options or to display additional information.
The subheader only accepts children nodes to render as input.

### Usage
```
import DrawerSubheader from '@pxblue/react-components/core/Drawer';

return  <DrawerSubheader>
            <div>Custom Subheader Content</div>
        </DrawerSubheader>
```

## Drawer Body
The `DrawerBody` accepts style properties and custom child nodes to render.
child nodes accepted are, but not limited to, `DrawerNavGroup` objects or elements intended to add spacing between groups.
The style properties that are accepted here will apply to the entire `DrawerBody`, but can be overriden within each `DrawerNavGroup`.

### Usage
```
import DrawerBody from '@pxblue/react-components/core/Drawer';

return  <DrawerBody>
            <DrawerNavGroup title={'Nav Items'} items={...} />
        </DrawerBody>
```

### Drawer Body API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------| 
| backgroundColor | Background color                        | `string`      | no       |         |  
| fontColor       | Text color                              | `string`      | no       |         |   
| iconColor       | Icon color                              | `string`      | no       |         |    
| titleColor      | Navigation group title color            | `string`      | no       |         |  
| selectedColor   | Selected nav item color                 | `string`      | no       |         |   



## Drawer NavGroup 
A `DrawerNavGroup` will render inside of the `DrawerBody` and is used to organize links.  
Each group consists of a group title and a series of navigation items.

### Drawer NavGroup API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| backgroundColor | Background color                        | `string`      | no       |         |   
| content         | Custom element, substitute for title    | `JSX Element` | no       |         |    
| fontColor       | Text color                              | `string`      | no       |         |   
| iconColor       | Icon color                              | `string`      | no       |         |   
| items           | List of navigation items to render      | `Object[]`    | no       |         |  
| title           | Title of the group                      | `string`      | no       |         |  
| titleColor      | Navigation group title color            | `string`      | no       |         |  
| selectedColor   | Selected nav item color                 | `string`      | no       |         |   


## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the `Drawer`.
It can be used to add any custom content.


### Drawer Footer API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| backgroundColor | Background color                        | `string`      | no       |         |   

### Usage
```
import DrawerFooter from '@pxblue/react-components/core/Drawer';

return  <DrawerFooter>
            <div>Custom Footer goes here</div>
        </DrawerFooter>
```

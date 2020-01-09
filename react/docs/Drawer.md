# Drawer Component
The PX Blue Drawer component is used to organize navigation links within an application.  
It is fully customizable and consists of `header`, `subheader`, `body`, and `footer` child nodes.


## Drawer
The Drawer component is the parent container; it manages the state of the drawer and renders the component.

### Usage
```
import Drawer from '@pxblue/react-components/core/Drawer';

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
It is used to toggle the `Drawer` open or closed, and has an API intended to make it fully customizable.
The `DrawerHeader's` text content supports multi-line text inputs or can accept children nodes to render instead.    
    
### Drawer Header API
| Prop Name       | Description                             | Type          | Required | Default            |
|-----------------|-----------------------------------------|---------------|----------|--------------------|
| title           |  Main text                              | `string`      | no      |                    |   
| subtitle        | Secondary text                          | `string`      | no       |                    |
| fontColor       | Text color                              | `string`      | no       | `Colors.white[50]` |
| backgroundColor | Background color                        | `string`      | no       | `Colors.blue[500]` |
| backgroundImage | Gradient or Image background            | `string`      | no       |                    |
| icon            | Used to toggle drawer open or closed    | `JSX Element` | no       |                    | 
| content         | Custom content for header               | `JSX Element` | no       |                    |
| onClick         | Function to run when icon is clicked    | `function`    | no       | `() => {}`         |

## Drawer Subheader
The `DrawerSubheader` is an optional section that renders below the header and above the body of the side navigation menu.
It can be used to support additional content, such as filtering options or to display more information.
The subheader only accepts children nodes to render as input.


## Drawer Body
The `DrawerBody` accepts an array of `NavGroup` objects and renders them below the subheader.
Each link inside a `NavGroup` consists of an optional icon and a link title.


### Drawer Body API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| navGroups       | Links to be rendered, grouped together  | `NavGroup[]`  | yes      |         | 
| fontColor       | Text color                              | `string`      | no       |         |   
| backgroundColor | Background color                        | `string`      | no       |         |   
| selectedColor   | Selected nav item color                 | `string`      | no       |         |   
| iconColor       | Icon color                              | `string`      | no       |         |   
| titleColor      | Navigation group title color            | `string`      | no       |         |   


## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the `Drawer's` side navigation menu.
It can be used to add optional images, bottom navigation options, or any custom content.


### Drawer Footer API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| content         | Custom content to be rendered           | `JSX Element` | yes      |         |   
| navGroups       | Bottom links to be rendered             | `NavGroup[]`  | no       |         | 
| backgroundColor | Background color                        | `string`      | no       |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |

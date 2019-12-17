# Drawer Component
The PX Blue Drawer component is used to organize links within an application.  
It is fully customizable and consists of `header`, `subheader`, `body`, `footer` and `appbar` subsections.


## Drawer
The Drawer component is the parent container; it manages the state of the drawer and renders the component.

### Usage
```
import Drawer from '@pxblue/react-components/core/Drawer';

return <Drawer
        header={header}
        appbar={appbar}
        subheader={subheader}
        body={body}
        footer={footer}
    />
```

### Drawer API
| Prop Name           | Description                             | Type       | Required |              
|---------------------|-----------------------------------------|------------|----------|
| header              | Top part of side nav                    | `Object`   | yes      |
| appbar              | Top bar that appears on mobile          | `Object`   | yes      |
| subheader           | Section between header and body         | `Object`   | no       |
| body                | Links                                   | `Object`   | yes      |
| footer              | Bottom part of side nav                 | `Object`   | no       |


## Drawer Header
The `DrawerHeader` is the top part of the `Drawer`'s side navigation menu.
It is used to toggle the `Drawer` open or closed, and has an API intended to make it fully customizable.
The `DrawerHeader` supports text inputs or can accept children nodes to render instead.


### Drawer Header API
| Prop Name       | Description                             | Type          | Required | Default            |
|-----------------|-----------------------------------------|---------------|----------|--------------------|
| title           |  Main text                              | `string`      | yes      |                    |   
| subtitle        | Secondary text                          | `string`      | no       |                    |
| info            | Third line of header text               | `string`      | no       |                    |
| textColor       | Text color                              | `string`      | no       | `Colors.white[50]` |
| backgroundColor | Background color                        | `string`      | no       | `Colors.blue[500]` |
| backgroundImage | Gradient or Image background            | `string`      | no       |                    |
| icon            | Used to toggle drawer open or closed    | `JSX Element` | no       | `<MenuIcon />`     | 
| content         | Custom content for header               | `JSX Element` | no       |                    |
| overrides       | Style prop overrides                    | `Object`      | no       |                    |

## Drawer Appbar
Similar to the `DrawerHeader`, the `DrawerAppbar` only appears on small viewports and is used to open the side nav on mobile devices.
It inherits most of its propTypes from `DrawerHeader`. 

### Drawer Appbar API
| Prop Name       | Description                          | Type          | Required | Default                        |
|-----------------|--------------------------------------|---------------|----------|--------------------------------|
| title           |  Main text                           | `string`      | yes      | `DrawerHeader.title`           |   
| subtitle        | Secondary text                       | `string`      | no       |                                |
| textColor       | Text color                           | `string`      | no       | `DrawerHeader.textColor`       |
| backgroundColor | Background color                     | `string`      | no       | `DrawerHeader.backgroundColor` |
| backgroundImage | Gradient or Image background         | `string`      | no       |                                |
| icon            | Icon displayed                       | `JSX Element` | no       | `DrawerHeader.icon`            |
| content         | Custom content for header            | `JSX Element` | no       |                                |
| overrides       | Style prop overrides                 | `Object`      | no       |                                |


## Drawer Subheader
The `DrawerSubheader` is an optional section that renders below the header and above the body of the side navigation menu.
It can be used to support additional content, such as filtering options or to display more information.
The subheader only accepts children nodes to render as input.


### Drawer Header API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| content         | Custom content to be rendered           | `JSX Element` | yes      |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |


## Drawer Body
The `DrawerBody` accepts an array of `NavGroup` objects and renders them below the subheader.
Each link inside a `NavGroup` consists of an optional icon and a link title.


### Drawer Body API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| navGroups       | Links to be rendered, grouped together  | `NavGroup[]`  | yes      |         | 
| backgroundColor | Background color                        | `string`      | no       |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |

## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the `Drawer`'s side navigation menu.
It can be used to add optional images, bottom navigation options, or any custom content.


### Drawer Footer API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| content         | Custom content to be rendered           | `JSX Element` | yes      |         |   
| navGroups       | Bottom links to be rendered             | `NavGroup[]`  | no       |         | 
| backgroundColor | Background color                        | `string`      | no       |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |

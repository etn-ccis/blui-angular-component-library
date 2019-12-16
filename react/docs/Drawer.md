# Drawer Component
The PX Blue Drawer component is used to organize links within an application.  
It is fully customizable and consists of `header`, `subheader`, `body`, `footer` and `appbar` subsections.


## Drawer
The Drawer component is the parent container; it manages the state of the drawer and renders the component.

### Usage
```
import Drawer from '@pxblue/react-components/core/Drawer';

return <Drawer
        appbar={appbar}
        header={header}
        subheader={subheader}
        body={body}
        footer={footer}
    />
```

### Drawer API
| Prop Name           | Description                             | Type       | Required |              
|---------------------|-----------------------------------------|------------|----------|
| header              | Top part of side nav                    | `Object`   | yes      |
| subheader           | Section between header and body         | `Object`   | no       |
| body                | Links                                   | `Object`   | yes      |
| footer              | Bottom part of side nav                 | `Object`   | no       |
| appbar              | Top bar that appears on mobile          | `Object`   | yes      |


## Drawer Header
The `DrawerHeader` is the top-most part of the Drawer's side navigation menu.
It is used to toggle the Drawer open or closed, and has an API intended to make it fully customizable.
The `DrawerHeader` supports text inputs or can accept children nodes to render instead.


### Drawer Header API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| title           |  Main text                              | `string`      | yes      |         |   
| subtitle        | Secondary text                          | `string`      | no       |         |
| info            | Third line of header text               | `string`      | no       |         |
| textColor       | Text color                              | `string`      | no       |         |
| backgroundColor | Background color                        | `string`      | no       |         |
| backgroundImage | Gradient or Image background            | `string`      | no       |         |
| icon            | Used to toggle drawer open or closed    | `JSX Element` | no       |         |
| content         | Custom content for header               | `JSX Element` | no       |         |
| overrides       | Style prop overrides                    | `Object`      | no       |         |


## Drawer Subheader
The `DrawerSubheader` is an optional subsection that renders below the header and above the body of the side navigation menu.
It can be used to support additional content, such as filtering options or more information.


### Drawer Header API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| content         | Custom content to be rendered           | `JSX Element` | yes      |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |


## Drawer Body
The `DrawerBody` accepts an array of `NavGroup` objects and renders them below the subheader.
Each link inside a NavGroup consists of an optional icon and a link title.


### Drawer Body API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| navGroups       | Links to be rendered, grouped together  | `NavGroup[]`  | yes      |         | 
| backgroundColor | Background color                        | `string`      | no       |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |

## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the Drawer's side navigation menu.
It can be used to add optional images, version information, or any custom content.


### Drawer Footer API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| content         | Custom content to be rendered           | `JSX Element` | yes      |         |   
| navGroups       | Bottom links to be rendered             | `NavGroup[]`  | no       |         | 
| backgroundColor | Background color                        | `string`      | no       |         |   
| overrides       | Style prop overrides                    | `Object`      | no       |         |

# Drawer
The Drawer component is a wrapper around the Material UI Drawer that adds specific PX Blue functionality and styling. It is used to organize content (typically navigation links) in a collapsible side panel. The PX Blue Drawer includes helper components for `DrawerHeader`, `DrawerSubheader`, `DrawerBody`, `DrawerNavGroup`, `DrawerFooter`, and `DrawerLayout` to help organize the content.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Nested Drawer" src="./images/drawer.png">
</div>

## DrawerHeader
The `DrawerHeader` contains the content at the top of the `Drawer`. By default, it renders multiple lines of text in the PX Blue style.
    
### DrawerHeader API

Parent element (`pxb-drawer-header`) attributes:

<div style="overflow: auto;">

| Attributes        | Description                                    | Type              | Required | Default                      |
|-------------------|------------------------------------------------|-------------------|----------|------------------------------|
| subtitle          | The text to show on the second line            | `string`          | no       |                              |
| title             | The text to show on the first line             | `string`          | no       |                              |

</div>

Child element with attributes:

<div style="overflow: auto;">

| Attributes        | Description                                    | Required | Default                      |
|-------------------|------------------------------------------------|----------|------------------------------|
| icon              | A component to render an icon                  | no       |                              |
| titleContent      | Custom content for header title area           | no       |                              |

</div>
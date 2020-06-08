# Drawer

 The `<pxb-drawer>` is used to organize content (typically navigation links) within a `<pxb-drawer-layout>`. The `<pxb-drawer>` includes helper components for `<pxb-drawer-header>`, `<pxb-drawer-subheader>`, `<pxb-drawer-body>`, `<pxb-drawer-nav-group>`, `<pxb-drawer-footer>`, and `<pxb-drawer-layout>` to help organize the content.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Nested Drawer" src="./images/drawer.png">
</div>

### Drawer Usage

```html
<pxb-drawer [variant]="variant" [variantDrawerHandler]="variantDrawerHandler" (drawerOpenChange)="onDrawerOpenChange()">
    <pxb-drawer-header>Header content goes here</pxb-drawer-header>
    <pxb-drawer-subheader>Subheader content goes here</pxb-drawer-subheader>
    <pxb-drawer-body>Body content goes here</pxb-drawer-body>
    <pxb-drawer-footer>Footer content goes here</pxb-drawer-footer>
</pxb-drawer>
```

### Drawer API

Parent element (`<pxb-drawer>`) attributes:

<div style="overflow: auto;">

| @Input               | Description                               | Type                                                    | Required | Default   |
| -------------------- | ----------------------------------------- | ------------------------------------------------------- | -------- | ----------|
| variant              | Sets the drawer variant                   | `'permanent'` \| `'persistent'` \| `'temporary'`        | no       |           |
| variantDrawerHandler | Handles drawerOpen for persistent variant | `boolean`                                               | no       |           |

| @Output          | Description                              | Type           | Required | Default |
| ---------------- | ---------------------------------------- | -------------- | -------- | ------- |
| drawerOpenChange | Event triggered by toggling drawer       | 'EventEmitter' | no       |         |
</div>

The following child elements are projected into `<pxb-drawer>`:

<div style="overflow: auto;">

| Selector               | Description                             | Required | Default |
| ---------------------- | --------------------------------------- | -------- | ------- |
| [pxb-drawer-header]    | A component to render header content    | no       |         |
| [pxb-drawer-subheader] | A component to render subheader content | no       |         |
| [pxb-drawer-body]      | A component to render body content      | no       |         |
| [pxb-drawer-footer]    | A component to render footer content    | no       |         |

</div>

### Drawer Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                 | Description                                   |
|--------------------------------------|-----------------------------------------------|
| pxb-drawer                           | Styles applied to the root element            |

</div>

## Drawer Layout

The `<pxb-drawer-layout>` component is a wrapper around the [Angular Material Sidenav](https://material.angular.io/components/sidenav/overview) that adds specific PX Blue functionality and styling. The `<pxb-drawer-layout>` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with a PX Blue `<pxb-drawer>`. It accepts a drawer and content as child elements;

### Drawer Layout Usage

```html
<pxb-drawer-layout>
    <pxb-drawer drawer>Drawer goes here</pxb-drawer>
    <div content>Content goes here</div>
</pxb-drawer-layout>
```

### Drawer Layout API

Parent element (`<pxb-drawer-layout>`) attributes:

<div style="overflow: auto;">

| @Input     | Description                          | Type                                                    | Required | Default     |
| ---------- | ------------------------------------ | ------------------------------------------------------- | -------- | ----------- |
| drawerOpen | Whether the drawer is open or closed | `boolean`                                               | no       |             |
| variant    | Sets the drawer variant              | `'permanent'` \| `'persistent'` \| `'temporary'`        | no       |             |

| @Output       | Description                              | Type           | Required | Default |
| ------------- | ---------------------------------------- | -------------- | -------- | ------- |
| onDrawerClose | Event triggered by child toggling drawer | 'EventEmitter' | no       |         |
</div>

The following child elements are projected into `<pxb-drawer-layout>`:

<div style="overflow: auto;">

| Selector       | Description                          | Required | Default |
| -------------- | ------------------------------------ | -------- | ------- |
| [drawer]       | A component to render a drawer       | no       |         |
| [content]      | A component to render content        | no       |         |

</div>

### Drawer Layout Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                   |
|---------------------------------------------|-----------------------------------------------|
| pxb-drawer-layout                           | Styles applied to the root element            |
| pxb-side-nav-container                      | Styles applied to mat-sidenav-container       |
| px-blue-side-nav                            | Styles applied to mat-sidenav                 |
| pxb-drawer-permanent                        | Styles applied to permanent sidenav           |
| pxb-drawer-persistent                       | Styles applied to persistent sidenav          |
| pxb-drawer-temporary                        | Styles applied to temporary sidenav           |
| pxb-nav-content                             | Styles applied to mat-sidenav-content         |

</div>

## Drawer Body

The `<pxb-drawer-body>` is a wrapper for the main content of the Drawer. The typical use case is to display `<pxb-drawer-nav-group>` elements, but custom elements (e.g., for spacing) are accepted as well.

### Drawer Body Usage

```html
<pxb-drawer-body>
    drawer content goes here
</pxb-drawer-body>
```

### Drawer Body Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                   |
|---------------------------------------------|-----------------------------------------------|
| pxb-drawer-body                             | Styles applied to the root element            |

</div>

## Drawer Header

The `<pxb-drawer-header>` contains the content at the top of the `<pxb-drawer>`. By default, it renders multiple lines of text in the PX Blue style.

### Drawer Header Usage

```html
<pxb-drawer-header>
    Drawer Header goes here
</pxb-drawer-header>
```

### Drawer Header API

Parent element (`<pxb-drawer-header>`) attributes:

<div style="overflow: auto;">

| @Input   | Description                         | Type     | Required | Default |
| -------- | ----------------------------------- | -------- | -------- | ------- |
| subtitle | The text to show on the second line | `string` | no       |         |
| title    | The text to show on the first line  | `string` | no       |         |

</div>

The following child elements are projected into `<pxb-drawer-header>`:

<div style="overflow: auto;">

| Selector       | Description                          | Required | Default |
| -------------- | ------------------------------------ | -------- | ------- |
| [icon]         | A component to render an icon        | no       |         |
| [titleContent] | Custom content for header title area | no       |         |

</div>

### Drawer Header Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                   |
|---------------------------------------------|-----------------------------------------------|
| pxb-drawer-header                           | Styles applied to the root element            |
| pxb-drawer-header-background                | Styles applied to the header background       |
| pxb-drawer-header-icon-wrapper              | Styles applied to the header icon             |
| pxb-drawer-header-title-wrapper             | Styles applied to title/subtitle wrapper      |
| pxb-drawer-header-title                     | Styles applied to the title                   |
| pxb-drawer-header-subtitle                  | Styles applied to the subtitle                |
| pxb-drawer-header-title-content-wrapper     | Styles applied to custom titleContent         |

</div>

## Drawer Subheader

The `<pxb-drawer-subheader>` is an optional section that renders below the header and above the body of the `<pxb-drawer>`. It can be used to support custom content (passed as children), such as filtering options or to display additional information.

### Drawer Subheader Usage

```html
<pxb-drawer-subheader>
    <div subheaderContent>Custom Subheader Content goes here</div>
</pxb-drawer-subheader>
```

### Drawer Subheader API 

The following child element is projected into `<pxb-drawer-subheader>`:

<div style="overflow: auto;">

| Selector           | Description                  | Required | Default |
| ------------------ | ---------------------------- | -------- | ------- |
| [subheaderContent] | Custom content for subheader | no       |         |

</div>

### Drawer Subheader Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                       |
|---------------------------------------------|---------------------------------------------------|
| pxb-drawer-subheader                        | Styles applied to the root element                |
| pxb-drawer-subheader-content-wrapper        | Styles applied to custom subheaderContent         |
| pxb-drawer-subheader-open                   | Styles applied to subheader when drawer is open   |
| pxb-drawer-subheader-closed                 | Styles applied to subheader when drawer is closed |

</div>

## Drawer NavGroup
A `<pxb-drawer-nav-group>` is used inside of the `<pxb-drawer-body>` to organize links/content. Each group consists of an (optional) group title and a series of NavItems.

### Drawer NavGroup Usage

```html
<pxb-drawer-nav-group>
    <pxb-drawer-nav-item></pxb-drawer-nav-item>
</pxb-drawer-nav-group>
```

### Drawer NavGroup API 

Parent element (`<pxb-drawer-nav-group>`) attributes:

<div style="overflow: auto;">

| @input     | Description                             | Type      | Required | Default |
| ---------- | --------------------------------------- | --------- | -------- | ------- |
| title      | Component to render a group title       | `string`  | no       |         |

</div>

The following child element is projected into `<pxb-drawer-nav-group>`:

<div style="overflow: auto;">

| Selector              | Description                               | Required | Default |
| --------------------- | ----------------------------------------- | -------- | ------- |
| [pxb-drawer-nav-item] | Custom nav-item content for pxb-nav-group | no       |         |

</div>

### Drawer NavGroup Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                   |
|---------------------------------------------|-----------------------------------------------|
| pxb-drawer-nav-group                        | Styles applied to the root element            |

</div>

## Drawer Nav Item
The `<pxb-drawer-nav-item>` is a wrapper to the `<pxb-info-list-item>` that is meant to be used within a `<pxb-nav-group>`. It accepts `<pxb-drawer-nav-item>` as projected content to make nested nav items.

### Drawer NavItem API 

Parent element (`<pxb-drawer-nav-item>`) attributes:

<div style="overflow: auto;">

| @input                   | Description                                | Type                             | Required | Default |
| ------------------------ | ------------------------------------------ | -------------------------------- | -------- | ------- |
| activeItemBackgroundShape| Sets the active item background shape      | `'round'` \| `'square'`          | no       | 'round' |
| chevron                  | Sets whether to show chevron               | `boolean`                        | no       | false   |
| collapseIcon             | Icon used to collapse nested pxb-nav-items | `string`                         | no       |         |
| divider                  | Sets whether to show divider               | `boolean`                        | no       | true    |
| expandIcon               | Icon used to expand nested pxb-nav-items   | `string`                         | no       |         |
| hidePadding              | Sets whether to show/hide padding          | `boolean`                        | no       |         |
| itemID                   | ID used to track 'selected' item           | `string`                         | no       |         |
| ripple                   | Sets whether to show/hide ripple           | `boolean`                        | no       | true    |
| selected                 | Sets whether an item is selected           | `boolean`                        | no       |         |
| showNestedNavItems       | Sets whether to show/hide nested items     | `boolean`                        | no       | false   |
| statusColor              | Status stripe color                        | `string`                         | no       |         |
| subtitle                 | Text to display as a subtitle              | `string`                         | no       |         |
| title                    | Text to display as a title                 | `string`                         | no       |         |
| useCustomIconAnimation   | Sets whether to show/hide icon animation   | `boolean`                        | no       | true    |

</div>

The following child element is projected into `<pxb-drawer-nav-item>`:

<div style="overflow: auto;">

| Selector              | Description                                  | Required | Default |
| --------------------- | -------------------------------------------- | -------- | ------- |
| [icon]                | Custom content to render an icon             | no       |         |
| [pxb-drawer-nav-item] | Custom content to render nested drawer items | no       |         |

</div>

### Drawer NavItem Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                   |
|---------------------------------------------|-----------------------------------------------|
| pxb-drawer-nav-item                         | Styles applied to the root element            |
| pxb-info-list-item-active:after             | Styles applied to 'selected' nav item         | 
| round:after                                 | Styles applied to round 'selected' nav item   |
| square:after                                | Styles applied to square 'selected' nav item  |
| pxb-drawer-nav-item-icon-wrapper            | Styles applied to icon wrapper                |
| pxb-drawer-nav-item-expand-icon             | Styles applied to expand icon                 |
| pxb-drawer-nav-item-collapse-icon           | Styles applied to collapse icon               |
| pxb-drawer-nav-item-default-expand-icon     | Styles applied to the default collapse icon   |
| pxb-drawer-nested-nav-item                  | Styles applied to nested nav items            |

</div>

## Drawer Footer

The `<pxb-drawer-footer>` is an optional section that renders at the bottom of the `<pxb-drawer>`. It can be used to add any custom content (as children).

### Usage

```html
<pxb-drawer-footer>
    <div footerContent>Custom Footer goes here</div>
</pxb-drawer-footer>
```

### Drawer Footer API 

The following child element is projected into `<pxb-drawer-footer>`:

<div style="overflow: auto;">

| Selector        | Description               | Required | Default |
| --------------- | ------------------------- | -------- | ------- |
| [footerContent] | Custom content for footer | no       |         |

</div>

### Drawer Footer Classes

Each PX Blue component has classes which can be used to override component styles: 

<div style="overflow: auto;">

| Name                                        | Description                                    |
|---------------------------------------------|------------------------------------------------|
| pxb-drawer-footer                           | Styles applied to the root element             |
| pxb-drawer-footer-content-wrapper           | Styles applied to footer content               | 
| pxb-drawer-footer-open                      | Styles applied to footer when drawer is open   |
| pxb-drawer-footer-closed                    | Styles applied to footer when drawer is closed |

</div>

# Drawer

The `<blui-drawer>` is used to organize content (typically navigation links) within a `<blui-drawer-layout>`. The `<blui-drawer>` includes helper components for `<blui-drawer-header>`, `<blui-drawer-subheader>`, `<blui-drawer-body>`, `<blui-drawer-nav-group>`, `<blui-drawer-footer>`, and `<blui-drawer-layout>` to help organize the content.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Drawer Anatomy" src="./images/drawerAnatomy.png">
</div>

### Drawer Usage

```html
// your-component.html
<blui-drawer [open]="state.open">
    <blui-drawer-header>Header content goes here</blui-drawer-header>
    <blui-drawer-subheader>Subheader content goes here</blui-drawer-subheader>
    <blui-drawer-body>Body content goes here</blui-drawer-body>
    <blui-drawer-footer>Footer content goes here</blui-drawer-footer>
</blui-drawer>
```

### Drawer API

Parent element (`<blui-drawer>`) attributes:

<div style="overflow: auto;">

| @Input                        | Description                                                                           | Type      | Required | Default |
| ----------------------------- | ------------------------------------------------------------------------------------- | --------- | -------- | ------- |
| condensed                     | Skinny view for `rail` variant                                                        | `boolean` | no       | false   |
| disableRailTooltip            | Hide tooltips on hover for the `rail` variant                                         | `boolean` | no       | false   |
| disableActiveItemParentStyles | If true, NavItems will not have a bold title when a child NavItem is selected         | `boolean` | no       | false   |
| openOnHover                   | Automatically open the drawer on hover when closed (persistent variant only)          | `boolean` | no       | true    |
| open                          | State for the drawer                                                                  | `boolean` | yes      |         |
| openOnHoverDelay              | Delay in milliseconds before a hover event opens the drawer (persistent variant only) | `number`  | no       | 500     |
| sideBorder                    | Toggle a side border instead of shadow                                                | `boolean` | no       | false   |

</div>

> \*\* The `condensed` attribute won't have any effect on the `<blui-drawer>` unless the `rail` variant is set on the `<blui-drawer-layout>` component. Each item in a navigation rail will be sized 72 x 72px. When using a `condensed` rail, each item will be sized 56 x 56px.

The following child elements are projected into `<blui-drawer>`:

<div style="overflow: auto;">

| Selector                | Description                             | Required | Default |
| ----------------------- | --------------------------------------- | -------- | ------- |
| [blui-drawer-header]    | A component to render header content    | no       |         |
| [blui-drawer-subheader] | A component to render subheader content | no       |         |
| [blui-drawer-body]      | A component to render body content      | no       |         |
| [blui-drawer-footer]    | A component to render footer content    | no       |         |

</div>

### Drawer Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                       | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| blui-drawer                | Styles applied to the tag                                 |
| blui-drawer-content        | Styles applied to the root element                        |
| blui-drawer-hover-area     | Hoverable area that temporarily opens drawer              |
| blui-drawer-collapse       | Styles applied when the drawer is collapsed               |
| blui-drawer-temp-variant   | Styles applied to `temporary` drawer variant              |
| blui-drawer-condensed-rail | Styles applied to `rail` variant with `condensed` setting |

</div>

## Drawer Layout

The `<blui-drawer-layout>` component is a wrapper around the [Angular Material Sidenav](https://material.angular.io/components/sidenav/overview) that adds specific Brightlayer UI functionality and styling. The `<blui-drawer-layout>` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with a Brightlayer UI `<blui-drawer>`. It accepts a drawer and content as child elements;

### Drawer Layout Usage

```html
<blui-drawer-layout>
    <blui-drawer blui-drawer>Drawer goes here</blui-drawer>
    <div blui-content>Content goes here</div>
</blui-drawer-layout>
```

### Drawer Layout API

Parent element (`<blui-drawer-layout>`) attributes:

<div style="overflow: auto;">

| @Input  | Description             | Type                                                             | Required | Default |
| ------- | ----------------------- |------------------------------------------------------------------|----------|---------|
| variant | Sets the drawer variant | 'permanent' &#124; 'persistent' &#124; 'temporary' &#124; 'rail' | yes      |         |
| width   | Drawer pixel width      | `number`                                                         | no       | 350     | 

</div>

<div style="overflow: auto;">

| @Output       | Description                                            | Type                 |
| ------------- | ------------------------------------------------------ | -------------------- |
| backdropClick | Event triggered on `'temporary` variant backdrop click | `EventEmitter<void>` |

</div>

The following child elements are projected into `<blui-drawer-layout>`:

<div style="overflow: auto;">

| Selector       | Description                    | Required | Default |
| -------------- | ------------------------------ | -------- | ------- |
| [blui-drawer]  | A component to render a drawer | no       |         |
| [blui-content] | A component to render content  | no       |         |

</div>

### Drawer Layout Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                           | Description                             |
| ------------------------------ | --------------------------------------- |
| blui-drawer-layout             | Styles applied to the tag               |
| blui-drawer-layout-content     | Styles applied to the root element      |
| blui-drawer-layout-sidenav     | Styles applied to mat-sidenav-container |
| blui-drawer-layout-nav-content | Styles applied to mat-sidenav-content   |

</div>

## Drawer Header

The `<blui-drawer-header>` contains the content found at the top of the `<blui-drawer>`.

### Drawer Header Usage

```html
<blui-drawer-header title="Brightlayer UI Drawer">
    <button blui-icon mat-icon-button>
        <mat-icon>menu</mat-icon>
    </button>
</blui-drawer-header>
```

### Drawer Header API

Parent element (`<blui-drawer-header>`) attributes:

<div style="overflow: auto;">

| @Input   | Description                         | Type                                                        | Required   | Default    |
| -------- | ----------------------------------- |-------------------------------------------------------------|------------|------------|
| color    | Mat toolbar color variant           | 'primary' &#124; 'accent' &#124; 'warn'  &#124; `undefined` | no         | 'primary'  |
| divider  | Show a divider below footer         | `boolean`                                                   | no         | false      |
| subtitle | The text to show on the second line | `string`                                                    | no         |            |
| title    | The text to show on the first line  | `string`                                                    | no         |            |

</div>

The following child elements are projected into `<blui-drawer-header>`:

<div style="overflow: auto;">

| Selector             | Description                          | Required | Default |
| -------------------- | ------------------------------------ | -------- | ------- |
| [blui-icon]          | A component to render an icon        | no       |         |
| [blui-title-content] | Custom content for header title area | no       |         |

</div>

### Drawer Header Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                                     | Description                               |
| ---------------------------------------- | ----------------------------------------- |
| blui-drawer-header                       | Styles applied to the tag                 |
| blui-drawer-header-content               | Styles applied to the root element        |
| blui-drawer-header-no-icon               | Styles applied when no header icon exists |
| blui-drawer-header-background            | Styles applied to the header background   |
| blui-drawer-header-icon-wrapper          | Styles applied to the header icon         |
| blui-drawer-header-title-wrapper         | Styles applied to title/subtitle wrapper  |
| blui-drawer-header-title                 | Styles applied to the title               |
| blui-drawer-header-subtitle              | Styles applied to the subtitle            |
| blui-drawer-header-title-content-wrapper | Styles applied to custom titleContent     |

</div>

## Drawer Subheader

The `<blui-drawer-subheader>` is an optional section that renders below the header and above the body of the `<blui-drawer>`. It can be used to support custom content (passed as children), such as filtering options or to display additional information.

### Drawer Subheader API

Parent element (`<blui-drawer-subheader>`) attributes:

<div style="overflow: auto;">

| @Input                | Description                        | Type      | Required | Default |
| --------------------- | ---------------------------------- | --------- | -------- | ------- |
| divider               | Show a divider below subheader     | `boolean` | no       | true    |
| hideContentOnCollapse | Hide subheader content when closed | `boolean` | no       | true    |

</div>

### Drawer Subheader Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                          | Description                        |
| ----------------------------- | ---------------------------------- |
| blui-drawer-subheader         | Styles applied to the tag          |
| blui-drawer-subheader-content | Styles applied to the root element |

</div>

## Drawer Body

The `<blui-drawer-body>` is a wrapper for the main content of the Drawer. The typical use case is to display `<blui-drawer-nav-group>` elements, but custom elements (e.g., for spacing) are accepted as well.

### Drawer Body Usage

```html
<blui-drawer-body>
    <blui-drawer-navgroup></blui-drawer-navgroup>
</blui-drawer-body>
```

### Drawer Body Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| blui-drawer-body         | Styles applied to the tag                    |
| blui-drawer-body-content | Styles applied to the root element           |
| blui-drawer-body-closed  | Styles applied to body when drawer is closed |

</div>

## Drawer Nav Group

A `<blui-drawer-nav-group>` is used inside of the `<blui-drawer-body>` to organize links and content. Each group consists of an (optional) group title and a series of NavItems.

### Drawer NavGroup Usage

```html
<blui-drawer-nav-group title="Group Name">
    <blui-drawer-nav-item></blui-drawer-nav-item>
</blui-drawer-nav-group>
```

### Drawer NavGroup API

Parent element (`<blui-drawer-nav-group>`) attributes:

<div style="overflow: auto;">

| @input  | Description                          | Type      | Required | Default |
| ------- | ------------------------------------ | --------- | -------- | ------- |
| divider | Divider that appears under the title | `boolean` | no       | false   |
| title   | Component to render a group title    | `string`  | no       |         |

</div>

The following child element is projected into `<blui-drawer-nav-group>`:

<div style="overflow: auto;">

| Selector               | Description                    | Required | Default |
| ---------------------- | ------------------------------ | -------- | ------- |
| [blui-drawer-nav-item] | Navigation elements to render  | no       |         |
| [blui-title-content]   | Custom title element to render | no       |         |

</div>

### Drawer NavGroup Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                          | Description                           |
| ----------------------------- | ------------------------------------- |
| blui-drawer-nav-group         | Styles applied to the tag             |
| blui-drawer-nav-group-content | Styles applied to the root element    |
| blui-drawer-nav-group-title   | Styles applied to the nav group title |

</div>

## Drawer Nav Item

The `<blui-drawer-nav-item>` is a wrapper to the `<blui-info-list-item>` that is meant to be used within a `<blui-nav-group>`.

### Drawer NavItem API

Parent element (`<blui-drawer-nav-item>`) attributes:

<div style="overflow: auto;">

| @input                    | Description                           | Type                      | Required | Default   | 
| ------------------------- | ------------------------------------- |---------------------------|----------|-----------|
| activeItemBackgroundShape | Sets the active item background shape | 'round'  &#124; 'square'  | no       | 'square'  |
| chevron                   | Sets whether to show chevron          | `boolean`                 | no       | false     |
| divider                   | Sets whether to show divider          | `boolean`                 | no       | false     |
| expanded                  | Sets whether to show nested nav items | `boolean`                 | no       | false     |
| hidePadding               | Sets whether to show/hide padding     | `boolean`                 | no       |           | 
| hidden                    | Sets whether to hide the nav item     | `boolean`                 | no       | false     |
| ripple                    | Sets whether to show/hide ripple      | `boolean`                 | no       | true      |
| selected                  | Sets whether an item is selected      | `boolean`                 | no       |           |
| statusColor               | Status stripe color                   | `string`                  | no       |           |
| subtitle                  | Text to display as a subtitle         | `string`                  | no       |           |
| title                     | Text to display as a title            | `string`                  | no       |           |

</div>

<div style="overflow: auto;">

| @Output | Description                        | Type                 |
| ------- | ---------------------------------- | -------------------- |
| select  | Event triggered on nav item select | `EventEmitter<void>` |

</div>

The following child element is projected into `<blui-drawer-nav-item>`:

<div style="overflow: auto;">

| Selector               | Description                                  | Required | Default |
| ---------------------- | -------------------------------------------- | -------- | ------- |
| [blui-icon]            | Custom content to render an icon             | no       |         |
| [blui-expand-icon]     | Custom expansion icon to render              | no       |         |
| [blui-collapse-icon]   | Custom collapsed icon to render              | no       |         |
| [blui-drawer-nav-item] | Custom content to render nested drawer items | no       |         |

</div>

### Drawer NavItem Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                                  | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| blui-drawer-nav-item                  | Styles applied to the tag                    |
| blui-drawer-nav-item-content          | Styles applied to the root element           |
| blui-drawer-nav-item-active           | Style applied when the nav item is selected  |
| blui-drawer-nav-item-active-highlight | Styles applied to 'selected' nav item        |
| blui-drawer-nav-item-active-round     | Styles applied to round 'selected' nav item  |
| blui-drawer-nav-item-active-square    | Styles applied to square 'selected' nav item |
| blui-drawer-nav-item-compact          | Class used to toggle narrow nav items        |
| blui-drawer-nav-item-expand-icon      | Styles applied to expand icon                |
| blui-drawer-nav-item-depth-1          | Styles applied to top-level nav items        |
| blui-drawer-nav-item-depth-2          | Styles applied to nested nav items           |
| blui-drawer-nav-item-depth-3          | Styles applied to nav items 3 levels deep    |
| blui-drawer-nav-item-rail             | Styles applied to navigation rail items      |
| blui-drawer-nav-item-rail-text        | Styles applied to navigation rail text       |
| blui-drawer-nav-item-rail-container   | Wrapper around the navigation rail content   |
| blui-drawer-nested-nav-item           | Styles applied to nested nav items           |

</div>

## Drawer Footer

The `<blui-drawer-footer>` is an optional section that renders at the bottom of the `<blui-drawer>`. It can be used to add any custom content (as children).

### Usage

```html
<blui-drawer-footer>
    <div>Custom Footer goes here</div>
</blui-drawer-footer>
```

### Drawer Footer API

Parent element (`<blui-drawer-footer>`) attributes:

<div style="overflow: auto;">

| @Input                | Description                     | Type      | Required | Default |
| --------------------- | ------------------------------- | --------- | -------- | ------- |
| divider               | Show a divider above footer     | `boolean` | no       | true    |
| hideContentOnCollapse | Hide footer content when closed | `boolean` | no       | true    |

</div>

### Drawer Footer Classes

Each Brightlayer UI component has classes which can be used to override component styles:

<div style="overflow: auto;">

| Name                       | Description                        |
| -------------------------- | ---------------------------------- |
| blui-drawer-footer         | Styles applied to the tag          |
| blui-drawer-footer-content | Styles applied to the root element |

</div>

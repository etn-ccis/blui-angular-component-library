# Toolbar Menu

The `<blui-toolbar-menu>` component is used to display a dropdown menu with label, primarily inside of a `<mat-toolbar>`element. 

<div style="text-align:center">
<img width="100%" style="max-width:600px" alt="Toolbar Menu" src="./images/toolbarmenuAnatomy.png">
</div>

## Usage

```typescript
// app.module.ts
import { ToolbarMenuModule } from '@brightlayer-ui/angular-components';
...
imports: [
    ToolbarMenuModule
  ],
```

```html
// your-component.html
<blui-toolbar-menu label="label">
    <button mat-icon-button blui-icon>
        <mat-icon>menu</mat-icon>
    </button>
    <ng-container blui-toolbar-menu-items>
        <button mat-menu-item>Menu Item 1</button>
        <button mat-menu-item>Menu Item 2</button>
        <button mat-menu-item>Menu Item 3</button>
    </ng-container>
</blui-toolbar-menu>
```

## API

Parent element (`<blui-toolbar-menu>`) attributes:

<div style="overflow: auto;">

| @Input   | Description                   | Type       | Required | Default |            |     |           |
| -------- | ----------------------------- | ---------- | -------- | ------- | ---------- | --- | --------- |
| label    | The text to display for label | `string`   | yes      |         |            |     |           |

</div>

The following child elements are projected into `<blui-toolbar-menu>`:

| Selector                     | Description                              | Required | Default |
| ---------------------------- | ---------------------------------------- | -------- | ------- |
| [blui-icon]                  | Icon shown on the left                   | no       |         |
| [blui-toolbar-menu-items]    | Content to be shown within dropdown menu | yes      |         |

### Classes

Each Brightlayer UI component has classes which can be used to override component styles:

| Name                                         | Description                            |
| -------------------------------------------- | -------------------------------------- |
| blui-toolbar-menu                            | Styles applied to the tag              |
| blui-toolbar-menu-label                      | Styles applied to the label            |
| blui-toolbar-menu-toggle-icon                | Styles applied to the expand icon      |
| blui-toolbar-menu-menu-wrapper               | Styles applied to the menu items       |
| blui-toolbar-menu-trigger                    | Styles applied to the menu trigger     |

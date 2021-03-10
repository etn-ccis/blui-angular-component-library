# Dropdown Toolbar

The `<pxb-dropdown-toolbar>` component is used to display a toolbar with a dropdown.

<div style="text-align:center">
<img width="100%" style="max-width:600px" alt="Dropdown Toolbar" src="./images/dropdownToolbar.png">
</div>

## Usage

```typescript
// app.module.ts
import { DropdownToolbarModule } from '@pxblue/angular-components';
...
imports: [
    DropdownToolbarModule
  ],
```

```html
// your-component.html
<pxb-dropdown-toolbar [title]="title" [subtitle]="subtitle">
    <button mat-icon-button pxb-nav-icon>
        <mat-icon>menu</mat-icon>
    </button>
    <ng-container pxb-toolbar-menu>
        <button mat-menu-item>Menu Item 1</button>
        <button mat-menu-item>Menu Item 2</button>
        <button mat-menu-item>Menu Item 3</button>
    </ng-container>
    <div>
        <button mat-icon-button><mat-icon>home</mat-icon></button>
    </div>
</pxb-dropdown-toolbar>
```

## API

Parent element (`<pxb-dropdown-toolbar>`) attributes:

<div style="overflow: auto;">

| @Input   | Description                   | Type                                             | Required | Default   |
| -------- | ----------------------------- | ------------------------------------------------ | -------- | --------- |
| title    | The text to display for title | `string`                                         | no       |           |
| subtitle | The text to display subtitle  | `string`                                         | no       |           |
| color    | Mat toolbar color variant     | `'primary' | 'accent' | 'warn' | undefined`      | no       | `primary` |

</div>

The following child elements are projected into `<pxb-dropdown-toolbar>`:

| Selector         | Description                              | Required | Default |
| ---------------- | ---------------------------------------- | -------- | ------- |
| pxb-nav-icon     | Icon shown on the left                   | no       |         |
| pxb-toolbar-menu | Content to be shown within dropdown menu | no       |         |

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                        | Description                            |
| ------------------------------------------- | -------------------------------------- |
| pxb-dropdown-toolbar                        | Styles applied to the tag              |
| pxb-dropdown-toolbar-content                | Styles applied to the root element     |
| pxb-dropdown-toolbar-icon-wrapper           | Styles applied to the left icon        |
| pxb-dropdown-toolbar-text-content-container | Styles applied to the text content     |
| pxb-dropdown-toolbar-title                  | Styles applied to the title            |
| pxb-dropdown-toolbar-subtitle-container     | Styles applied to the subtitle wrapper |
| pxb-dropdown-toolbar-subtitle-icon          | Styles applied to the subtitle icon    |
| pxb-dropdown-toolbar-subtitle               | Styles applied to the subtitle         |
| pxb-dropdown-toolbar-menu-wrapper           | Styles applied to the menu             |

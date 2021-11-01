# Dropdown Toolbar

The `<blui-dropdown-toolbar>` component is used to display a toolbar with a dropdown.

<div style="text-align:center">
<img width="100%" style="max-width:600px" alt="Dropdown Toolbar" src="./images/dropdownToolbar.png">
</div>

## Usage

```typescript
// app.module.ts
import { DropdownToolbarModule } from '@brightlayer-ui/angular-components';
...
imports: [
    DropdownToolbarModule
  ],
```

```html
// your-component.html
<blui-dropdown-toolbar [title]="title" [subtitle]="subtitle">
    <button mat-icon-button blui-nav-icon>
        <mat-icon>menu</mat-icon>
    </button>
    <ng-container blui-toolbar-menu>
        <button mat-menu-item>Menu Item 1</button>
        <button mat-menu-item>Menu Item 2</button>
        <button mat-menu-item>Menu Item 3</button>
    </ng-container>
    <div>
        <button mat-icon-button><mat-icon>home</mat-icon></button>
    </div>
</blui-dropdown-toolbar>
```

## API

Parent element (`<blui-dropdown-toolbar>`) attributes:

<div style="overflow: auto;">

| @Input   | Description                   | Type       | Required | Default |            |     |           |
| -------- | ----------------------------- | ---------- | -------- | ------- | ---------- | --- | --------- |
| title    | The text to display for title | `string`   | no       |         |            |     |           |
| subtitle | The text to display subtitle  | `string`   | no       |         |            |     |           |
| color    | Mat toolbar color variant     | `'primary' | 'accent' | 'warn'  | undefined` | no  | `primary` |

</div>

The following child elements are projected into `<blui-dropdown-toolbar>`:

| Selector            | Description                              | Required | Default |
| ------------------- | ---------------------------------------- | -------- | ------- |
| [blui-nav-icon]     | Icon shown on the left                   | no       |         |
| [blui-toolbar-menu] | Content to be shown within dropdown menu | no       |         |

### Classes

Each Brightlayer UI component has classes which can be used to override component styles:

| Name                                         | Description                            |
| -------------------------------------------- | -------------------------------------- |
| blui-dropdown-toolbar                        | Styles applied to the tag              |
| blui-dropdown-toolbar-content                | Styles applied to the root element     |
| blui-dropdown-toolbar-icon-wrapper           | Styles applied to the left icon        |
| blui-dropdown-toolbar-text-content-container | Styles applied to the text content     |
| blui-dropdown-toolbar-title                  | Styles applied to the title            |
| blui-dropdown-toolbar-subtitle-container     | Styles applied to the subtitle wrapper |
| blui-dropdown-toolbar-subtitle-icon          | Styles applied to the subtitle icon    |
| blui-dropdown-toolbar-subtitle               | Styles applied to the subtitle         |
| blui-dropdown-toolbar-menu-wrapper           | Styles applied to the menu             |

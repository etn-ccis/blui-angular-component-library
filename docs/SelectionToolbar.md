# Selection Toolbar

The `<pxb-selection-toolbar>` component is used to display a toolbar with a selection list.

<div style="text-align:center">
<img width="100%" style="max-width:600px" alt="Selection Toolbar" src="./images/selectionToolbar.png">
</div>

## API

Parent element (`<pxb-selection-toolbar>`) attributes:

<div style="overflow: auto;">

| @Input   | Description                                    | Type                 | Required | Default |
| -------- | ---------------------------------------------- | -------------------- | -------- | ------- |
| title    | The text to display for title                  | `string`             | no       |         |
| subtitle | The text to display selection                  | `string`             | no       |         |

</div>

The following child elements are projected into `<pxb-selection-toolbar>`:

| Selector          | Description                                  | Required | Default |
| ----------------- | -------------------------------------------- | -------- | ------- |
| pxb-icon          | Icon shown on the left                       | no       |         |
| pxb-menu          | Content to be shown within dropdown menu     | no       |         |

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                        | Description                            |
| ------------------------------------------- | ---------------------------------------|
| pxb-selection-toolbar                       | Styles applied to the root element     |
| pxb-selection-toolbar-icon-wrapper          | Styles applied to the left icon        |
| pxb-selection-toolbar-title-container       | Styles applied to the title wrapper    |
| pxb-selection-toolbar-title                 | Styles applied to the title            |
| pxb-selection-toolbar-subtitle-container    | Styles applied to the subtitle wrapper |
| pxb-selection-toolbar-subtitle              | Styles applied to the subtitle         |
| pxb-selection-toolbar-menu                  | Styles applied to the menu             |

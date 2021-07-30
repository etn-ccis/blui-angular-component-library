# Info List Item

The `<pxb-info-list-item>` is intended to be used in List views. It positions a title as well as optional subtitle(s), icon, and status stripe.

<img width="100%" alt="Info List Items in a variety of styles" src="./images/infoListItem.png">

## Usage

```typescript
// app.module.ts
import { InfoListItemModule } from '@pxblue/angular-components';
...
imports: [
    InfoListItemModule
  ],
```

```html
// your-component.html
<pxb-info-list-item divider="full" [statusColor]="colors.green[500]">
    <div pxb-title>Info List Item</div>
    <mat-icon [style.color]="colors.green[500]" pxb-icon>eco</mat-icon>
</pxb-info-list-item>
```

## API

Parent element (`<pxb-info-list-item>`) attributes:

<div style="overflow: auto;">

| @input       | Description                                                      | Type                                | Required | Default |
| ------------ | ---------------------------------------------------------------- | ----------------------------------- | -------- | ------- |
| avatar       | Show a colored background for the icon                           | `boolean`                           | no       | false   |
| chevron      | Add a chevron icon on the right                                  | `boolean`                           | no       | false   |
| dense        | Smaller height row with less padding                             | `boolean`                           | no       | false   |
| divider      | Show a row separator below the row                               | `'full'` \| `'partial'`             | no       |         |
| disabled     | Disable the list item                                            | `boolean`                           | no       | false   |
| hidePadding  | Remove left padding if no icon is used                           | `boolean`                           | no       | false   |
| iconAlign    | Icon alignment when avatar is set to false                       | `'left'` \| `'center'` \| `'right'` | no       | 'left'  |
| statusColor  | Left border color                                                | `string`                            | no       |         |
| wrapInfo     | Whether to wrap info on overflow rather than using ellipsis      | `boolean`                           | no       | false   |
| wrapSubtitle | Whether to wrap subtitle on overflow rather than using ellipsis  | `boolean`                           | no       | false   |
| wrapTitle    | Whether to wrap title on overflow rather than using ellipsis     | `boolean`                           | no       | false   |

</div>

The following child elements are projected into `<pxb-info-list-item>`:

<div style="overflow: auto;">

| Selector            | Description                            | Required | Default |
| ------------------- | -------------------------------------- | -------- | ------- |
| [pxb-icon]          | A component to render for the icon     | no       |         |
| [pxb-info]          | Content to render a third line of text | no       |         |
| [pxb-left-content]  | Content to render on the left side     | no       |         |
| [pxb-right-content] | Content to render on the right side    | no       |         |
| [pxb-subtitle]      | Content to render for the subtitle     | no       |         |
| [pxb-title]         | Content to render for the title        | yes      |         |

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                     | Description                                  |
| ---------------------------------------- | -------------------------------------------- |
| pxb-info-list-item                       | Styles applied to the tag                    |
| pxb-info-list-item-content               | Styles applied to the root element           |
| pxb-info-list-item-icon-wrapper          | Styles applied to the icon container         |
| pxb-info-list-item-info-wrapper          | Styles applied to the info container         |
| pxb-info-list-item-left-content-wrapper  | Styles applied to the leftContent container  |
| pxb-info-list-item-title-wrapper         | Styles applied to the title container        |
| pxb-info-list-item-subtitle-wrapper      | Styles applied to the subtitle container     |
| pxb-info-list-item-right-content         | Styles applied to the rightContent           |
| pxb-info-list-item-right-content-wrapper | Styles applied to the rightContent container |
| pxb-info-list-item-divider               | Styles applied to the divider                |

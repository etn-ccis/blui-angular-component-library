# Info List Item

The `<blui-info-list-item>` is intended to be used in List views. It positions a title as well as optional subtitle(s), icon, and status stripe.

<img width="100%" alt="Info List Items in a variety of styles" src="./images/infoListItem.png">

## Usage

```typescript
// app.module.ts
import { InfoListItemModule } from '@brightlayer-ui/angular-components';
...
imports: [
    InfoListItemModule
  ],
```

```html
// your-component.html
<blui-info-list-item divider="full" [statusColor]="colors.green[500]">
    <div blui-title>Info List Item</div>
    <mat-icon [style.color]="colors.green[500]" blui-icon>eco</mat-icon>
</blui-info-list-item>
```

## API

Parent element (`<blui-info-list-item>`) attributes:

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

The following child elements are projected into `<blui-info-list-item>`:

<div style="overflow: auto;">

| Selector             | Description                            | Required | Default |
| -------------------- | -------------------------------------- | -------- | ------- |
| [blui-icon]          | A component to render for the icon     | no       |         |
| [blui-info]          | Content to render a third line of text | no       |         |
| [blui-left-content]  | Content to render on the left side     | no       |         |
| [blui-right-content] | Content to render on the right side    | no       |         |
| [blui-subtitle]      | Content to render for the subtitle     | no       |         |
| [blui-title]         | Content to render for the title        | yes      |         |

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                      | Description                                  |
| ----------------------------------------- | -------------------------------------------- |
| blui-info-list-item                       | Styles applied to the tag                    |
| blui-info-list-item-content               | Styles applied to the root element           |
| blui-info-list-item-icon-wrapper          | Styles applied to the icon container         |
| blui-info-list-item-info-wrapper          | Styles applied to the info container         |
| blui-info-list-item-left-content-wrapper  | Styles applied to the leftContent container  |
| blui-info-list-item-title-wrapper         | Styles applied to the title container        |
| blui-info-list-item-subtitle-wrapper      | Styles applied to the subtitle container     |
| blui-info-list-item-right-content         | Styles applied to the rightContent           |
| blui-info-list-item-right-content-wrapper | Styles applied to the rightContent container |
| blui-info-list-item-divider               | Styles applied to the divider                |

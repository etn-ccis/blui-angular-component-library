# List Item Tag
The <pxb-list-item-tag> is a text item with a colored background and rounded corners that is used to tag lists.

<img width="100%" alt="Info List Items in a variety of styles" src="./images/listItemTag.png">

## Usage

```typescript
// app.module.ts
import { ListItemTagModule } from '@pxblue/angular-components';
...
imports: [
    ListItemTagModule
  ],
```
```html
  // your-component.html
  <pxb-list-item-tag [label]="label" [style.backgroundColor]="black" [style.fontColor]="gold">
  </pxb-list-item-tag>
    
```

## API

Parent element (`pxb-list-item-tag`) attributes:

<div style="overflow: auto;">

| @Inputs           | Description                                      | Type                                               | Required | Default        |
|-------------------|--------------------------------------------------|----------------------------------------------------|----------|----------------|
| label             | The label text                                   | `string`                                           | yes      |                |

</div>
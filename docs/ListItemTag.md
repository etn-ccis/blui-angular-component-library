# List Item Tag
The `<pxb-list-item-tag>` is a text item with a colored background and rounded corners that is used to tag lists.

<img width="100%" alt="Info List Items in a variety of styles" src="./images/listItemTag.png">

## Usage

```typescript
// app.module.ts
import { ListItemTagModule } from '@pxblue/angular-components';
...
imports: [
    ListItemTagModule
  ],
...
```
```html
// your-component.html
<pxb-list-item-tag label="Sample Label" backgroundColor="black" fontColor="gold">
</pxb-list-item-tag>
```

## API

Parent element (`pxb-list-item-tag`) attributes:

<div style="overflow: auto;">

| @Inputs           | Description                                      | Type                                               | Required | Default        |
|-------------------|--------------------------------------------------|----------------------------------------------------|----------|----------------|
| backgroundColor   | Color of the label background                    | `string`                                           | no       |                | 
| fontColor         | Color of the label                               | `string`                                           | no       |                | 
| label             | The label text                                   | `string`                                           | yes      |                |

</div>

### Classes
Each PX Blue component has classes which can be used to override component styles: 

| Name                              | Description                                 |
|-----------------------------------|---------------------------------------------|
| pxb-list-item-tag                 | Styles applied to the root element          |
| pxb-list-item-tag-label           | Styles applied to the label @Input          |

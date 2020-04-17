# ListItemTag
The ListItemTag is a text item with a colored background and rounded corners that is used to tag lists.

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
```typescript
import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withCustomColors = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label" [backgroundColor]="backgroundColor" [fontColor]="fontColor"></pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'active'),
        backgroundcolor: text('backgroundColor', Colors.gold['500']),
        fontColor: text('fontColor', Colors.black['500']),
    },
});
```

## API

<div style="overflow: auto;">

| Attributes        | Description                                      | Type                                               | Required | Default        |
|-------------------|--------------------------------------------------|----------------------------------------------------|----------|----------------|
| label             | The label text                                   | `string`                                           | yes      |                |

</div>
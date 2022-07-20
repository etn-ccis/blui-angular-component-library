# Spacer

An invisible utility component that acts as a spacer element in various layouts. It works with flexbox sizing or fixed sizing.

<div style="width: 100%; text-align:center">
    <img width="40%" alt="Spacer used in Drawer Body" src="./images/spacer.png"><br/>
</div>

## Usage

```typescript
// app.module.ts
import { SpacerModule } from '@brightlayer-ui/angular-components';
...
imports: [
    SpacerModule
  ],
...
```

```html
// your-component.html // using flex layout
<blui-spacer></blui-spacer>

// using pixels
<blui-spacer width="50"></blui-spacer>
```

## API

Parent element (`<blui-spacer>`) attributes:

<div style="overflow: auto;">

| @Input | Description                             | Type     | Required | Default |
| ------ | --------------------------------------- | -------- | -------- | ------- |
| flex   | Flex grow/shrink value for flex layouts | `number` | no       | 1       |
| height | Height (in px) for static layouts       | `number` | no       |         |
| width  | Width (in px) for static layouts        | `number` | no       |         |

</div>

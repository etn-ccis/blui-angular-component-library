# ChannelValue

The ChannelValue component is used to display a channel value (and units). This component abstracts the styles used to display the channel and units as well as an optional inline icon. These are used as part of the [Hero](./Hero.md) component, but can also be used inline (e.g., in a list).

Icons are passed in as a child element of the ChannelValue component.

<div style="text-align:center; margin-bottom:20px">
<img width="100%" style="max-width: 600px" alt="Channel Value in Hero" src="./images/heroes.png">
<hr/>
<img width="100%" style="max-width: 600px" alt="Channel Value in a list item" src="./images/channelValue.png">
</div>

## Usage

```typescript
// app.module.ts
import { ChannelValueModule } from '@pxblue/angular-components';
...
imports: [
    ChannelValueModule
  ],
```

```typescript
// your-component.html
<pxb-channel-value class="content" value="65" units="%" [prefix]="true" fontSize="10px" >
  <mat-icon >trending_up</mat-icon>
</pxb-channel-value>
```

## API

<div style="overflow: auto;">

| Attributes | Description                                    | Type              | Required | Default   |
| ---------- | ---------------------------------------------- | ----------------- | -------- | --------- |
| color      | The color of the font                          | `string`          | no       | 'inherit' |
| fontSize   | The size of the font                           | `string`          | no       | 'inherit' |
| prefix     | Show units before the value                    | `boolean`         | no       | false     |
| units      | The text to display for the units (light text) | `string`          | no       |           |
| value      | The the value (bold text) to display           | `string | Number` | yes      |           |

</div>

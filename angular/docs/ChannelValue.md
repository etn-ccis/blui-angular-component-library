# ChannelValue Component
The ChannelValue component is used to display a channel value (and units). This component abstracts the styles used to display the channel and units as well as an optional inline icon. These are used as part of the [Hero](./Hero.md) component, but can also be used inline (e.g., in a list).

<img width="100%" alt="Channel Value in Hero" src="./images/heroes.png">
<img width="100%" alt="Channel Value in a list item" src="./images/channelValue.png">

## Usage
```
// app.module.ts
import { ChannelValueModule } from '@pxblue/angular-components/core/channel-value';
...
imports: [
    ChannelValueModule
  ],
```
```
// your-component.html
<pxb-channel-value class="content" value="65" units="%" [prefix]="true" fontSize="10px" >
  <mat-icon >trending_up</mat-icon>
</pxb-channel-value>
```

## Available properties
* ```value``` (Number, String)[**required**]: the value (bold text) to display.
* ```units``` (String): the text to display for the units (light text).
* ```prefix``` (Boolean): whether to show the units before the value. **Default**: false.
* ```fontSize``` (String): CSS font size value. **Default**: 'inherit'.
* ```color``` (String): a CSS color value for the text. **Default**: 'inherit'.

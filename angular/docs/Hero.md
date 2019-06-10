# Hero Components
The PX Blue Hero components are used to call attention to particular values that are of the most importance to the user. These are typically displayed in a banner.

<img width="100%" alt="Hero Banner" src="./images/heroes.png">

## HeroBanner
The HeroBanner component is a simple wrapper component that is used to contain ```<pxb-hero> </pxb-hero>```s. It creates the flex container and sets up the spacing rules to display them. It accepts up to four ```<pxb-hero> </pxb-hero>``` components as its children.

### Usage

```
//in app.module.ts
import { HeroModule } from '@pxblue/angular-components/core/hero';

...
imports: [
    HeroModule
],
```
```
 <pxb-hero-banner [divider]="true" >
 </pxb-hero-banner>
```

### Available properties
* ```divider``` (Boolean): whether or not to show the dividing line below the banner. **Default**: false.

## Hero
The Hero component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, PX Blue icon, or Progress Icon. It will also accept Text/Emoji values.

The value section of the Hero utilizes a [ChannelValue](./ChannelValue.md) component. To display a single simple value, the information can be passed as attributes (```value```, ```units```, ```valueIcon```). For more complex values (such as a duration that displays hours and minutes), you can pass in ```<pxb-channel-value>``` components as children and they will be displayed inline.

### Usage
```
//in app.module.ts
//Icons
import {MatIconModule} from '@angular/material/icon'; 

...
imports:[
      MatIconModule,
]
```
```
//in app.module.ts
import { HeroModule } from '@pxblue/angular-components/core/hero';

...
imports: [
    HeroModule
  ],
```
```
// Simple usage passing attributes
<pxb-hero 
    label="Healthy" 
    value="96"  
    units="/100" 
>
        <mat-icon svgIcon="px-icons:bearing" primary></mat-icon>
        <mat-icon  class="output" >trending_up</mat-icon>
  </pxb-hero>

// Complex example with multiple values as children
 <pxb-hero 
    label="Load" 
    fontSize="small" >
        <mat-icon svgIcon="px-icons:bearing" primary></mat-icon>
                <pxb-channel-value 
                value="1" units="h">
                </pxb-channel-value>
                <pxb-channel-value 
                value="26"
                units="m">
                </pxb-channel-value>
</pxb-hero>
```

### Available properties
* ```label``` (String)[**required**]: text to display below the value. 
* ```fontSize``` ("normal", "small"): the font size to use for the ```ChannelValue```. **Default**: "normal".
* ```value``` (Number, String): when displaying a single ```ChannelValue```, the value.
* ```units``` (String): when displaying a single ```ChannelValue```, the units.

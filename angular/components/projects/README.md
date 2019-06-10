# PX Blue UI Components for Angular
This is a library of re-usable Angular components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.

Currently, we have components available for:
* ChannelValue
* Hero
* HeroBanner

## Installation
To install the PX Blue angular components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/angular-components
```
> **NOTE**: This install command will not work until the component libraries are published to NPM. Until then you will need to follow the manual linking instructions.

## Using the components in your application
The custom components can be imported and used like you would use any other component.

```
//in app.module.ts
//Icons
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import {MatIconModule} from '@angular/material/icon'; 

...
imports:[
     NgProgressIconsModule,
      MatIconModule,
]
```
```
//in app.module.ts
//  Components
import { HeroModule } from '@pxblue/angular-components/core/hero';
import { ChannelValueModule } from '@pxblue/angular-components/core/channel-value';

...
imports: [
   HeroModule,
   ChannelValueModule
  ],
```
```
<pxb-hero-banner [divider]="true" >
      <pxb-hero [allowClick]="true" label="Healthy" value="96"  units="/100" >
        <mat-icon svgIcon="px-icons:bearing" primary></mat-icon>
        <mat-icon  class="output" secondary>trending_up</mat-icon>
        
      </pxb-hero>

      <pxb-hero [allowClick]="true" label="Load" fontSize="small" >
        <pie-progress class="progress-icon" percent="70" size="36" primary></pie-progress>
        <pxb-channel-value class="content" value="65"  units="%" [prefix]="true" fontSize="small" >
          <mat-icon fontSize="small" class="output" >trending_up</mat-icon>
        </pxb-channel-value>
      </pxb-hero>

      <pxb-hero [allowClick]="true" label="Estimated" >
        <mat-icon primary>alarm</mat-icon>
        <pxb-channel-value class="content" value="1" units="h"></pxb-channel-value>
        <pxb-channel-value class="content" value="26" units="m"></pxb-channel-value>
      </pxb-hero>

      <pxb-hero [allowClick]="true" label="Battery"   value="Full" fontSize="small">
        <battery-progress class="progress-icon" percent="90" size="36" primary></battery-progress>
      </pxb-hero>

    </pxb-hero-banner>
```

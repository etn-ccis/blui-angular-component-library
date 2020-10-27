# Mobile Stepper

The `<pxb-mobile-stepper>` is used to minimally display progress when completing a workflow that requires multiple steps.  There are three types of progress indicators supported, `dots`, `text`, and `progress`. 

<div style="text-align:center; margin-bottom:20px">
    <img width="100%" style="max-width: 600px" alt="Mobile Stepper used " src="./images/dotStepper.png">
</div>

## Usage

```typescript
// app.module.ts
import { MobileStepperModule } from '@pxblue/angular-components';
...
imports: [
    MobileStepperModule
],
```

```html
// your-component.html
<pxb-mobile-stepper [steps]="4" [(activeIndex)]="0"></pxb-mobile-stepper>
```

## API

Parent element (`<pxb-mobile-stepper`) attributes:

<div style="overflow: auto;">

| @Input       | Description                                    | Type                      | Required | Default |
| ------------ | ---------------------------------------------- | ------------------------- | -------- | ------- |
| activeIndex  | The index of the active step                   | `number`                  | yes      |         |
| steps        | How many steps the to display                  | `number`                  | yes      |         |
| variant      | Which type of indicator to use                 | `dots | text | progress ` | no       | `dots`  |

</div>

<div style="overflow: auto;">

| @Output | Description                               | Type                 |
| ------- | ----------------------------------------- | -------------------- |
| back    | Event triggered on back button click      | `EventEmitter<void>` |
| next    | Event triggered on next button click      | `EventEmitter<void>` |

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                              | Description                                             |
| --------------------------------- | ------------------------------------------------------- |
| pxb-mobile-stepper                | Styles applied to the tag                               |
| pxb-mobile-stepper-content        | Styles applied to the mobile stepper container          |
| pxb-mobile-stepper-dot            | Styles applied to each dot in the stepper               |
| pxb-mobile-stepper-dots           | Styles applied to the mobile stepper dots container     |
| pxb-mobile-stepper-active         | Styles applied to the dot representing the active step  |
| pxb-mobile-stepper-visited        | Styles applied to the visited dots                      |
| pxb-mobile-stepper-unvisited      | Styles applied to the dots that were not visited yet    |

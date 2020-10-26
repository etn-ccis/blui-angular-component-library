# Dot Stepper

The `<pxb-dot-stepper>` is used to minimally display progress when completing a workflow that requires multiple steps.

<div style="text-align:center; margin-bottom:20px">
    <img width="100%" style="max-width: 600px" alt="Dot Stepper used " src="./images/dotStepper.png">
</div>

## Usage

```typescript
// app.module.ts
import { DotStepperModule } from '@pxblue/angular-components';
...
imports: [
    DotStepperModule
],
```

```html
// your-component.html
<pxb-dot-stepper [steps]="4" [activeStepId]="0"></pxb-dot-stepper>
```

## API

Parent element (`<pxb-dot-stepper`) attributes:

<div style="overflow: auto;">

| @Input       | Description                                    | Type                 | Required | Default |
| ------------ | ---------------------------------------------- | -------------------- | -------- | ------- |
| activeStepId | The index of the active step                   | `number`             | yes      |         |
| steps        | How many steps the to display                  | `number`             | yes      |         |

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                           | Description                                             |
| ------------------------------ | ------------------------------------------------------- |
| pxb-dot-stepper                 | Styles applied to the tag                              |
| pxb-dot-stepper-dot            | Styles applied to each dot in the stepper               |
| pxb-dot-stepper-active         | Styles applied to the dot representing the active step  |

# Hero

The `<pxb-hero>` components are used to call attention to particular values that are of the most importance to the user. These are typically displayed in a banner.

<div style="text-align:center">
<img width="100%" style="max-width:600px" alt="Hero Banner" src="./images/heroes.png">
</div>

The `<pxb-hero>` component displays a particular icon, value/units, and a label. Icon components are passed as a child element with the `primary` attribute - these will typically be a Material icon, PX Blue icon, or Progress Icon. It will also accept Text/Emoji values inside of a `<span>` element.

The value section of the `<pxb-hero>` utilizes a [`<pxb-channel-value>`](./ChannelValue.md) component. To display a single simple value, the information can be passed as attributes (`value`, `units`). An icon can be passed as a child of the `<pxb-hero>` component with the `secondary` attribute. For more complex values (such as a duration that displays hours and minutes), you can pass in multiple `<pxb-channel-value>` components as children and they will be displayed inline.

## Hero Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Hero Anatomy" src="./images/heroAnatomy.png">
</div>

```typescript
// app.module.ts
import { HeroModule } from '@pxblue/angular-components';

...
imports: [
    HeroModule
],
```

```html
// Simple usage via Hero attributes

<pxb-hero label="Healthy" value="96" units="/100">
    <mat-icon primary>timer</mat-icon>
    <mat-icon secondary>trending_up</mat-icon>
</pxb-hero>

// Complex example with multiple values as children

<pxb-hero label="Load">
    <mat-icon primary>timer</mat-icon>
    <pxb-channel-value value="1" units="h"></pxb-channel-value>
    <pxb-channel-value value="26" units="m"></pxb-channel-value>
</pxb-hero>
```

## Hero API

Parent element (`<pxb-hero>`) attributes:

<div style="overflow: auto;">

| @input   | Description                            | Type                   | Required | Default       |
| -------- | -------------------------------------- | ---------------------- | -------- | ------------- |
| fontSize | The text size for the value line       | ```'normal'|'small'``` | no       | 'normal'      |
| iconSize | The size of the primary icon (10-48)   | `string`               | no       | 'normal' (36) |
| label    | The text shown below the Channel Value | `string`               | yes      |               |
| units    | Text to show after the value           | `string`               | no       |               |
| value    | The value for the channel              | ```string|number```    | no       |               |

</div>

> **Note**: When using the `iconSize` attribute, you may specify either normal (36px) or large (72px). When using `<mat-icon>` icons (not PX Blue supplemental icon), you may also specify a numeric value from 10 to 72.

The following child elements are projected into `<pxb-hero>`:

<div style="overflow: auto;">

| Selector    | Description                                                 | Required | Default |
| ----------- | ----------------------------------------------------------- | -------- | ------- |
| (child)     | The `<pxb-channel-value>` to display under the primary icon | no       |         |
| [primary]   | The large icon displayed on the top                         | no       |         |
| [secondary] | The icon displayed to the left of the value and units       | no       |         |

</div>

# Hero Banner

The `<pxb-hero-banner>` component is a simple wrapper component that is used to contain `<pxb-hero>`s. It creates the flex container and sets up the spacing rules to display them. It accepts up to four `<pxb-hero>` components as its children.

## Hero Banner Usage

```typescript
// app.module.ts
import { HeroModule } from '@pxblue/angular-components';
...
imports: [
    HeroModule
],
```

```html
// your-component.html
<pxb-hero-banner [divider]="true">
    <pxb-hero [label]="'label'">
        <i primary class="pxb-grade_a"></i>
    </pxb-hero>
</pxb-hero-banner>
```

## Hero Banner API

Parent element (`<pxb-hero-banner>`) attributes:

<div style="overflow: auto;">

| @input  | Description                        | Type      | Required | Default |
| ------- | ---------------------------------- | --------- | -------- | ------- |
| divider | Whether to show the line separator | `boolean` | no       | false   |

</div>

The following child element is projected into `<pxb-hero-banner>`:

<div style="overflow: auto;">

| Selector | Description           | Required | Default |
| -------- | --------------------- | -------- | ------- |
| (child)  | `pxb-hero` to display | yes      |         |

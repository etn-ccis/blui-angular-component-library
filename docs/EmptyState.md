# Empty State

The `<pxb-empty-state>` component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://pxblue.github.io/patterns/empty-states)).

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Empty State component with action button" src="./images/emptyState.png">
</div>

The `<pxb-empty-state>` component can display a particular icon, text, and actions. Icon components are passed as a child element with the `emptyIcon` attribute - these will typically be a Material icon, PX Blue icon, or Progress Icon. It will also accept Text/Emoji values inside of a `<span>` element.

The `<pxb-empty-state>` component can also display additional action elements below the text. These components are passed as a child element with the `actions` attribute - these will typically be a button or group of buttons.

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Empty State Anatomy" src="./images/emptyStateAnatomy.png">
</div>

```typescript
// app.module.ts
import { EmptyStateModule } from '@pxblue/angular-components';
...
imports: [
    EmptyStateModule
],
```

```html
// your-component.html
<pxb-empty-state title="No Devices Found">
    <mat-icon pxb-empty-icon>notifications_none</mat-icon>
    <button mat-raised-button color="primary" pxb-actions>
        <mat-icon>add_circle</mat-icon>
        ADD DEVICE
    </button>
</pxb-empty-state>
```

## API

Parent element (`<pxb-empty-state>`) attributes:

<div style="overflow: auto;">

| @Input      | Description                   | Type     | Required | Default |
| ----------- | ----------------------------- | -------- | -------- | ------- |
| description | The secondary text to display | `string` | no       |         |
| title       | The main text to display      | `string` | yes      |         |

</div>

The following child elements are projected into `<pxb-empty-state>`:

<div style="overflow: auto;">

| Selector         | Description                    | Required | Default |
| ---------------- | ------------------------------ | -------- | ------- |
| [pxb-actions]    | action elements below the text | no       |         |
| [pxb-empty-icon] | The large icon to display      | yes      |         |

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                               | Description                              |
| ---------------------------------- | ---------------------------------------- |
| pxb-empty-state                    | Styles applied to the tag                |
| pxb-empty-state-content            | Styles applied to the root element       |
| pxb-empty-state-empty-icon-wrapper | Styles applied to the icon container     |
| pxb-empty-state-title              | Styles applied to the title @Input       |
| pxb-empty-state-description        | Styles applied to the description @Input |
| pxb-empty-state-actions-wrapper    | Styles applied to the actions container  |

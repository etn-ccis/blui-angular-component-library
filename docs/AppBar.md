# App Bar

The `<pxb-app-bar>` component is a wrapper around the `<mat-toolbar>` that can be resized as the page is scrolled. It supports three variants: `snap`, `collapsed`, and `expanded`.

<div style="text-align:center; margin-bottom:20px">
    <img width="100%" style="max-width: 600px; margin-bottom: 20px; border: 1px solid #0002;" alt="App Bar Three Liner" src="./gifs/appBarThreeLiner.gif">
    <img width="100%" style="max-width: 600px; border: 1px solid #0002;" alt="App Bar that would snap to the scroll position" src="./gifs/appBarSnap.gif">
</div>

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="User Menu Anatomy" src="./images/appBarExpanded.png">
    <img width="100%" style="max-width: 600px" alt="User Menu Anatomy Selector" src="./images/appBarCollapsed.png">
</div>

```typescript
// app.module.ts
import { AppBarModule } from '@pxblue/angular-components';
...
imports: [
    CommonModule, MatToolbarModule, SpacerModule, MatIconModule
],
...
```

```html
<!-- Default: AppBar will resize between collapsedHeight and expandedHeight as the window is scrolled -->
<pxb-app-bar variant="snap"></pxb-app-bar>

<!-- App Bar will stay fixed at the collapsedHeight size -->
<pxb-app-bar variant="collapsed"></pxb-app-bar>

<!-- App Bar will stay fixed at the expandedHeight size -->
<pxb-app-bar variant="expanded"></pxb-app-bar>

<!-- AppBar with Three Liner component -->
<pxb-app-bar variant="snap">
    <pxb-three-liner [title]="title" [subtitle]="subtitle" [info]="info"></pxb-three-liner>
</pxb-app-bar>
```

## API

<div style="overflow: auto;">

| @Input                   | Description                                            | Type                                      | Required | Default                          |
| ------------------------ | ------------------------------------------------------ | ----------------------------------------- | -------- | -------------------------------- |
| collapsedHeight          | Height of the AppBar when collapsed                    | `number`                                  | no       | theme default                    |
| expandedHeight           | Height of the AppBar when expanded                     | `number`                                  | no       | 200                              |
| collapsedChange          | Event emitter for when the appbar opens or closes      | `EventEmitter<boolean>`                   | no       |                                  |
| scrollContainerElement   | Scrollable element which dynamic app bar responds to   | `Element`                                 | no       |                                  |
| scrollContainerClassName | Class name, index number of scrollable element         | `{ name: string, index: number }`         | no       |                                  |
| scrollContainerId        | Id of the scrollable element                           | `string`                                  | no       |                                  |
| scrollThreshold          | Distance in pixels to scroll before collapsing toolbar | `number`                                  | no       | expandedHeight - collapsedHeight |
| variant                  | Behavior of the App Bar                                | `'expanded'` \| `'collapsed'` \| `'snap'` | no       | 'snap'                           |

</div>

> For the `snap` variant to respond correctly to scroll events, the `scrollContainerElement`, `scrollContainerClassName`, or `scrollContainerId` should be provided.

The following child element is projected into `<pxb-app-bar>`:

| Selector      | Description       | Required | Default |
| ------------- | ----------------- | -------- | ------- |
| [pxb-actions] | Menu action items | no       |         |
| [pxb-icon]    | Menu icon         | no       |         |

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                     | Description                                   |
| ------------------------ | --------------------------------------------- |
| pxb-app-bar              | Styles applied to the tag                     |
| pxb-app-bar-background   | Styles applied to the background image        |
| pxb-app-bar-body-wrapper | Styles applied to the toolbar body ng-content |
| pxb-app-bar-collapsed    | Styles applied to the app bar when collapsed  |
| pxb-app-bar-content      | Styles applied to the root element            |
| pxb-app-bar-expanded     | Styles applied to the app bar when expanded   |

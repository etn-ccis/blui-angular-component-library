# App Bar

The `<pxb-app-bar>` component is a wrapper around the `<mat-toolbar>` that can be resized as the page is scrolled. It supports three modes: `snap`, `collapsed`, and `expanded`.

## Usage

```tsx
// Default: AppBar will resize between collapsedHeight and expandedHeight as the window is scrolled
<pxb-app-bar mode='snap'></pxb-app-bar>
// App Bar will stay fixed at the collapsedHeight size
<pxb-app-bar mode='collapsed'></pxb-app-bar>
// App Bar will stay fixed at the expandedHeight size
<pxb-app-bar mode='expanded'></pxb-app-bar>
```

## API

<div style="overflow: auto;">

| @Input                      | Description                                                  | Type                                         | Required | Default                                |
| --------------------------- | ------------------------------------------------------------ | -------------------------------------------- | -------- | -------------------------------------- |
| collapsedHeight             | Height of the AppBar when collapsed                          | `number`                                     | no       | theme default                          |
| expandedHeight              | Height of the AppBar when expanded                           | `number`                                     | no       | 200                                    |
| isCollapsed                 | Two-way binding for whether the app bar is collapsed         | `boolean`                                    | no       | false                                  |
| scrollContainerElement      | Scrollable element which dynamic app bar responds to         | `Element`                                    | no       |                                        |
| scrollContainerClassName    | Class name, index number of scrollable element               | `{ name: string, index: number }`            | no       |                                        |
| scrollContainerId           | Id of the scrollable element                                 | `string`                                     | no       |                                        |
| scrollThreshold             | Distance in pixels to scroll before collapsing toolbar       | `number`                                     | no       | expandedHeight - collapsedHeight       |
| variant                     | Behavior mode of the App Bar                                 | `'expanded'` \| `'collapsed'` \| `'snap'`    | no       | 'snap'                                 |

</div>

> For the `snap` mode to respond correctly to scroll events, the `scrollContainerElement`, `scrollContainerClassName`, or `scrollContainerId` should be provided. 


The following child element is projected into `<pxb-app-bar>`:

| Selector                     | Description                                                  | Required | Default |
| ---------------------------- | ------------------------------------------------------------ | -------- | ------- |
| pxb-actions                  | Menu action items                                            | no       |         |
| pxb-icon                     | Menu icon                                                    | no       |         |


### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                 | Description                                     |
| ------------------------------------ | ----------------------------------------------- |
| pxb-app-bar                          | Styles applied to the tag                       |
| pxb-app-bar-background               | Styles applied to the background image          |
| pxb-app-bar-body-wrapper             | Styles applied to the toolbar body ng-content   |
| pxb-app-bar-collapsed                | Styles applied to the app bar when collapsed    |
| pxb-app-bar-content                  | Styles applied to the root element              |
| pxb-app-bar-expanded                 | Styles applied to the app bar when expanded     |

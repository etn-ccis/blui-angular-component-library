# App Bar

The `<pxb-app-bar>` component is a wrapper around the `<mat-toolbar>` that can be resized as the page is scrolled. It supports three modes:

## Usage

```tsx
// Default: AppBar will resize between collapsedHeight and expandedHeight as the window is scrolled
<pxb-app-bar mode='dynamic'></pxb-app-bar>
// App Bar will stay fixed at the collapsedHeight size
<pxb-app-bar mode='collapsed'></pxb-app-bar>
// App Bar will stay fixed at the expandedHeight size
<pxb-app-bar mode='expanded'></pxb-app-bar>
```

## API

<div style="overflow: auto;">

| @Input                      | Description                                                  | Type                                         | Required | Default       |
| --------------------------- | ------------------------------------------------------------ | -------------------------------------------- | -------- | ------------- |
| collapsedHeight             | Height of the AppBar when collapsed                          | `number`                                     | no       | theme default |
| expandedHeight              | Height of the AppBar when expanded                           | `number`                                     | no       | 200           |
| mode                        | Behavior mode of the App Bar                                 | `'expanded'` \| `'collapsed'` \| `'dynamic'` | no       | 'dynamic'     |
| scrollContainerElement      | Scrollable element which dynamic app bar responds to         | `Element`                                    | no       |               |
| scrollContainerClassName    | Class name, index number of scrollable element               | `{ name: string, index: number }`            | no       |               |
| scrollContainerId           | Id of the scrollable element                                 | `string`                                     | no       |               |

</div>

> For the `dynamic` mode to respond correctly to scroll events, the `scrollContainerElement`, `scrollContainerClassName`, or `scrollContainerId` should be provided. 


### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                           | Description                          |
| ------------------------------ | ------------------------------------ |
| pxb-app-bar                    | Styles applied to the tag            |
| pxb-app-bar-content            | Styles applied to the root element   |
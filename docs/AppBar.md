# App Bar

The `<pxb-app-bar>` component is a wrapper around the `<mat-toolbar>` that can be resized as the page is scrolled. It supports three modes: `dynamic`, `collapsed`, and `expanded`.

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

| @Input                      | Description                                                  | Type                                         | Required | Default                                |
| --------------------------- | ------------------------------------------------------------ | -------------------------------------------- | -------- | -------------------------------------- |
| collapsedHeight             | Height of the AppBar when collapsed                          | `number`                                     | no       | theme default                          |
| expandedHeight              | Height of the AppBar when expanded                           | `number`                                     | no       | 200                                    |
| mode                        | Behavior mode of the App Bar                                 | `'expanded'` \| `'collapsed'` \| `'dynamic'` | no       | 'dynamic'                              |
| scrollContainerElement      | Scrollable element which dynamic app bar responds to         | `Element`                                    | no       |                                        |
| scrollContainerClassName    | Class name, index number of scrollable element               | `{ name: string, index: number }`            | no       |                                        |
| scrollContainerId           | Id of the scrollable element                                 | `string`                                     | no       |                                        |
| scrollThreshold             | Distance in pixels to scroll before collapsing toolbar       | `number`                                     | no       | (expandedHeight - collapsedHeight) / 2 |

</div>

> For the `dynamic` mode to respond correctly to scroll events, the `scrollContainerElement`, `scrollContainerClassName`, or `scrollContainerId` should be provided. 


The following child element is projected into `<pxb-app-bar>`:

| Selector                     | Description                                                  | Required | Default |
| ---------------------------- | ------------------------------------------------------------ | -------- | ------- |
| pxb-app-bar-dynamic-content  | Dynamic content that grows and shrinks as user scrolls       | no       |         |
| pxb-icon                     | Menu icon                                                    | no       |         |
| pxb-actions                  | Menu action items                                            | no       |         |


### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                           | Description                          |
| ------------------------------ | ------------------------------------ |
| pxb-app-bar                    | Styles applied to the tag            |
| pxb-app-bar-content            | Styles applied to the root element   |

# App Bar Dynamic Content

The `<pxb-app-bar-dynamic-content>` accepts content that can grow and shrink within the context of a `<pxb-app-bar>`.


## API

<div style="overflow: auto;">

| @Input                      | Description                                                  | Type       | Required | Default       |
| --------------------------- | ------------------------------------------------------------ | ---------- | -------- | ------------- |
| title                       | First line content                                           | `string`   | no       |               |
| titleExpandedSize           | Pixel font size of the title when expanded                   | `number`   | no       | 30            |
| titleCollapsedSize          | Pixel font size of the title when collapsed                  | `number`   | no       | 20            |
| subtitle                    | Second line content                                          | `string`   | no       |               |
| subtitleExpandedSize        | Pixel font size of the subtitle when expanded                | `number`   | no       | 16            |
| subtitleCollapsedSize       | Pixel font size of the subtitle when collapsed               | `number`   | no       | 0             |
| info                        | Third line content                                           | `string`   | no       |               |
| infoExpandedSize            | Pixel font size of the info line when expanded               | `number`   | no       | 14            |
| infoCollapsedSize           | Pixel font size of the info line when collapsed              | `number`   | no       | 16            |

</div>

The following child element is projected into `<pxb-app-bar-dynamic-content>`:

| Selector                     | Description                | Required | Default |
| ---------------------------- | -------------------------- | -------- | ------- |
| pxb-title                    | First line content         | no       |         |
| pxb-subtitle                 | Second line content        | no       |         |
| pxb-info                     | Third line content         | no       |         |

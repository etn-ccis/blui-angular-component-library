# Three Liner

The `<pxb-three-liner>` can display up to three lines of stylized text or other ng-content. It is most commonly used within the context of a [`<pxb-app-bar>`](./AppBar.md) component where the text can grow / shrink as the App Bar is expanded and collapsed.

## API

<div style="overflow: auto;">

| @Input                      | Description                                                  | Type       | Required | Default       |
| --------------------------- | ------------------------------------------------------------ | ---------- | -------- | ------------- |
| title                       | First line content                                           | `string`   | no       |               |
| subtitle                    | Second line content                                          | `string`   | no       |               |
| info                        | Third line content                                           | `string`   | no       |               |

</div>

The following child element is projected into `<pxb-three-liner>`:

| Selector                     | Description                | Required | Default |
| ---------------------------- | -------------------------- | -------- | ------- |
| pxb-title                    | First line content         | no       |         |
| pxb-subtitle                 | Second line content        | no       |         |
| pxb-info                     | Third line content         | no       |         |

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                     | Description                                     |
| ------------------------ | ----------------------------------------------- |
| pxb-three-liner-info     | Styles applied to the dynamic content 3rd line  |
| pxb-three-liner-subtitle | Styles applied to the dynamic content 2nd line  |
| pxb-three-liner-title    | Styles applied to the dynamic content 1st line  |

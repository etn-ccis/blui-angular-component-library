# Three Liner

The `<blui-three-liner>` can display up to three lines of stylized text or other ng-content. It is most commonly used within the context of a [`<blui-app-bar>`](./AppBar.md) component where the text can grow / shrink as the App Bar is expanded and collapsed.

## Usage

```html
// your-component.html
<blui-three-liner
    [title]="'Title Text / Page Title'"
    [subtitle]="'Subtitle Text / Second Line of Text'"
    [info]="'Info Text / Third Line of Text'"
/>
```

## API

<div style="overflow: auto;">

| @Input   | Description         | Type     | Required | Default |
| -------- | ------------------- | -------- | -------- | ------- |
| title    | First line content  | `string` | no       |         |
| subtitle | Second line content | `string` | no       |         |
| info     | Third line content  | `string` | no       |         |

</div>

The following child element is projected into `<blui-three-liner>`:

| Selector        | Description         | Required | Default |
| --------------- | ------------------- | -------- | ------- |
| [blui-title]    | First line content  | no       |         |
| [blui-subtitle] | Second line content | no       |         |
| [blui-info]     | Third line content  | no       |         |

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                      | Description                                    |
| ------------------------- | ---------------------------------------------- |
| blui-three-liner-info     | Styles applied to the dynamic content 3rd line |
| blui-three-liner-subtitle | Styles applied to the dynamic content 2nd line |
| blui-three-liner-title    | Styles applied to the dynamic content 1st line |

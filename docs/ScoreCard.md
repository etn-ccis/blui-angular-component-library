# Score Card

`<blui-score-card>` is a card component that calls attention to particular values.

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="40%" alt="Score Card with multiple highlighted values" src="./images/scoreCard.png"><br/>
    <img width="40%" alt="Score Card with single badge-style value" src="./images/scoreCard_alt.png"><br/>
</div>

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 800px" alt="Score Card Anatomy" src="./images/scoreCardAnatomy.png">
</div>

```typescript
// app.module.ts
import { ScoreCardModule } from '@brightlayer-ui/angular-components';
...
imports: [
    ScoreCardModule
],
...
```

```html
// your-component.html // Example with basic body content, action items, and a score badge
<blui-score-card
    [headerTitle]="'Substation 3'"
    [headerSubtitle]="'Normal'"
    [headerInfo]="'4 Devices'"
    [badgeOffset]="-76"
>
    <ng-container blui-action-items>
        <mat-icon>search</mat-icon>
        <mat-icon>more_vert</mat-icon>
    </ng-container>

    <mat-list blui-body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>

    <blui-hero
        blui-badge
        [label]="'Grade'"
        [value]="'98'"
        [units]="'/100'"
        [iconSize]="'large'"
        [iconBackgroundColor]="'white'"
    >
        <i blui-primary class="blui-grade_a"></i>
    </blui-hero>
</blui-score-card>
```

## API

Parent element (`<blui-score-card>`) attributes:

<div style="overflow: auto;">

| @Input         | Description                           | Type     | Required | Default |
| -------------- | ------------------------------------- | -------- | -------- | ------- |
| badgeOffset    | Vertical offset for the badge content | `number` | no       | 0       |
| headerInfo     | The third line of text in the header  | `string` | no       |         |
| headerSubtitle | The second line of text in the header | `string` | no       |         |
| headerTitle    | The first line of text in the header  | `string` | yes      |         |

</div>

The following child elements are projected into `<blui-score-card>`:

<div style="overflow: auto;">

| Selector            | Description                                 | Required | Default |
| ------------------- | ------------------------------------------- | -------- | ------- |
| [blui-action-items] | Icons shown to the right of the header text | no       |         |
| [blui-action-row]   | Content to render for the footer            | no       |         |
| [blui-badge]        | Content to render in the callout area       | no       |         |
| [blui-body]         | Content to render in the body               | no       |         |

</div>

### Classes

Each Brightlayer UI component has classes which can be used to override component styles:

| Name                                 | Description                                       |
| ------------------------------------ | ------------------------------------------------- |
| blui-score-card                      | Styles applied to the tag                         |
| blui-score-card-content              | Styles applied to the root element                |
| blui-score-card-header               | Styles applied to the scorecard header            |
| blui-score-card-header-background    | Hidden overlay used to provide a background image |
| blui-score-card-header-wrapper       | Styles used to align header text and actions      |
| blui-score-card-title                | Styles applied to the headerTitle @Input          |
| blui-score-card-subtitle             | Styles applied to the headerSubtitle @Input       |
| blui-score-card-info                 | Styles applied to the info @Input                 |
| blui-score-card-action-items-wrapper | Styles applied to the actionItems container       |
| blui-score-card-body                 | Styles applied to the scorecard body              |
| blui-score-card-badge-wrapper        | Styles applied to the badge container             |
| blui-score-card-action-row-wrapper   | Styles applied to the actionRow container         |

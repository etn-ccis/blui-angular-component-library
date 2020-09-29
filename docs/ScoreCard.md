# Score Card

`<pxb-score-card>` is a card component that calls attention to particular values.

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
import { ScoreCardModule } from '@pxblue/angular-components';
...
imports: [
    ScoreCardModule
],
...
```

```html
// Example with basic body content, action items, and a score badge

<pxb-score-card
    [headerTitle]="'Substation 3'"
    [headerSubtitle]="'Normal'"
    [headerInfo]="'4 Devices'"
    [badgeOffset]="-76"
>
    <ng-container pxb-action-items>
        <mat-icon>search</mat-icon>
        <mat-icon>more_vert</mat-icon>
    </ng-container>

    <mat-list pxb-body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>

    <pxb-hero
        pxb-badge
        [label]="'Grade'"
        [value]="'98'"
        [units]="'/100'"
        [iconSize]="'large'"
        [iconBackgroundColor]="'white'"
    >
        <i pxb-primary class="pxb-grade_a"></i>
    </pxb-hero>
</pxb-score-card>
```

## API

Parent element (`<pxb-score-card>`) attributes:

<div style="overflow: auto;">

| @Input         | Description                           | Type     | Required | Default |
| -------------- | ------------------------------------- | -------- | -------- | ------- |
| badgeOffset    | Vertical offset for the badge content | `number` | no       | 0       |
| headerInfo     | Tertiary text                         | `string` | no       |         |
| headerSubtitle | The secondary text                    | `string` | no       |         |
| headerTitle    | The primary text                      | `string` | yes      |         |

</div>

The following child elements are projected into `<pxb-score-card>`:

<div style="overflow: auto;">

| Selector           | Description                                 | Required | Default |
| ------------------ | ------------------------------------------- | -------- | ------- |
| [pxb-action-items] | Icons shown to the right of the header text | no       |         |
| [pxb-action-row]   | Content to render for the footer            | no       |         |
| [pxb-badge]        | Content to render in the callout area       | no       |         |
| [pxb-body]         | Content to render in the body               | no       |         |

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                | Description                                       |
| ----------------------------------- | ------------------------------------------------- |
| pxb-score-card                      | Styles applied to the tag                         |
| pxb-score-card-content              | Styles applied to the root element                |
| pxb-score-card-header               | Styles applied to the scorecard header            |
| pxb-score-card-header-background    | Hidden overlay used to provide a background image |
| pxb-score-card-header-wrapper       | Styles used to align header text and actions      |
| pxb-score-card-title                | Styles applied to the headerTitle @Input          |
| pxb-score-card-subtitle             | Styles applied to the headerSubtitle @Input       |
| pxb-score-card-info                 | Styles applied to the info @Input                 |
| pxb-score-card-action-items-wrapper | Styles applied to the actionItems container       |
| pxb-score-card-body                 | Styles applied to the scorecard body              |
| pxb-score-card-badge-wrapper        | Styles applied to the badge container             |
| pxb-score-card-action-row-wrapper   | Styles applied to the actionRow container         |

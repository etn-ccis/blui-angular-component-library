# ScoreCard
Card component that calls attention to particular values.

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="40%" alt="Score Card with multiple highlighted values" src="./images/scoreCard.png"><br/>
    <img width="40%" alt="Score Card with single badge-style value" src="./images/scoreCard_alt.png"><br/>
</div>

## Usage

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="80%" alt="Score Card with labels on different parts" src="./images/scoreCardAnatomy.png"><br/>
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

```typescript
// Example with basic body content and header action items
<pxb-scorecard [headerTitle]="'Title'" >
    <mat-list body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>
    <ng-container action-items>
        <mat-icon>search</mat-icon>
        <mat-icon>more_vert</mat-icon>
    </ng-container>
</pxb-scorecard>
```

## API

<div style="overflow: auto;">

| Prop Name             | Description                                 | Type                  | Required | Default                      |
|-----------------------|---------------------------------------------|-----------------------|----------|------------------------------|
| actionItems           | Icons shown to the right of the header text | `ng-content`          | no       |                              |
| actionRow             | Content to render for the footer            | `ng-content`          | no       |                              |
| badge                 | Content to render in the callout area       | `ng-content`          | no       |                              |
| badgeOffset           | Vertical offset for the badge content       | `number`              | no       | 0                            |
| body                  | Content to render in the body               | `ng-content`          | no       |                              |
| headerInfo            | Tertiary text                               | `string`              | no       |                              |
| headerTitle           | The primary text                            | `string`              | no       |                              |
| headerSubtitle        | The secondary text                          | `string`              | no       |                              | 

</div>

import { Component } from '@angular/core';

export const BASIC = `<blui-score-card style="width: 350px"
    headerTitle="Station 3"
    headerSubtitle="High Humidity Alarm"
    headerInfo="4 Devices">
    <mat-list blui-body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>
</blui-score-card> 
`;

@Component({
    selector: 'app-basic-score-card-demo',
    template: BASIC,
})
export class BasicComponent {}

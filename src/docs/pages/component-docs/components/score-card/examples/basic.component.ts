import { Component } from '@angular/core';

export const BASIC = `<blui-score-card headerTitle="Card Title" style="width: 350px">
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

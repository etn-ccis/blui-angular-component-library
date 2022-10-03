import { Component } from '@angular/core';

export const WITH_ACTIONS = `<blui-score-card style="width: 350px"
   headerTitle="Header Actions"    
   [badgeOffset]="-54">
   <ng-container blui-action-items>
        <mat-icon>star</mat-icon>
        <mat-icon>settings</mat-icon>
        <mat-icon>more_vert</mat-icon>
    </ng-container>
    <mat-list blui-body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>
    <blui-hero-banner blui-badge>
        <blui-hero blui-badge label="Grade" value="98" units="/100" [iconSize]="72" unitSpace="hide">
            <i blui-primary class="blui-grade_a"></i>
        </blui-hero>
    </blui-hero-banner>
    <blui-info-list-item blui-action-row [hidePadding]="true" [dense]="true" [chevron]="true">
        <div blui-title>View Location</div>
    </blui-info-list-item>
</blui-score-card> 
`;

@Component({
    selector: 'app-custom-header-score-card-demo',
    template: WITH_ACTIONS
})
export class WithActionsComponent {}

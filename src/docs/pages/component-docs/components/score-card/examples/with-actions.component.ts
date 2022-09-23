import { Component } from '@angular/core';

export const WITH_ACTIONS = `<blui-score-card style="width: 350px" class="with-actions" headerTitle="Header Actions">
   <ng-container blui-action-items>
        <mat-icon>star</mat-icon>
        <mat-icon>settings</mat-icon>
        <mat-icon>more_vert</mat-icon>
    </ng-container>
    <mat-list blui-body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>
    <blui-info-list-item blui-action-row [hidePadding]="true" [dense]="true" [chevron]="true">
        <div blui-title>View Location</div>
    </blui-info-list-item>
</blui-score-card> 
`;

@Component({
    selector: 'app-custom-header-score-card-demo',
    template: WITH_ACTIONS,
    styles: [
        `
            ::ng-deep .with-actions .blui-score-card-header-background {
                background-image: url('../../../../../../assets/topology_40.png') !important;
            }
        `,
    ],
})
export class WithActionsComponent {}

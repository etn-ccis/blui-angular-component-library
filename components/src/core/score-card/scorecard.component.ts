import { Component, Input } from '@angular/core';

@Component({
    selector: 'pxb-scorecard',
    template: `
        <mat-card class="pxb-scorecard">
            <div class="pxb-scorecard-header" [style.backgroundColor]="headerColor" [style.color]="headerFontColor">
                <mat-card-title class="title">{{headerTitle}}</mat-card-title>
                <mat-card-subtitle class="subtitle">{{headerSubtitle}}</mat-card-subtitle>
                <mat-card-subtitle class="info">{{headerInfo}}</mat-card-subtitle>
            </div> 
            <mat-card-content class="pxb-scorecard-content">
                <ng-content></ng-content>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./scorecard.component.scss'],
})
export class ScoreCardComponent {
    @Input() headerTitle: string;
    @Input() headerSubtitle: string;
    @Input() headerInfo: string;
    @Input() headerColor: string;
    @Input() headerFontColor: string;
}

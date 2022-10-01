import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type ScoreCardPlaygroundKnobs = {
    headerTitle: Knob;

    // Optional
    badgeOffset: Knob;
    headerInfo: Knob;
    headerSubtitle: Knob;

    // Other
    numberOfHeroes: Knob;
};

@Component({
    selector: 'app-score-card-playground',
    template: `<blui-score-card
        style="width: 400px"
        [headerTitle]="inputs.headerTitle.value"
        [headerSubtitle]="inputs.headerSubtitle.value"
        [headerInfo]="inputs.headerInfo.value"
        [badgeOffset]="inputs.badgeOffset.value"
    >
        <ng-container blui-action-items>
            <mat-icon>star</mat-icon>
            <mat-icon>settings</mat-icon>
            <mat-icon>more_vert</mat-icon>
        </ng-container>
        <mat-list blui-body>
            <mat-list-item style="height: 2.5rem">
                <p mat-line style="font-weight: 400">0 Alarms</p>
                <mat-icon mat-list-icon>notifications</mat-icon>
            </mat-list-item>
            <mat-list-item style="height: 2.5rem">
                <p mat-line style="font-weight: 600">1 Event</p>
                <mat-icon mat-list-icon>list_alt</mat-icon>
            </mat-list-item>
            <mat-list-item style="height: 2.5rem; margin-bottom: 4px">
                <p mat-line style="font-weight: 400">Online</p>
                <mat-icon mat-list-icon>cloud</mat-icon>
            </mat-list-item>
        </mat-list>

        <blui-hero-banner blui-badge>
            <blui-hero
                *ngIf="inputs.numberOfHeroes.value > 0"
                label="Temperature"
                value="98"
                units="°F"
                [iconSize]="72"
            >
                <i blui-primary class="blui-temp"></i>
            </blui-hero>
            <blui-hero *ngIf="inputs.numberOfHeroes.value > 1" label="Humidity" value="54" units="%" [iconSize]="72">
                <i blui-primary class="blui-moisture"></i>
            </blui-hero>
        </blui-hero-banner>
        <blui-info-list-item blui-action-row [hidePadding]="true" [dense]="true" [chevron]="true">
            <div blui-title>View Location</div>
        </blui-info-list-item>
    </blui-score-card>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: ScoreCardPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: ScoreCardPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            this._emitNewCodeChanges();
        });
    }

    ngAfterViewInit(): void {
        this._emitNewCodeChanges();
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    private _emitNewCodeChanges(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    private _getHeroBadge(): string {
        const numberOfHeroes = Number(this.inputs.numberOfHeroes.value);
        if (numberOfHeroes === 0) {
            return '';
        }
        if (numberOfHeroes === 1) {
            return `
    <blui-hero-banner blui-badge>
        <blui-hero label="Temperature" value="98" units="°F" [iconSize]="72">
            <i blui-primary class="blui-temp"></i>
        </blui-hero>
    </blui-hero-banner>`;
        }
        return `
    <blui-hero-banner blui-badge>
        <blui-hero label="Temperature" value="98" units="°F" [iconSize]="72">
            <i blui-primary class="blui-temp"></i>
        </blui-hero>
        <blui-hero label="Humidity" value="54" units="%" [iconSize]="72">
            <i blui-primary class="blui-moisture"></i>
        </blui-hero>
    </blui-hero-banner>`;
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-score-card
    style="width: 400px"
    ${this._playgroundService.addOptionalProp(this.inputs, 'headerSubtitle')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'headerInfo')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'badgeOffset')}
    [headerTitle]="${this.inputs.headerTitle.value}">
   <ng-container blui-action-items>
        <mat-icon>star</mat-icon>
        <mat-icon>settings</mat-icon>
        <mat-icon>more_vert</mat-icon>
    </ng-container>
    <mat-list blui-body>
        <mat-list-item style="height: 2.5rem">
            <p mat-line>0 Alarms</p>
            <mat-icon mat-list-icon>notifications</mat-icon>
        </mat-list-item>
        <mat-list-item style="height: 2.5rem">
            <p mat-line style="font-weight: 600">1 Event</p>
            <mat-icon mat-list-icon>list_alt</mat-icon>
        </mat-list-item>
        <mat-list-item style="height: 2.5rem; margin-bottom: 4px">
            <p mat-line>Online</p>
            <mat-icon mat-list-icon>cloud</mat-icon>
        </mat-list-item>
    </mat-list>
${this._getHeroBadge()}
    <blui-info-list-item blui-action-row [hidePadding]="true" [dense]="true" [chevron]="true">
        <div blui-title>View Location</div>
    </blui-info-list-item>
</blui-score-card>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}

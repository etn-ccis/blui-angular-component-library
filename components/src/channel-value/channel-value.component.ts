import { Component, Input } from '@angular/core';

@Component({
    selector: 'pxb-channel-value',
    template: `
        <span class="value-wrapper" [style.color]="color" [style.fontSize.px]="fontSize">
            <span class="icon">
                <ng-content></ng-content>
            </span>
            <h5 *ngIf="units && prefix" class="text units">{{ units }}</h5>
            <h5 *ngIf="value" class="text value">{{ value }}</h5>
            <h5 *ngIf="units && !prefix" class="text units">{{ units }}</h5>
        </span>
    `,
    styleUrls: ['./channel-value.component.scss'],
})
export class ChannelValueComponent {
    @Input() value: string;
    @Input() units: string;
    @Input() fontSize = 'inherit';
    @Input() prefix = false;
    @Input() color = 'inherit';
}

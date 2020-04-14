import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-channel-value',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <span class="pxb-channel-value" [style.color]="color" [style.fontSize.px]="fontSize">
            <span class="pxb-channel-value-icon">
                <ng-content></ng-content>
            </span>
            <div *ngIf="units && prefix" class="pxb-channel-value-text pxb-channel-value-units">{{ units }}</div>
            <div *ngIf="value" class="pxb-channel-value-text pxb-channel-value-value">{{ value }}</div>
            <div *ngIf="units && !prefix" class="pxb-channel-value-text pxb-channel-value-units">{{ units }}</div>
        </span>
    `,
    styleUrls: ['./channel-value.component.scss'],
})
export class ChannelValueComponent {
    @Input() value: string;
    @Input() units: string;
    @Input() fontSize = 'inherit';
    @Input() prefix = false;
    @Input() color;
}

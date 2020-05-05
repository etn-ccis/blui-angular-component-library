import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

@Component({
    selector: 'pxb-channel-value',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <span class="pxb-channel-value" [style.color]="color" [style.fontSize.px]="fontSize">
            <span class="pxb-channel-value-icon">
                <ng-content></ng-content>
            </span>
            <div *ngIf="units && prefix" class="pxb-channel-value-units">{{ units }}</div>
            <div *ngIf="value" class="pxb-channel-value-value">{{ value }}</div>
            <div *ngIf="units && !prefix" class="pxb-channel-value-units">{{ units }}</div>
        </span>
    `,
    styleUrls: ['./channel-value.component.scss'],
})
export class ChannelValueComponent implements OnChanges {
    @Input() value: string | number;
    @Input() units: string;
    @Input() fontSize = 'inherit';
    @Input() prefix = false;
    @Input() color: string;

    ngOnChanges(): void {
        requireInput<ChannelValueComponent>(['value'], this);
    }
}

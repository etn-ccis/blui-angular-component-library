import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    ViewEncapsulation,
} from '@angular/core';
import { requireInput } from '../../utils/utils';
import { BidiComponent } from '../utility/bidi.component';
import { Directionality } from '@angular/cdk/bidi';

@Component({
    selector: 'pxb-channel-value',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <span class="pxb-channel-value" [class.pxb-rtl]="isRtl" [style.color]="color">
            <span class="pxb-channel-value-icon-wrapper">
                <ng-content></ng-content>
            </span>
            <div *ngIf="units && prefix" class="pxb-channel-value-units">{{ units }}</div>
            <div *ngIf="value" class="pxb-channel-value-value">{{ value }}</div>
            <div *ngIf="units && !prefix" class="pxb-channel-value-units">{{ units }}</div>
        </span>
    `,
    styleUrls: ['./channel-value.component.scss'],
})
export class ChannelValueComponent extends BidiComponent implements OnChanges {
    @Input() value: string | number;
    @Input() units: string;
    @Input() prefix = false;
    @Input() color: string;

    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef) {
        super(dir, changeDetectorRef);
    }

    ngOnChanges(): void {
        requireInput<ChannelValueComponent>(['value'], this);
    }
}

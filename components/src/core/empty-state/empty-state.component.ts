import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { requireContent, requireInput } from '../../utils/utils';
import { BidiComponent } from '../utility/bidi.component';
import { Directionality } from '@angular/cdk/bidi';

@Component({
    selector: 'pxb-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class EmptyStateComponent extends BidiComponent implements OnChanges, AfterViewInit {
    @Input() title: string;
    @Input() description: string;

    @ViewChild('emptyIcon', { static: false }) emptyIcon: ElementRef;

    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef) {
        super(dir, changeDetectorRef);
    }

    ngOnChanges(): void {
        requireInput<EmptyStateComponent>(['title'], this);
    }

    ngAfterViewInit(): void {
        const required = { selector: 'emptyIcon', ref: this.emptyIcon };
        requireContent([required], this);
    }
}

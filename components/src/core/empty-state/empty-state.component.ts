import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { requireContent, requireInput } from '../../utils/utils';

@Component({
    selector: 'pxb-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class EmptyStateComponent implements OnChanges, AfterViewInit {
    @Input() title: string;
    @Input() description: string;

    @ViewChild('emptyIcon', { static: false }) emptyIcon: ElementRef;

    ngOnChanges(): void {
        requireInput<EmptyStateComponent>(['title'], this);
    }

    ngAfterViewInit(): void {
        const required = { selector: 'emptyIcon', ref: this.emptyIcon };
        requireContent([required], this);
    }
}

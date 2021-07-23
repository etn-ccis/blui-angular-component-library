import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { requireContent } from '../../utils/utils';

@Component({
    selector: 'pxb-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'pxb-empty-state',
    },
})
export class EmptyStateComponent implements AfterViewInit {
    /** The secondary text to display */
    @Input() description: string;
    /** The main text to display */
    @Input() title: string;

    @ViewChild('emptyIcon') emptyIcon: ElementRef;

    ngAfterViewInit(): void {
        const required = { selector: 'emptyIcon', ref: this.emptyIcon };
        requireContent([required], this);
    }
}

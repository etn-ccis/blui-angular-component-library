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

/**
 * [EmptyState Component](https://pxblue-components.github.io/angular/?path=/info/components-empty-state--readme)
 *
 * The `<pxb-empty-state>` component can display a particular icon, text, and actions.
 * Icon components are passed as a child element with the `emptyIcon` attribute - these will typically be a Material icon, PX Blue icon, or Progress Icon.
 */
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
    /** The secondary text to display (second line) */
    @Input() description: string;
    /** The primary text to display (first line) */
    @Input() title: string;

    /** Used to check if an icon has been provided ngAfterViewInit */
    @ViewChild('emptyIcon') emptyIcon: ElementRef;

    ngAfterViewInit(): void {
        const required = { selector: 'emptyIcon', ref: this.emptyIcon };
        requireContent([required], this);
    }
}

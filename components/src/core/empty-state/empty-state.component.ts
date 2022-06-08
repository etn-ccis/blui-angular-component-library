import {
    AfterViewInit,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { requireContent, hasChildren } from '../../utils/utils';

/**
 * [EmptyState Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-empty-state--readme)
 *
 * The `<blui-empty-state>` component can display a particular icon, text, and actions.
 * Icon components are passed as a child element with the `emptyIcon` attribute - these will typically be a Material icon, Brightlayer UI icon, or Progress Icon.
 */
@Component({
    selector: 'blui-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'blui-empty-state',
    },
})
export class EmptyStateComponent implements AfterViewInit {
    /** The secondary text to display (second line) */
    @Input() description: string;
    /** The primary text to display (first line) */
    @Input() title: string;

    /** Used to check if an icon has been provided ngAfterViewInit */
    @ViewChild('emptyIcon') emptyIcon: ElementRef;

    @ViewChild('actionsRef') actionsRef: ElementRef;
    hasAction = false;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        const required = { selector: 'emptyIcon', ref: this.emptyIcon };
        requireContent([required], this);

        this.hasAction = hasChildren(this.actionsRef);
        this._ref.detectChanges();
    }
}

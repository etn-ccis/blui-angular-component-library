import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

@Component({
    selector: 'pxb-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class EmptyStateComponent implements OnChanges {
    @Input() title: string;
    @Input() description: string;

    ngOnChanges(): void {
        requireInput<EmptyStateComponent>(['title'], this);
    }
}

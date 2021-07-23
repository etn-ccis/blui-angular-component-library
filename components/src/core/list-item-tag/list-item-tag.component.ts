import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

@Component({
    selector: 'pxb-list-item-tag',
    templateUrl: './list-item-tag.component.html',
    styleUrls: ['./list-item-tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'pxb-list-item-tag',
    },
})
export class ListItemTagComponent implements OnChanges {
    /** Color of the label background */
    @Input() backgroundColor: string;
    /** Color of the label */
    @Input() fontColor: string;
    /** The label text */
    @Input() label: string;

    ngOnChanges(): void {
        requireInput<ListItemTagComponent>(['label'], this);
    }
}

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
    @Input() backgroundColor: string;
    @Input() fontColor: string;
    @Input() label: string;

    ngOnChanges(): void {
        requireInput<ListItemTagComponent>(['label'], this);
    }
}

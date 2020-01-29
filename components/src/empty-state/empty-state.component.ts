import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'pxb-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
    @Input() title: string;
    @Input() description: string;
    Colors: any = Colors;
}

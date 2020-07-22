import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-selection-toolbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div>selection toolbar works</div>
    `,
    styleUrls: ['./selection-toolbar.component.scss'],
})
export class SelectionToolbarComponent {

}

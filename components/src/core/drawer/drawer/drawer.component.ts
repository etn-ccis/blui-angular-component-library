import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer">
            
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
    
}

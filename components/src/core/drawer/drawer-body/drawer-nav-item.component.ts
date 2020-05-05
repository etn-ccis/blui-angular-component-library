import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'pxb-drawer-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <pxb-info-list-item [statusColor]="statusColor" [chevron]="chevron" [divider]="divider ? 'full' : undefined">
            <div class="pxb-drawer-nav-item-icon-wrapper" icon>
                <ng-content select="[icon]"></ng-content>
            </div>
            <div title>{{ title }}</div>
            <div subtitle>{{ subtitle }}</div>
        </pxb-info-list-item>
    `,
})
export class DrawerNavItemComponent {
    @Input() statusColor: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() chevron = false;
    @Input() dense = false;
    @Input() divider = true;
    @Input() items;
    @Input() icon;
}

export type DrawerNavItem = {
    statusColor?: string;
    title: string;
    subtitle?: string;
    chevron?: boolean;
    dense?: boolean;
    divider?: boolean;
    icon?: string;
    items?: DrawerNavItem[];
}

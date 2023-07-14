import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerNavItem } from 'src/lib/core';

export const COMPLEX = `<blui-drawer style="width: 250px" [openOnHover]="false">
    <blui-drawer-header title="Energy Co."></blui-drawer-header>
    <blui-drawer-subheader [hideContentOnCollapse]="false">
        <mat-form-field appearance="fill" style="height: 56px; width: 100%">
            <mat-label>Organization</mat-label>
            <mat-select panelClass="drawer-complex-subheader-demo" [(value)]="selected">
                <mat-option value="option1">ACME Co.</mat-option>
                <mat-option value="option2">BLUI CO.</mat-option>
                <mat-divider></mat-divider>
                <mat-option value="option3" [disabled]="true">
                    + Add a New Organization...
                </mat-option>
            </mat-select>
        </mat-form-field>
    </blui-drawer-subheader>
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item *ngFor="let navItem of navItems" [title]="navItem.title">
                <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
            </blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-complex-drawer-subheader-demo',
    template: COMPLEX,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .drawer-complex-subheader-demo {
                max-width: 218px !important;
            }
            drawer-complex-subheader-demo .mat-select-panel {
                box-sizing: content-box;
                max-width: 250px !important;
            }
        `,
    ],
})
export class ComplexComponent {
    selected = 'option2';
    navItems: DrawerNavItem[] = [
        {
            title: 'Dashboard',
            icon: 'dashboard',
        },
        {
            title: 'Locations',
            icon: 'location_on',
        },
        {
            title: 'Legal',
            icon: 'copyright',
        },
    ];
}

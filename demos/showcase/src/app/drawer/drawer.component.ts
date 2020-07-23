import { Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { DrawerNavItem, DrawerNavGroup } from '@pxblue/angular-components';
import { ViewportService } from '../services/viewport.service';
import { StateService } from '../services/state.service';

@Component({
    selector: 'showcase-drawer',
    styleUrls: ['./drawer.component.scss'],
    template: `
        <pxb-drawer [open]="isOpen()">
            <pxb-drawer-header
                title="PX Blue Drawer"
                subtitle="Organize your menu items here"
                class="test-background-image"
            >
                <button mat-icon-button pxb-icon (click)="clickMenuButton()">
                    <mat-icon>menu</mat-icon>
                </button>
            </pxb-drawer-header>

            <pxb-drawer-body>
                <pxb-drawer-nav-group *ngFor="let navGroup of navGroups" [title]="navGroup.title" [divider]="true">
                    <pxb-drawer-nav-item
                        *ngFor="let navItem of navGroup.items"
                        [title]="navItem.title"
                        [subtitle]="navItem.subtitle"
                        [statusColor]="navItem.statusColor"
                        [selected]="selectedItemId === navItem.title"
                        (select)="navItem.onSelect(); setActive(navItem.title)"
                        [divider]="navItem.divider"
                    >
                        <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                        <pxb-drawer-nav-item
                            *ngFor="let nestedItem of navItem.items"
                            [title]="nestedItem.title"
                            [divider]="false"
                            [selected]="selectedItemId === nestedItem.title"
                            [hasChildren]="nestedItem.items"
                            (select)="testClick('sub nav item', $event); setActive(nestedItem.title)"
                        ></pxb-drawer-nav-item>
                    </pxb-drawer-nav-item>
                </pxb-drawer-nav-group>
            </pxb-drawer-body>

            <pxb-drawer-footer>
                <mat-divider></mat-divider>
                <img src="../assets/EatonLogo.svg" width="170" style="align-self: center; padding: 16px" />
            </pxb-drawer-footer>
        </pxb-drawer>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
    colors = PXBColors;
    selectedItemId: string;

    constructor(private readonly _stateService: StateService, private readonly _viewportService: ViewportService) {}

    nestedItems1: DrawerNavItem[] = [{ title: 'Sub 1' }, { title: 'Sub 2' }];

    nestedItems2: DrawerNavItem[] = [{ title: 'Sub 3' }, { title: 'Sub 4' }];

    nestedItems3: DrawerNavItem[] = [
        { title: 'Sub 5' },
        { title: 'Sub 6' },
    ];

    navGroup1: DrawerNavItem[] = [
        {
            title: 'DrawerNavItem 1',
            subtitle: 'Subtitle 1',
            statusColor: PXBColors.red[500],
            onSelect: (): void => this.testClick('Drawer Nav Item 1'),
            icon: 'home',
            items: this.nestedItems1,
        },
        {
            title: 'DrawerNavItem 2',
            subtitle: 'Subtitle 2',
            statusColor: PXBColors.blue[500],
            onSelect: (): void => this.testClick('Drawer Nav Item 2'),
            icon: 'help',
            items: this.nestedItems2,
            //  expandIcon: 'arrow_drop_down',
            //  collapseIcon: 'arrow_drop_up',
        },
    ];

    navGroup2: DrawerNavItem[] = [
        {
            title: 'DrawerNavItem 3',
            subtitle: 'Subtitle 3',
            divider: true,
            statusColor: PXBColors.green[500],
            onSelect: (): void => this.testClick('Drawer Nav Item 3'),
            items: this.nestedItems3,
        },
        {
            title: 'DrawerNavItem 4',
            subtitle: 'Subtitle 4',
            divider: true,
            onSelect: (): void => this.testClick('Drawer Nav Item 4'),
            icon: 'work',
        },
        {
            title: 'DrawerNavItem 5',
            divider: true,
            onSelect: (): void => this.testClick('Drawer Nav Item 5'),
        },
        {
            title: 'DrawerNavItem 6',
            divider: true,
            statusColor: PXBColors.orange[500],
            onSelect: (): void => this.testClick('Drawer Nav Item 6'),
            icon: 'work',
        },
    ];

    navGroups: DrawerNavGroup[] = [
        {
            title: 'First NavGroup',
            items: this.navGroup1,
        },
        { title: 'Second NavGroup', items: this.navGroup2 },
    ];

    testClick(string: string, e?: any): void {
        if (e) {
            e.stopPropagation();
        }
        //eslint-disable-next-line
        console.log(string, ' clicked ...');
    }

    isOpen(): boolean {
        return this._stateService.getDrawerOpen();
    }

    setActive(id: string): void {
        this.selectedItemId = id;
    }

    clickMenuButton(): void {
        this._stateService.setDrawerOpen(!this._stateService.getDrawerOpen());
    }
}

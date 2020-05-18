import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { DrawerNavItem, DrawerNavGroup } from '@pxblue/angular-components';

@Component({
    selector: 'showcase-drawer',
    styleUrls: ['./drawer.component.scss'],
    template: `
       <pxb-drawer [variant]="variant" [drawerOpen]="drawerOpen" (drawerOpenChange)="drawerOpenChange()" [variantDrawerHandler]="variantDrawerHandler">
            <pxb-drawer-header
                title="PX Blue Drawer"
                subtitle="Organize your menu items here"
                class="test-background-image"
                [drawerOpen]="drawerOpen"
            >
                <button
                    mat-icon-button
                    icon
                    style="margin-right: 24px; margin-left: -8px;"
                    (click)="clickMenuButton()"
                >
                    <mat-icon>menu</mat-icon>
                </button>
            </pxb-drawer-header>

            <pxb-drawer-subheader [drawerOpen]="drawerOpen">
                Subheader goes here
            </pxb-drawer-subheader>

            <pxb-drawer-body>
                <pxb-drawer-nav-group *ngFor="let navGroup of navGroups" [title]="navGroup.title" [drawerOpen]="drawerOpen">
                    <pxb-drawer-nav-item
                        *ngFor="let navItem of navGroup.items;"
                        [title]="navItem.title"
                        [subtitle]="navItem.subtitle"
                        [statusColor]="navItem.statusColor"
                        [selected]="selectedItemId === navItem.itemID"
                        [itemID]="navItem.itemID"
                        [hasChildren]="navItem.items"
                        (click)="navItem.onClick(); setActive(navItem.itemID);"
                        [expandIcon]="navItem.expandIcon"
                        [collapseIcon]="navItem.collapseIcon"
                        [useCustomIconAnimation]="navItem.useCustomIconAnimation"
                        [divider]="navItem.divider"
                    >
                        <mat-icon icon>{{ navItem.icon }}</mat-icon>
                        <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items" [title]="nestedItem.title" [divider]=false [selected]="selectedItemId === nestedItem.itemID"
                        [itemID]="nestedItem.itemID"
                        [hasChildren]="nestedItem.items"
                        (click)="testClick('sub nav item', $event); setActive(nestedItem.itemID)"
                        [expandIcon]="nestedItem.expandIcon"
                        [collapseIcon]="nestedItem.collapseIcon"
                        [hidePadding]="nestedItem.hidePadding"
                        ></pxb-drawer-nav-item>
                    </pxb-drawer-nav-item>
                </pxb-drawer-nav-group>
            </pxb-drawer-body>

            <pxb-drawer-footer [drawerOpen]="drawerOpen">
                <img src="../assets/EatonLogo.svg" alt="Eaton Logo"/>
            </pxb-drawer-footer>
        </pxb-drawer>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
    colors = PXBColors;
    @Input() drawerOpen = true;
    selectedItemId: string;
    @Input() variant: any;
    @Input() variantDrawerHandler: boolean;
    @Output() onClickMenuButton: EventEmitter<any> = new EventEmitter();
    @Output() onDrawerOpenChange: EventEmitter<any> = new EventEmitter();

    nestedItems1: DrawerNavItem[] = [
        { title: 'Sub 1', itemID: 'sub0' },
        { title: 'Sub 2', itemID: 'sub1' }
    ];

    nestedItems2: DrawerNavItem[] = [
        { title: 'Sub 3', itemID: 'sub2' },
        { title: 'Sub 4', itemID: 'sub3' }
    ];

    nestedItems3: DrawerNavItem[] = [
        { title: 'Sub 5', itemID: 'sub4', hidePadding: true },
        { title: 'Sub 6', itemID: 'sub5', hidePadding: true }
    ];

    navGroup1: DrawerNavItem[] = [
        { title: 'DrawerNavItem 1', subtitle: 'Subtitle 1', itemID: '0', statusColor: PXBColors.red[500], onClick: (): void => this.testClick('Drawer Nav Item 1'), icon: 'home', items: this.nestedItems1 },
        { title: 'DrawerNavItem 2', subtitle: 'Subtitle 2', itemID: '1', statusColor: PXBColors.blue[500], onClick: (): void => this.testClick('Drawer Nav Item 2'), icon: 'help', items: this.nestedItems2, expandIcon: 'arrow_drop_down', collapseIcon: 'arrow_drop_up' },
    ];

    navGroup2: DrawerNavItem[] = [
        { title: 'DrawerNavItem 3', subtitle: 'Subtitle 3', itemID: '2', divider: true, statusColor: PXBColors.green[500], onClick: (): void => this.testClick('Drawer Nav Item 3'), items: this.nestedItems3, expandIcon: 'arrow_drop_down', collapseIcon: 'arrow_drop_up', useCustomIconAnimation: true },
        { title: 'DrawerNavItem 4', subtitle: 'Subtitle 4', itemID: '3', divider: true,onClick: (): void => this.testClick('Drawer Nav Item 4'), icon: 'work' },
        { title: 'DrawerNavItem 5', itemID: '4', divider: true, onClick: (): void => this.testClick('Drawer Nav Item 5') },
        { title: 'DrawerNavItem 6', itemID: '5', divider: true, statusColor: PXBColors.orange[500], onClick: (): void => this.testClick('Drawer Nav Item 6'), icon: 'work' },
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

    setActive(id: string): void {
        this.selectedItemId = id;
    }

    clickMenuButton(): void {
        this.onClickMenuButton.emit();
    }

    drawerOpenChange(): void {
        this.onDrawerOpenChange.emit();
    }
}

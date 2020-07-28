import { number, select } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { nestedNavGroup } from './with-nested-nav-items.stories';
import { DrawerNavItem } from '@pxblue/angular-components';
import { getDirection } from '@pxblue/storybook-rtl-addon';

const items = [...nestedNavGroup];

export const withinDrawerLayout = (): any => ({
    template: `
        <pxb-drawer-layout [dir]="direction()" [width]="width" [variant]="variant" (backdropClick)="state.open = false">
            <pxb-drawer pxb-drawer [open]="state.open">
               <pxb-drawer-header title="PX Blue Drawer" subtitle="in a PX Blue Drawer Layout">
                 <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
                   <mat-icon>menu</mat-icon>
                 </button>
               </pxb-drawer-header>
               <pxb-drawer-body>
                  <pxb-drawer-nav-group>
                       <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                         [title]="navItem.title"
                         [selected]="state.selected === navItem.title"
                         (select)="navItem.onSelect(); setActive(navItem, state);">
                         <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                         <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                           [title]="nestedItem.title"
                           [selected]="state.selected === nestedItem.title"
                           (select)="nestedItem.onSelect(); setActive(nestedItem, state);">
                            <pxb-drawer-nav-item *ngFor="let deepItem of nestedItem.items"
                               [title]="deepItem.title"
                               [selected]="state.selected === deepItem.title"
                               (select)="deepItem.onSelect(); setActive(deepItem, state);">
                            </pxb-drawer-nav-item>
                        </pxb-drawer-nav-item>
                     </pxb-drawer-nav-item>
                  </pxb-drawer-nav-group>
               </pxb-drawer-body>
            </pxb-drawer>
            <div pxb-content>
                <mat-toolbar [style.backgroundColor]="blue" [style.color]="white" 
                    style="border-left: 1px solid white; padding-left: 24px">
                    <button *ngIf="variant === 'temporary'" 
                        mat-icon-button style="margin-right: 16px" (click)="state.open = true">
                        <mat-icon>menu</mat-icon>
                    </button>
                    <h2>Drawer Layout Demo</h2>
                </mat-toolbar>
                <div style="font-size: 60px; padding: 24px">App content goes here.</div>
            </div>
        </pxb-drawer-layout>
      `,
    props: {
        direction: getDirection,
        blue: Colors.blue[500],
        white: Colors.white[50],
        navItems: items,
        state: { selected: undefined, open: true },
        width: number('width', 350, {
            range: true,
            min: 200,
            max: 600,
            step: 5,
        }),
        variant: select('variant', ['persistent', 'temporary', 'permanent'], 'persistent'),
        toggleDrawer: (state): void => {
            state.open = !state.open;
        },
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) {
                // Only selects items that do not have nested nav items.
                state.selected = item.title;
            }
        },
    },
});

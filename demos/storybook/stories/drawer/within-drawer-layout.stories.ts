import { number, select } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { nestedNavGroup } from './with-nested-nav-items.stories';
import { DrawerNavItem } from '@pxblue/angular-components';
import { getDirection } from '@pxblue/storybook-rtl-addon';
const headerImage = require('../../assets/topology_40.png');
const railImage = require('../../assets/touchscreen_large.svg');

const items = [...nestedNavGroup];

export const withinDrawerLayout = (): any => ({
    styles: [
        `
        :host { 
            height: 100%; 
            width: 100%;
        }
        ::ng-deep .pxb-drawer-header-background {
            background-image: url(${headerImage});
            width: 360px;
        }
        `,
    ],
    template: `
        <pxb-drawer-layout [dir]="direction()" [width]="width" [variant]="variant" (backdropClick)="state.open = false">
            <pxb-drawer pxb-drawer [open]="state.open">
               <pxb-drawer-header *ngIf="variant !== 'rail'" title="PX Blue Drawer" subtitle="in a PX Blue Drawer Layout">
                 <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
                   <mat-icon>menu</mat-icon>
                 </button>
               </pxb-drawer-header>
               <pxb-drawer-header *ngIf="variant === 'rail'">
                    <img pxb-title-content [src]="railImage" style="height: 68px; width: 72px" />
               </pxb-drawer-header>
               <pxb-drawer-body>
                  <pxb-drawer-nav-group>
                       <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                         [title]="navItem.title"
                         [selected]="true"
                         (select)="navItem.onSelect(); setActive(navItem, state);">
                         <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                         <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                           [title]="nestedItem.title"
                           (select)="nestedItem.onSelect(); setActive(nestedItem, state);">
                            <pxb-drawer-nav-item *ngFor="let deepItem of nestedItem.items"
                               [title]="deepItem.title"
                               (select)="deepItem.onSelect(); setActive(deepItem, state);">
                            </pxb-drawer-nav-item>
                        </pxb-drawer-nav-item>
                     </pxb-drawer-nav-item>
                  </pxb-drawer-nav-group>
               </pxb-drawer-body>
            </pxb-drawer>
            <div pxb-content>
                <mat-toolbar [style.backgroundColor]="blue" [style.color]="white" 
                    style="border-left: 1px solid white; padding: 0 24px">
                    <button *ngIf="variant === 'temporary'" mat-icon-button 
                        [style.marginRight.px]="direction() === 'rtl' ? -16 : 16"
                        [style.marginLeft.px]="direction() === 'rtl' ? 16 : -16"
                        (click)="state.open = true">
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
        state: { open: true },
        width: number('width', 350, {
            range: true,
            min: 200,
            max: 600,
            step: 5,
        }),
        headerImage: headerImage,
        railImage: railImage,
        variant: select('variant', ['persistent', 'temporary', 'permanent', 'rail'], 'persistent'),
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

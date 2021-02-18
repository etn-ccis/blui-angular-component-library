import { boolean } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { navItems } from './basic-config.stories';
import { DrawerNavItem } from '@pxblue/angular-components';
import { getDirection } from '@pxblue/storybook-rtl-addon';
const items = [...navItems];

export const withinDrawerLayoutRail = (): any => ({
    styles: [
        `
        :host { 
            height: 100%; 
            width: 100%;
        }`,
    ],
    template: `
        <pxb-drawer-layout [dir]="direction()" variant="rail" (backdropClick)="state.open = false">
            <pxb-drawer pxb-drawer [open]="state.open" [sideBorder]="sideBorder" [condensed]="condensed">
               <pxb-drawer-body>
                  <pxb-drawer-nav-group>
                     <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                       [divider]="divider"
                       [title]="navItem.title"
                       [selected]="state.selected === navItem.title"
                       (select)="navItem.onSelect(); setActive(navItem, state);">
                       <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                     </pxb-drawer-nav-item>
                  </pxb-drawer-nav-group>
               </pxb-drawer-body>
               <pxb-drawer-footer>
                    <div style="height: 56px; display: flex; align-items: center; justify-content: center">
                        <i class="pxb-eaton" style="font-size: 14px;"></i>
                    </div>             
               </pxb-drawer-footer>
            </pxb-drawer>
            <div pxb-content>
                <mat-toolbar [style.backgroundColor]="blue" [style.color]="white" 
                    style="padding: 0 24px">
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
        toggleDrawer: (state): void => {
            state.open = !state.open;
        },
        sideBorder: boolean('sideBorder', true),
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            state.selected = item.title;
        },
        condensed: boolean('condensed', true),
        divider: boolean('divider', false),
    },
});

import {navItems} from "./basic-config.stories";
import {boolean, select} from "@storybook/addon-knobs";
import * as Colors from '@pxblue/colors';

export const withinDrawerLayout = (): any => ({
    template: `
        <pxb-drawer-layout [variant]="variant" (backdropClick)="state.open = false">
            <pxb-drawer [open]="state.open">
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
                        (select)="navItem.onSelect(); setActive(navItem.title, state);">
                        <mat-icon icon>{{ navItem.icon }}</mat-icon>
                      </pxb-drawer-nav-item>
                  </pxb-drawer-nav-group>
               </pxb-drawer-body>
            </pxb-drawer>
            <div content>
                <mat-toolbar [style.backgroundColor]="blue" [style.color]="white" 
                    style="border-left: 1px solid white; padding-left: 24px">
                    <button *ngIf="variant === 'temporary'" 
                        mat-icon-button style="margin-right: 16px" (click)="state.open = true">
                        <mat-icon>menu</mat-icon>
                    </button>
                    <h2>Drawer Layout Demo</h2>
                </mat-toolbar>
                <div style="font-size: 60px; padding: 24px">Body content goes here.</div>
            </div>
        </pxb-drawer-layout>
      `,
    props: {
        blue: Colors.blue[500],
        white: Colors.white[50],
        navItems: navItems,
        state: { selected: undefined, open: true },
        variant: select('variant', ['persistent', 'temporary', 'permanent'], 'temporary'),
        toggleDrawer: (state): void => {
            state.open = !state.open;
        },
        setActive: (id: string, state: { selected: string }): void => {
            state.selected = id;
        },
    },
});

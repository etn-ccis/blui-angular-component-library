import { boolean, number, select } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { navItems } from './basic-config.stories';
import { DrawerNavItem } from '@pxblue/angular-components';
import { getDirection } from '@pxblue/storybook-rtl-addon';
const headerImg = require('../../assets/eaton-condensed.png');
const items = [...navItems];

export const withinDrawerLayout = (): any => ({
    styles: [
        `
        :host { 
            height: 100%; 
            width: 100%;
        }
        .scale-button {
            height: 2.5rem;
            width: 2.5rem;
            line-height: 2.5rem;
        }
        .scale-icon {
            font-size: 1.5rem;
            width: 1.5rem;
        }
        .app-bar {
            padding: 0 24px;
            height: 4rem;
        }
        @media (max-width: 599px) {
            .app-bar {
                height: 3.5rem;
            }
        }
`,
    ],
    template: `
        <pxb-drawer-layout [dir]="direction()" [width]="width" [variant]="variant" (backdropClick)="state.open = false">
            <pxb-drawer pxb-drawer [open]="state.open" [sideBorder]="sideBorder">
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
                     </pxb-drawer-nav-item>
                  </pxb-drawer-nav-group>
               </pxb-drawer-body>
            </pxb-drawer>
            <div pxb-content>
                <mat-toolbar [style.backgroundColor]="blue" [style.color]="white" class="app-bar">
                    <button *ngIf="variant === 'temporary'" mat-icon-button 
                        class="scale-button"
                        [style.marginRight.px]="direction() === 'rtl' ? -16 : 16"
                        [style.marginLeft.px]="direction() === 'rtl' ? 16 : -16"
                        (click)="state.open = true">
                        <mat-icon class="scale-icon">menu</mat-icon>
                    </button>
                    <div class="mat-title">Drawer Layout Demo</div>
                </mat-toolbar>
                <div class="mat-body-1" style="padding: 24px">App content goes here.</div>
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
        headerImg: headerImg,
        variant: select('variant', ['persistent', 'temporary', 'permanent'], 'persistent'),
        toggleDrawer: (state): void => {
            state.open = !state.open;
        },
        sideBorder: boolean('sideBorder', true),
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) {
                // Only selects items that do not have nested nav items.
                state.selected = item.title;
            }
        },
    },
});

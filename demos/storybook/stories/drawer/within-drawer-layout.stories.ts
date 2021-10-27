import { boolean, number, select } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { navItems } from './basic-config.stories';
import { DrawerNavItem } from '@brightlayer-ui/angular-components';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
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
        <blui-drawer-layout [dir]="direction()" [width]="width" [variant]="variant" (backdropClick)="state.open = false">
            <blui-drawer blui-drawer [open]="state.open" [sideBorder]="sideBorder">
               <blui-drawer-header title="PX Blue Drawer" subtitle="in a PX Blue Drawer Layout">
                 <button blui-icon mat-icon-button (click)="toggleDrawer(state)">
                   <mat-icon>menu</mat-icon>
                 </button>
               </blui-drawer-header>
               <blui-drawer-body>
                  <blui-drawer-nav-group>
                     <blui-drawer-nav-item *ngFor="let navItem of navItems"
                       [title]="navItem.title"
                       [selected]="state.selected === navItem.title"
                       (select)="navItem.onSelect(); setActive(navItem, state);">
                       <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                     </blui-drawer-nav-item>
                  </blui-drawer-nav-group>
               </blui-drawer-body>
            </blui-drawer>
            <div blui-content>
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
        </blui-drawer-layout>
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

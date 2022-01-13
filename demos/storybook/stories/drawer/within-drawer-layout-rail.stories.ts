import { boolean } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { navItems } from './basic-config.stories';
import { DrawerNavItem } from '@brightlayer-ui/angular-components';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
const items = [...navItems];

export const withinDrawerLayoutRail = (): any => ({
    styles: [
        `
        :host { 
            height: 100%; 
            width: 100%;
        }
        .app-bar {
            padding: 0 24px;
            height: 4rem;
        }
        @media (max-width: 599px) {
            .app-bar {
                height: 3.5rem;
            }
        }`,
    ],
    template: `
        <blui-drawer-layout [dir]="direction()" variant="rail" (backdropClick)="state.open = false">
            <blui-drawer blui-drawer [open]="state.open" [sideBorder]="sideBorder"
               [condensed]="condensed" [disableRailTooltip]="disableRailTooltip">
               <blui-drawer-body>
                  <blui-drawer-nav-group>
                     <blui-drawer-nav-item *ngFor="let navItem of navItems"
                       [divider]="divider"
                       [title]="navItem.title"
                       [selected]="state.selected === navItem.title"
                       (select)="navItem.onSelect(); setActive(navItem, state);">
                       <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                     </blui-drawer-nav-item>
                  </blui-drawer-nav-group>
               </blui-drawer-body>
               <blui-drawer-footer>
                    <div style="height: 56px; display: flex; align-items: center; justify-content: center">
                        <i class="blui-eaton" style="font-size: 14px;"></i>
                    </div>             
               </blui-drawer-footer>
            </blui-drawer>
            <div blui-content>
                <mat-toolbar color="primary" class="app-bar">
                    <button *ngIf="variant === 'temporary'" mat-icon-button 
                        [style.marginRight.px]="direction() === 'rtl' ? -16 : 16"
                        [style.marginLeft.px]="direction() === 'rtl' ? 16 : -16"
                        (click)="state.open = true">
                        <mat-icon>menu</mat-icon>
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
        toggleDrawer: (state): void => {
            state.open = !state.open;
        },
        sideBorder: boolean('sideBorder', true),
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            state.selected = item.title;
        },
        condensed: boolean('condensed', true),
        divider: boolean('divider', false),
        disableRailTooltip: boolean('disableRailTooltip', false),
    },
});

import { navItems } from './basic-config.stories';
import { boolean } from '@storybook/addon-knobs';

const bgImage = require('../../assets/EatonLogo.svg');

export const withFooter = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
           <pxb-drawer-header title="PX Blue Drawer" subtitle="with a footer">
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
                    hey wtf
                  </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
           </pxb-drawer-body>
           <pxb-drawer-footer *ngIf="showFooter" [divider]="divider">
             <img [src]="bgImage" width="170" style="align-self: center; padding: 16px" />
           </pxb-drawer-footer>
        </pxb-drawer>
      `,
    props: {
        navItems: navItems,
        bgImage: bgImage,
        showFooter: boolean('Show Footer', true),
        divider: boolean('divider', true),
    },
});

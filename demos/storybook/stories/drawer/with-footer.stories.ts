import { navItems } from './basic-config.stories';
import { boolean } from '@storybook/addon-knobs';

const bgImage = require('../../assets/EatonLogo.svg');

export const withFooter = (): any => ({
    template: `
        <blui-drawer [open]="state.open">
           <blui-drawer-header title="Brightlayer UI Drawer" subtitle="with a footer">
             <button blui-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </blui-drawer-header>
           <blui-drawer-body>
              <blui-drawer-nav-group>
                  <blui-drawer-nav-item *ngFor="let navItem of navItems"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                    hey wtf
                  </blui-drawer-nav-item>
              </blui-drawer-nav-group>
           </blui-drawer-body>
           <blui-drawer-footer *ngIf="showFooter" [divider]="divider" [hideContentOnCollapse]="hideContentOnCollapse">
             <img [src]="bgImage" width="170" style="align-self: center; padding: 16px" />
           </blui-drawer-footer>
        </blui-drawer>
      `,
    props: {
        navItems: navItems,
        bgImage: bgImage,
        showFooter: boolean('Show Footer', true),
        hideContentOnCollapse: boolean('hideContentOnCollapse', true),
        divider: boolean('divider', true),
    },
});

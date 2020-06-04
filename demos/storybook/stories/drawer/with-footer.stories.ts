import {navItems} from "./basic-config.stories";

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
              <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                [title]="navItem.title"
                [selected]="state.selected === navItem.itemID"
                (click)="navItem.onClick(); setActive(navItem.itemID, state);">
                <mat-icon icon>{{ navItem.icon }}</mat-icon>
                hey wtf
              </pxb-drawer-nav-item>
           </pxb-drawer-body>
           <pxb-drawer-footer>
             <mat-divider></mat-divider>
             <img [src]="bgImage" width="170" style="align-self: center; padding: 16px" />
           </pxb-drawer-footer>
        </pxb-drawer>
      `,
    props: {
        navItems: navItems,
        bgImage: bgImage
    },
});

import { navItems } from './basic-config.stories';

export const withSubheader = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
          <pxb-drawer-header title="PX Blue Drawer" subtitle="with a subtitle">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
          </pxb-drawer-header>
          <pxb-drawer-subheader>
              <mat-form-field style="width: 100%; padding: 8px 16px; box-sizing: border-box">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search criteria">
                <mat-icon matSuffix>search</mat-icon>
                <mat-hint>The subheader can be used for custom content.</mat-hint>
              </mat-form-field>
          </pxb-drawer-subheader>
          <pxb-drawer-body>
              <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                [title]="navItem.title"
                [selected]="state.selected === navItem.itemID"
                (select)="navItem.onSelect(); setActive(navItem.itemID, state);">
                <mat-icon icon>{{ navItem.icon }}</mat-icon>
              </pxb-drawer-nav-item>
            </pxb-drawer-body>
        </pxb-drawer>
      `,
    props: {
        navItems: navItems,
    },
});

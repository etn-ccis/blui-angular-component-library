import {navItems} from "./basic-config.stories";

export const withinDrawerLayout = (): any => ({
    template: `
        <pxb-drawer-layout [variant]="'persistent'">
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
            
            <div content style="height: 100%; width: 100%">Hello I am the body</div>
        
        </pxb-drawer-layout>
      `,
    props: {
        navItems: navItems,
        state: { selected: undefined, open: true },
        toggleDrawer: (state): void => {
            state.open = !state.open;
        },
    },
});

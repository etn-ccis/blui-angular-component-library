import { navItems } from './basic-config.stories';

const bgImage = require('../../assets/farm.jpg');

export const withCustomHeader = (): any => ({
    styles: [
        `::ng-deep .pxb-drawer .pxb-drawer-header {
          background-color: unset;
       }
       ::ng-deep .pxb-drawer .pxb-drawer-header-background {
          background-image: url(${bgImage});
        }
       `,
    ],
    template: `
        <pxb-drawer [open]="state.open">
          <pxb-drawer-header>
            <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
                <mat-icon>menu</mat-icon>
            </button>
            <div pxb-title-content *ngIf="state.open">
                <div class="mat-h4" style="margin-bottom: -8px; margin-top: 12px">Customizable</div>
                <div class="mat-h2" style="margin-top: 0">Header Content</div>
            </div>
          </pxb-drawer-header>
          <pxb-drawer-body>
              <pxb-drawer-nav-group>
                  <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                  </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
            </pxb-drawer-body>
        </pxb-drawer>
      `,
    props: {
        navItems: navItems,
    },
});

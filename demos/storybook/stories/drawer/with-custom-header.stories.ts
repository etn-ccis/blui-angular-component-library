import { navItems } from './basic-config.stories';
import { boolean } from '@storybook/addon-knobs';

const bgImage = require('../../assets/farm.jpg');

export const withCustomHeader = (): any => ({
    styles: [
        `::ng-deep .blui-drawer .blui-drawer-header {
          background-color: unset;
       }
       ::ng-deep .blui-drawer .blui-drawer-header-background {
          background-image: url(${bgImage});
        }
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0;
          width: 100%;
        }
       `,
    ],
    template: `
        <blui-drawer [open]="state.open">
          <blui-drawer-header>
            <button *ngIf="!hideMenuIcon" blui-icon mat-icon-button (click)="toggleDrawer(state)">
                <mat-icon>menu</mat-icon>
            </button>
            <div blui-title-content *ngIf="state.open" class="header-content">
                <div>
                   <div class="mat-h4" style="margin-bottom: -8px; margin-top: 8px">Customizable</div>
                   <div class="mat-h2" style="margin: 0">Header Content</div>
                </div>
                <blui-list-item-tag label="V1.0.3" style="margin-bottom: 16px"></blui-list-item-tag>
            </div>
          </blui-drawer-header>
          <blui-drawer-body>
              <blui-drawer-nav-group>
                  <blui-drawer-nav-item *ngFor="let navItem of navItems"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                  </blui-drawer-nav-item>
              </blui-drawer-nav-group>
            </blui-drawer-body>
        </blui-drawer>
      `,
    props: {
        navItems: navItems,
        hideMenuIcon: boolean('Hide Menu Icon', false),
    },
});

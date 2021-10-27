import { navItems } from './basic-config.stories';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';

const valuesObj = {
    filter: 'Filter',
    card: 'Card',
};
const optionsObj = {
    display: 'inline-radio' as OptionsKnobOptionsDisplay,
};

export const withSubheader = (): any => ({
    template: `
        <blui-drawer [open]="state.open">
           <blui-drawer-header title="PX Blue Drawer" subtitle="with a subtitle">
             <button blui-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
          </blui-drawer-header>
           <blui-drawer-subheader [divider]="divider" [hideContentOnCollapse]="hideContentOnCollapse">
              <mat-form-field *ngIf="content === 'Filter'" appearance="outline"
                style="width: 100%; padding: 8px 16px; box-sizing: border-box">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search criteria">
                <mat-icon matSuffix>search</mat-icon>
                <mat-hint style="min-width: 360px">The subheader can be used for custom content.</mat-hint>
              </mat-form-field>
              <mat-card *ngIf="content === 'Card'" style="font-weight: 500; width: 100%; min-width: 350px;">
                Sample Content Goes Here
              </mat-card>
          </blui-drawer-subheader>
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
        colors: Colors,
        navItems: navItems,
        divider: boolean('divider', true),
        hideContentOnCollapse: boolean('hideContentOnCollapse', true),
        content: optionsKnob('Subheader Content', valuesObj, 'Filter', optionsObj),
    },
});

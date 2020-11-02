import { navItems } from './basic-config.stories';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

const valuesObj = {
    filter: 'Filter',
    card: 'Card',
};
const optionsObj = {
    display: 'inline-radio' as OptionsKnobOptionsDisplay,
};

export const withSubheader = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
           <pxb-drawer-header title="PX Blue Drawer" subtitle="with a subtitle">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
          </pxb-drawer-header>
           <pxb-drawer-subheader [divider]="divider" [hideContentOnCollapse]="hideContentOnCollapse">
              <mat-form-field *ngIf="content === 'Filter'"
                style="width: 100%; padding: 8px 16px; box-sizing: border-box">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search criteria">
                <mat-icon matSuffix>search</mat-icon>
                <mat-hint>The subheader can be used for custom content.</mat-hint>
              </mat-form-field>
              <mat-card *ngIf="content === 'Card'" style="font-weight: 500; width: 100%; min-width: 350px;" 
                [style.backgroundColor]="colors.gray[50]">
                Sample Content Goes Here
              </mat-card>
          </pxb-drawer-subheader>
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
        colors: Colors,
        navItems: navItems,
        divider: boolean('divider', true),
        hideContentOnCollapse: boolean('hideContentOnCollapse', true),
        content: optionsKnob('Subheader Content', valuesObj, 'Filter', optionsObj),
    },
});

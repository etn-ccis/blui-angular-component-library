import { navItems } from './basic-config.stories';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { boolean, optionsKnob } from '@storybook/addon-knobs';

const valuesObj = {
    filter: 'Filter',
    accordion: 'Accordion',
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
           <pxb-drawer-subheader [divider]="divider">
              <mat-form-field *ngIf="content === 'Filter'"
                style="width: 100%; padding: 8px 16px; box-sizing: border-box">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search criteria">
                <mat-icon matSuffix>search</mat-icon>
                <mat-hint>The subheader can be used for custom content.</mat-hint>
              </mat-form-field>
              <mat-accordion *ngIf="content === 'Accordion'">
                 <mat-expansion-panel style="min-width: 360px" (click)="toggleExpansion(accordionState)" [expanded]="accordionState.open && state.open">
                    <mat-expansion-panel-header [style.margin.px]="16">
                       <mat-panel-title>
                          Expansion Panel 1
                       </mat-panel-title>
                    </mat-expansion-panel-header>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </mat-expansion-panel>
              </mat-accordion>
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
        accordionState: { open: false },
        navItems: navItems,
        divider: boolean('divider', true),
        content: optionsKnob('Subheader Content', valuesObj, 'Filter', optionsObj),
        toggleExpansion: (state): void => { state.open = !state.open },
    },
});

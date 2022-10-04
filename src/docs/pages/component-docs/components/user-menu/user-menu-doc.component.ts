import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { COMPONENT_NAV_ITEMS } from 'src/docs/navigation/nav-items';
import { FROM_LIST } from './examples/from-list.component';
import { NON_TEXT_AVATAR } from './examples/non-text-avatar.component';
import { MENU_HEADER } from './examples/menu-header.component';
import { CUSTOM_HEADER } from './examples/custom-header.component';
import { WITHIN_TOOLBAR } from './examples/within-toolbar.component';
import { PLACEMENT } from './examples/placement-options.component';
import { BOTTOMSHEET } from './examples/bottomsheet.component';
import { UserMenuPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-user-menu-doc',
    template: `
        <app-component-doc-scaffold mdFileName="UserMenu.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">User Menu</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> is a combination of an avatar and menu that is used to
                        hold user account-related information and actions.
                        It is typically located in the top corner of your application within a toolbar.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-in-toolbar-user-menu-demo></app-in-toolbar-user-menu-demo>                    
                    </div>
                    <app-example-code [snippet]="WITHIN_TOOLBAR" dataLine="4-11"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/within-toolbar"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="WITHIN_TOOLBAR"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Alternative Avatar Formats</div>
                    <div class="example-description">
                        The User Menu supports multiple avatar formats (text, icon, image).
                    </div>
                    <div class="example-demo-wrapper">
                        <app-non-text-avatar-user-menu-demo></app-non-text-avatar-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="NON_TEXT_AVATAR" dataLine="2, 12"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/non-text-avatar"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="NON_TEXT_AVATAR"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Adding a Menu Header</div>
                    <div class="example-description">
                        You can add a header to the top of the menu by passing in 
                        values for <code>menuTitle</code> and <code>menuSubtitle</code>.
                        The avatar will also appear in the menu header.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-menu-header-user-menu-demo></app-menu-header-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="MENU_HEADER" dataLine="3-4"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/menu-header"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="MENU_HEADER"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Customizing the Menu Header</div>
                    <div class="example-description">
                        If you want to supply your own custom menu header, you 
                        can pass in content via  <code>blui-menu-header</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-custom-header-user-menu-demo></app-custom-header-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="CUSTOM_HEADER" dataLine="2-9"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/custom-header"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="CUSTOM_HEADER"></app-copy-code-button>
                    </div>
                </div>

                <!--
                <div class="example-section">
                    <div class="example-heading">Adjusting the Overlay Placement</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> inherits the <code>positions</code> input from
                        <a href="https://material.angular.io/cdk/overlay/api#ConnectionPositionPair" target="_blank"
                            >Angular Material's Overlay API</a
                        >
                        to change where the overlay menu originates from.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-placement-user-menu-demo></app-placement-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="PLACEMENT" dataLine="1"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/placement-options"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="PLACEMENT"></app-copy-code-button>
                    </div>
                </div> -->

                <div class="example-section">
                    <div class="example-heading">Using a Bottom Sheet</div>
                    <div class="example-description">
                        On larger screens the User Menu opens as a dropdown, but on smaller screens it opens as a bottomsheet.
                        You can customize the point where this transition occurs via the <code>useBottomSheetAt</code> input (default of 600px).
                    </div>
                    <div class="example-demo-wrapper">
                        <app-bottom-sheet-user-menu-demo></app-bottom-sheet-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="BOTTOMSHEET" dataLine="1"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/bottomsheet"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="BOTTOMSHEET"></app-copy-code-button>
                    </div>
                </div>

                <!--
                <div class="example-section">
                    <div class="example-heading">User Menu within a Toolbar</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> is commonly placed within a
                        <code>&lt;mat-toolbar&gt;</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-in-toolbar-user-menu-demo></app-in-toolbar-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="WITHIN_TOOLBAR" dataLine="8-24"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="user-menu/examples/within-toolbar"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="WITHIN_TOOLBAR"></app-copy-code-button>
                    </div>
                </div>
                -->
            </div>

            <app-user-menu-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-user-menu-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./user-menu-doc.component.scss'],
})
export class UserMenuDocComponent {
    routes = COMPONENT_NAV_ITEMS;

    BASIC = BASIC;
    FROM_LIST = FROM_LIST;
    NON_TEXT_AVATAR = NON_TEXT_AVATAR;
    MENU_HEADER = MENU_HEADER;
    CUSTOM_HEADER = CUSTOM_HEADER;
    WITHIN_TOOLBAR = WITHIN_TOOLBAR;
    PLACEMENT = PLACEMENT;
    BOTTOMSHEET = BOTTOMSHEET;
    generatedCode: string;

    requiredProps: Partial<UserMenuPlaygroundKnobs> = {
        open: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Controls whether the user menu is opened or closed',
        },
    };

    optionalProps: Partial<UserMenuPlaygroundKnobs> = {
        avatarValue: {
            value: 'AV',
            type: 'string',
            hint: 'Text value for avatar',
        },
        menuTitle: {
            value: 'Menu Title',
            type: 'string',
            hint: 'Title shown when menu is open',
        },
        menuSubtitle: {
            value: 'Menu Subtitle',
            type: 'string',
            hint: 'Subtitle shown when menu is open',
        },
        useBottomSheetAt: {
            value: 600,
            componentDefault: 600,
            type: 'number',
            hint: 'Window pixel width at which the responsive bottom sheet menu is triggered',
            range: { min: 0, max: 2500, step: 100, tickInterval: 1 },
        },
    };

    otherProps: Partial<UserMenuPlaygroundKnobs> = {
        showAvatarImage: {
            label: 'Show Avatar Image',
            value: false,
            type: 'boolean',
            hint: '',
        },
        /*
        overlayX: {
            value: 'start',
            type: 'select',
            hint: 'X-axis attachment point for connected overlay. ',
            options: ['start', 'end', 'center'],
        },
        overlayY: {
            value: 'top',
            type: 'select',
            hint: 'Y-axis attachment point for connected overlay',
            options: ['top', 'bottom', 'center'],
        },
        originX: {
            value: 'start',
            type: 'select',
            hint: 'X-axis attachment point for connected overlay origin',
            options: ['start', 'end', 'center'],
        },
        originY: {
            value: 'top',
            type: 'select',
            hint: 'Y-axis attachment point for connected overlay origin',
            options: ['top', 'bottom', 'center'],
        }, */
    };
    allProps = Object.assign({}, this.requiredProps, this.optionalProps, this.otherProps);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.requiredProps,
            defaultExpanded: true,
        },
        {
            title: 'Optional Properties',
            knobs: this.optionalProps,
            defaultExpanded: true,
        },
        {
            title: 'Other Properties',
            knobs: this.otherProps,
            defaultExpanded: false,
        },
    ];
}

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
                    <div class="example-heading">Basic User Menu</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> accepts an <code>avatar</code> input and a
                        <code>blui-menu-body</code> overlay content. The <code>open</code> input is used to manage
                        state.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-user-menu-demo></app-basic-user-menu-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">User Menu with non-text Avatars</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> supports non-text avatars.
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
                    <div class="example-heading">User Menu with a Menu Header</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> can create an optional menu header through the
                        <code>menuTitle</code> and <code>menuSubtitle</code> inputs.
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
                    <div class="example-heading">User Menu with a Custom Header</div>
                    <div class="example-description">
                        A custom menu header can be added by providing a <code>blui-menu-header</code> content.
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

                <div class="example-section">
                    <div class="example-heading">User Menu with Placement Options</div>
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
                </div>

                <div class="example-section">
                    <div class="example-heading">Responsive User Menu</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> by default renders (or transitions if already opened) as
                        a bottomsheet if the window width is less than 600px. The <code>useBottomSheetAt</code> property
                        is used to adjust the screen width where this transition occurs.
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

import {Component} from '@angular/core';
import {BASIC} from './examples/basic.component';
import {COMPONENT_NAV_ITEMS} from 'src/docs/navigation/nav-items';
import { FROM_LIST } from './examples/from-list.component';
import { NON_TEXT_AVATAR } from './examples/non-text-avatar.component';
import { MENU_HEADER } from './examples/menu-header.component';
import {CUSTOM_HEADER} from "./examples/custom-header.component";

@Component({
    selector: 'app-user-menu-doc',
    template: `
        <app-component-doc-scaffold mdFileName="Hero.md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic User Menu</div>
                    <div class="example-description">
                        The <code>&lt;blui-user-menu&gt;</code> accepts an <code>avatar</code> input and a
                        <code>blui-menu-body</code> overlay content.  The <code>open</code> input is used to manage state.
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
                        The <code>&lt;blui-user-menu&gt;</code> can create an optional 
                        menu header through the <code>menuTitle</code> and <code>menuSubtitle</code> inputs.
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
            </div>
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
}

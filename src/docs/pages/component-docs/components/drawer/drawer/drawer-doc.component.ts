import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { ANATOMY } from './examples/anatomy.component';
import { DRAWER_NAV_ITEMS } from '../../../../../navigation/nav-items';
import { FROM_LIST } from './examples/from-list.component';
import { DrawerPlaygroundKnobs } from './examples/playground.component';
import { TabName } from '../../../shared/scaffold/scaffold.component';

@Component({
    selector: 'app-drawer-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer&gt;</code> is a navigation menu that appears to the side of an
                        application.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-drawer-demo></app-basic-drawer-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Drawer Anatomy</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer&gt;</code> can be broken down into the following subsections:

                        <ul>
                            <li>
                                <code>
                                    <a [routerLink]="createRouterLink(routes.drawerHeader.route)">
                                        &lt;blui-drawer-header&gt;
                                    </a>
                                </code>
                            </li>
                            <li>
                                <code>
                                    <a [routerLink]="createRouterLink(routes.drawerSubheader.route)">
                                        &lt;blui-drawer-subheader&gt;
                                    </a>
                                </code>
                            </li>
                            <li>
                                <code>
                                    <a [routerLink]="createRouterLink(routes.drawerBody.route)">
                                        &lt;blui-drawer-body&gt;
                                    </a>
                                </code>
                            </li>
                            <li>
                                <code>
                                    <a [routerLink]="createRouterLink(routes.drawerNavItem.route)">
                                        &lt;blui-drawer-nav-item&gt;
                                    </a>
                                </code>
                            </li>
                            <li>
                                <code>
                                    <a [routerLink]="createRouterLink(routes.drawerNavGroup.route)">
                                        &lt;blui-drawer-nav-group&gt;
                                    </a>
                                </code>
                            </li>
                            <li>
                                <code>
                                    <a [routerLink]="createRouterLink(routes.drawerFooter.route)">
                                        &lt;blui-drawer-footer&gt;
                                    </a>
                                </code>
                            </li>
                        </ul>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-anatomy-drawer-demo></app-anatomy-drawer-demo>
                    </div>
                    <app-example-code [snippet]="ANATOMY"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="ANATOMY"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Complex Drawer</div>
                    <div class="example-description">
                        As an alternative to structuring all navigation items within a template, navigation items can be
                        declared within a list and looped over to build a more complex <code>&lt;blui-drawer&gt;</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-from-list-drawer-demo></app-from-list-drawer-demo>
                    </div>
                    <app-example-code [snippet]="FROM_LIST"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="drawer/drawer/from-list"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="FROM_LIST"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <app-drawer-playground
                playground
                [inputs]="knobs"
                (codeChange)="generatedCode = $event"
            ></app-drawer-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-doc.component.scss'],
})
export class DrawerDocComponent {
    md: string;
    BASIC = BASIC;
    ANATOMY = ANATOMY;
    FROM_LIST = FROM_LIST;
    routes = DRAWER_NAV_ITEMS;
    generatedCode: string;

    /* Default playground knobs */
    knobs: DrawerPlaygroundKnobs = {
        disableActiveItemParentStyles: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'NavItems will not have a bold title when a child NavItem is selected',
        },
        openOnHover: {
            value: true,
            componentDefault: true,
            type: 'boolean',
            hint: 'Automatically open the drawer on hover when closed (persistent variant only)',
        },
        open: {
            value: true,
            type: 'boolean',
            hint: 'State for the drawer',
        },
        sideBorder: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Toggle a side border instead of shadow',
        },
        openOnHoverDelay: {
            value: 500,
            componentDefault: 500,
            type: 'number',
            hint: 'Delay in milliseconds before a hover event opens the drawer (persistent variant only)',
            range: { min: 50, max: 2000 },
        },
    };
    knobGroups = [
        {
            title: 'Properties',
            knobs: this.knobs,
            defaultExpanded: true,
        },
    ];

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            this.md = data.replace('images/', 'src/assets/md/images/');
        });
    }

    createRouterLink(route: string): string {
        const tab: TabName = 'examples';
        return `/${route}/${tab}`;
    }
}

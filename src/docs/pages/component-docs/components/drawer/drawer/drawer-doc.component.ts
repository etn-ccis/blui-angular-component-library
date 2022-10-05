import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { ANATOMY } from './examples/anatomy.component';
import { DRAWER_NAV_ITEMS } from '../../../../../navigation/nav-items';
import { FROM_LIST } from './examples/from-list.component';
import { DrawerPlaygroundKnobs } from './examples/playground.component';
import { Tab } from '../../../shared/scaffold/scaffold.component';

@Component({
    selector: 'app-drawer-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Drawer</div>
                    <div class="example-description">
                        The <code>&lt;blui-drawer&gt;</code> is a navigational element that holds links to different
                        pages in your application. It organizes content into:

                        <ul>
                            <li>
                                <a [routerLink]="createRouterLink(routes.drawerHeader.route)"> Drawer Header </a>
                            </li>
                            <li>
                                <a [routerLink]="createRouterLink(routes.drawerSubheader.route)"> Drawer Subheader </a>
                            </li>
                            <li>
                                <a [routerLink]="createRouterLink(routes.drawerBody.route)"> Drawer Body </a>
                            </li>
                            <li>
                                <a [routerLink]="createRouterLink(routes.drawerNavItem.route)"> Drawer Nav Item </a>
                            </li>
                            <li>
                                <a [routerLink]="createRouterLink(routes.drawerNavGroup.route)"> Drawer Nav Group </a>
                            </li>
                            <li>
                                <a [routerLink]="createRouterLink(routes.drawerFooter.route)"> Drawer Footer </a>
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
                    <div class="example-heading">Customizing the Drawer</div>
                    <div class="example-description">
                        The Drawer is highly customizable for organizing and styling your items. Navigation items can be
                        declared within a list to simplify your templates and to make customization easier.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-from-list-drawer-demo></app-from-list-drawer-demo>
                    </div>
                    <app-example-code [snippet]="FROM_LIST"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="drawer/drawer/examples/from-list"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="FROM_LIST"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <app-drawer-playground
                playground
                [inputs]="allKnobs"
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
    requiredKnobs: Partial<DrawerPlaygroundKnobs> = {
        open: {
            value: true,
            type: 'boolean',
            hint: 'State for the drawer',
        },
    };
    optionalKnobs: Partial<DrawerPlaygroundKnobs> = {
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
        openOnHoverDelay: {
            value: 500,
            componentDefault: 500,
            type: 'number',
            hint: 'Delay in milliseconds before a hover event opens the drawer (persistent variant only)',
            range: { min: 100, max: 1000, tickInterval: 1, step: 100 },
        },
        sideBorder: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Toggle a side border instead of shadow',
        },
    };
    allKnobs = Object.assign({}, this.requiredKnobs, this.optionalKnobs);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.requiredKnobs,
            defaultExpanded: true,
        },
        {
            title: 'Optional Properties',
            knobs: this.optionalKnobs,
            defaultExpanded: true,
        },
    ];

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}


    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer';
            const delimiterBottom = '## Drawer Layout';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }

    createRouterLink(route: string): string {
        const tab: Tab = 'examples';
        return `/${route}/${tab}`;
    }
}

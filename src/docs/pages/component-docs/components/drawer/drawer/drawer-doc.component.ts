import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { ANATOMY } from './examples/anatomy.component';
import { DRAWER_NAV_ITEMS } from '../../../../../navigation/nav-items';
import { TabName } from '../../../shared/scaffold/scaffold.component';
import { FROM_LIST } from './examples/from-list.component';

@Component({
    selector: 'app-drawer-doc',
    template: `
        <app-component-doc-scaffold [md]="md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer&gt;</code> is a navigation menu that appears to the side of an
                        application.
                        <!--<code>&lt;blui-drawer-header&gt;</code>, 
                        <code>&lt;blui-drawer-subheader&gt;</code>, 
                        <code>&lt;blui-drawer-body&gt;</code>,
                        <code>&lt;blui-drawer-nav-group&gt;</code>,
                        <code>&lt;blui-drawer-nav-item&gt;</code>,
                        <code>&lt;blui-drawer-footer&gt;</code> -->
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
                        <code>
                            <a [routerLink]="createRouterLink(routes.drawerHeader.route)"
                                >&lt;blui-drawer-header&gt;</a
                            > </code
                        >,

                        <code>
                            <a [routerLink]="createRouterLink(routes.drawerSubheader.route)"
                                >&lt;blui-drawer-subheader&gt;</a
                            > </code
                        >,

                        <code>
                            <a [routerLink]="createRouterLink(routes.drawerBody.route)"
                                >&lt;blui-drawer-body&gt;</a
                            > </code
                        >,

                        <code>
                            <a [routerLink]="createRouterLink(routes.drawerNavGroup.route)"
                                >&lt;blui-drawer-nav-group&gt;</a
                            > </code
                        >,

                        <code>
                            <a [routerLink]="createRouterLink(routes.drawerNavItem.route)"
                                >&lt;blui-drawer-nav-item&gt;</a
                            > </code
                        >, and
                        <code>
                            <a [routerLink]="createRouterLink(routes.drawerFooter.route)"
                                >&lt;blui-drawer-footer&gt;</a
                            > </code
                        >.
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
                    <div class="example-heading">Drawer Complex</div>
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
            <div playground></div>
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

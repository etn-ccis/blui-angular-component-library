import { Component } from '@angular/core';
import { FLEX } from './examples/flex.component';
import { PIXELS } from './examples/pixel.component';
import { DRAWER_NAV_ITEMS } from '../../../../navigation/nav-items';
import { TabName } from '../../shared/scaffold/scaffold.component';

@Component({
    selector: 'app-spacer-doc',
    template: `
        <app-component-doc-scaffold mdFileName="Spacer.md" [hasPlayground]="false">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Spacer with Flex</div>
                    <div class="example-description">
                        <div>
                            A <code>&lt;blui-spacer&gt;</code> is a utility component that adds space between elements
                            (such as
                            <a [routerLink]="createRouterLink(routes.drawerNavGroup.route)">Drawer Nav Groups</a>). The
                            Spacer is typically used in a flex layout.
                        </div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-flex-spacer-demo></app-flex-spacer-demo>
                    </div>
                    <app-example-code [snippet]="FLEX"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="FLEX"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Spacer with Pixels</div>
                    <div class="example-description">
                        A Spacer can also be given fixed dimensions instead of flex for static layouts.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-pixel-spacer-demo></app-pixel-spacer-demo>
                    </div>
                    <app-example-code [snippet]="PIXELS"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="PIXELS"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./spacer-doc.component.scss'],
})
export class SpacerDocComponent {
    routes = DRAWER_NAV_ITEMS;
    FLEX = FLEX;
    PIXELS = PIXELS;

    createRouterLink(route: string): string {
        const tab: TabName = 'examples';
        return `/${route}/${tab}`;
    }
}

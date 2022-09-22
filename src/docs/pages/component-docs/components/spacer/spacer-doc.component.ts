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
                            The <code>&lt;blui-spacer&gt;</code> adds space between elements. It accepts a
                            <code>flex</code> input that determines how much relative space to consume.
                        </div>
                        <div>
                            For a more contextual example, see how a <code>&lt;blui-spacer&gt;</code> can be used to
                            separate multiple
                            <code
                                ><a [routerLink]="createRouterLink(routes.drawerNavGroup.route)"
                                    >&lt;blui-drawer-nav-group&gt;</a
                                ></code
                            >.
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
                        The <code>&lt;blui-spacer&gt;</code> also accepts a <code>height</code> and <code>width</code>
                        input that specifies the number of pixels to consume.
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

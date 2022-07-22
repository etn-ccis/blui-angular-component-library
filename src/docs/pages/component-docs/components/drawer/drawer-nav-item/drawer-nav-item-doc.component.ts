import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { WITH_ICONS } from './examples/with-icons.component';
import { WITH_NESTED_ITEMS_NO_ICONS } from './examples/with-nested-items-no-icons.component';
import { WITH_NESTED_ITEMS } from './examples/with-nested-items.component';

@Component({
    selector: 'app-drawer-nav-item-doc',
    template: `
        <app-component-doc-scaffold [md]="md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer Items</div>
                    <div class="example-demo-wrapper">
                        <app-basic-drawer-nav-item-demo></app-basic-drawer-nav-item-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                </div>

                <div class="example-section">
                    <div class="example-heading">Drawer Items With Icons</div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-icons-demo></app-nav-item-with-icons-demo>
                    </div>
                    <app-example-code [snippet]="WITH_ICONS"></app-example-code>
                </div>

                <div class="example-section">
                    <div class="example-heading">Nested Drawer Items</div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-nested-items-demo style="margin: 0 12px;">
                        </app-nav-item-with-nested-items-demo>
                        <app-nav-item-with-nested-items-no-icons-demo style="margin: 0 12px;">
                        </app-nav-item-with-nested-items-no-icons-demo>
                    </div>
                    <app-example-code [snippet]="WITH_NESTED_ITEMS"></app-example-code>
                </div>
            </div>
            <div playground>
                <app-coming-soon></app-coming-soon>
            </div>
            <div knobs>
                <app-coming-soon></app-coming-soon>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-nav-item-doc.component.scss'],
})
export class DrawerNavItemDocComponent {
    md: string;
    BASIC = BASIC;
    WITH_ICONS = WITH_ICONS;
    WITH_NESTED_ITEMS = WITH_NESTED_ITEMS;
    WITH_NESTED_ITEMS_NO_ICONS = WITH_NESTED_ITEMS_NO_ICONS;

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Nav Item';
            const delimiterBottom = '## Drawer Footer';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }
}

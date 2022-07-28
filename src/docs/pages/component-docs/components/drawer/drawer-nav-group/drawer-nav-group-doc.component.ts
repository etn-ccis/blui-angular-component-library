import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { MULTIPLE_GROUPS } from './examples/multiple-groups.component';
import { SPACER } from './examples/with-spacer.component';

@Component({
    selector: 'app-drawer-nav-group-doc',
    template: `
        <app-component-doc-scaffold [md]="md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer Nav Group</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer-nav-group&gt;</code> is a wrapper used to group multiple <code>&lt;blui-drawer-nav-item&gt;</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-drawer-nav-group-demo></app-basic-drawer-nav-group-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Multiple Drawer Nav Groups</div>
                    <div class="example-description">
                        Multiple <code>&lt;blui-drawer-nav-group&gt;</code> can be passed into the 
                        <code>&lt;blui-drawer-body&gt;</code> to better organize navigation items.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-multiple-groups-nav-group-demo></app-multiple-groups-nav-group-demo>
                    </div>
                    <app-example-code [snippet]="MULTIPLE_GROUPS"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="MULTIPLE_GROUPS"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Spacing Nav Groups</div>
                    <div class="example-description">
                        A <code>&lt;blui-spacer&gt;</code> can be used to add space between navigation groups.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-spacer-between-nav-group-demo></app-spacer-between-nav-group-demo>
                    </div> 
                    <app-example-code [snippet]="SPACER"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="SPACER"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <div playground></div>
            <div code></div>
            <div knobs></div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-nav-group-doc.component.scss'],
})
export class DrawerNavGroupDocComponent {
    md: string;
    BASIC = BASIC;
    MULTIPLE_GROUPS = MULTIPLE_GROUPS;
    SPACER = SPACER;

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Nav Group';
            const delimiterBottom = '## Drawer Nav Item';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }
}

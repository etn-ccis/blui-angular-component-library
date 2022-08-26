import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { MULTIPLE_GROUPS } from './examples/multiple-groups.component';
import { SPACER } from './examples/with-spacer.component';
import { NavGroupPlaygroundKnobs } from './examples/playground.component';
import { CUSTOM_CONTENT } from './examples/with-custom-content.component';

@Component({
    selector: 'app-drawer-nav-group-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer Nav Group</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer-nav-group&gt;</code> is a wrapper used to group multiple
                        <code>&lt;blui-drawer-nav-item&gt;</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-drawer-nav-group-demo></app-basic-drawer-nav-group-demo>
                    </div>
                    <app-example-code [snippet]="BASIC" dataLine="3-6"></app-example-code>
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
                    <app-example-code [snippet]="MULTIPLE_GROUPS" dataLine="3-10"></app-example-code>
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
                    <app-example-code [snippet]="SPACER" dataLine="3-12"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="SPACER"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Custom Nav Group Title Content</div>
                    <div class="example-description">
                        Custom title content can be also be passed as a <code>blui-title-content</code> child.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-custom-content-nav-group-demo></app-custom-content-nav-group-demo>
                    </div>
                    <app-example-code [snippet]="CUSTOM_CONTENT" dataLine="4-11"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="CUSTOM_CONTENT"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <app-nav-group-playground
                playground
                [inputs]="knobs"
                (codeChange)="generatedCode = $event"
            ></app-nav-group-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-nav-group-doc.component.scss'],
})
export class DrawerNavGroupDocComponent {
    md: string;
    BASIC = BASIC;
    MULTIPLE_GROUPS = MULTIPLE_GROUPS;
    SPACER = SPACER;
    CUSTOM_CONTENT = CUSTOM_CONTENT;
    generatedCode: string;

    /* Default playground knobs */
    knobs: NavGroupPlaygroundKnobs = {
        title: {
            value: 'Title',
            type: 'string',
            componentDefault: '',
            hint: 'Nav group section title',
        },
        divider: {
            value: true,
            componentDefault: false,
            type: 'boolean',
            hint: 'Divider that appears under the title',
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
            const delimiterTop = '## Drawer Nav Group';
            const delimiterBottom = '## Drawer Nav Item';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }
}

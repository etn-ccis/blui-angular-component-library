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
                    <div class="example-heading">Drawer Nav Group</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer-nav-group&gt;</code> organizes related navigation items together.
                        You can have as many groups as needed. 
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
                    <div class="example-heading">Spacing the Groups</div>
                    <div class="example-description">
                        If you want to add an extra space between your groups, 
                        you can use a <code>&lt;blui-spacer&gt;</code> component.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-spacer-between-nav-group-demo></app-spacer-between-nav-group-demo>
                    </div>
                    <app-example-code [snippet]="SPACER" dataLine="7"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="SPACER"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Customizing the Title</div>
                    <div class="example-description">
                        By default, each nav group has a simple string as the title.
                        You can customize this and pass in your own content via <code>blui-title-content</code>.
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
            title: 'Optional Properties',
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

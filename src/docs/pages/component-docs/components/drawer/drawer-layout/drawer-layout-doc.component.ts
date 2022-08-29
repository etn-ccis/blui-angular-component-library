import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { PERMANENT } from './examples/permanent.component';
import { PERSISTENT } from './examples/persistent.component';
import { DrawerFooterPlaygroundKnobs } from './examples/playground.component';
import { RAIL } from './examples/rail.component';
import { TEMPORARY } from './examples/temporary.component';

@Component({
    selector: 'app-drawer-layout-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups">
            <div examples class="app-example drawer-layout-examples">
                <div class="example-section">
                    <div class="example-heading">Drawer Layout</div>
                    <div class="example-description">
                        The <code>&lt;blui-drawer-layout&gt;</code> manages how a <code>&lt;blui-drawer&gt;</code> and
                        its application content is displayed. It supports four different <code>variant</code> options -
                        'permanent', 'persistent', 'temporary', and 'rail'.
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Permanent Variant</div>
                    <div class="example-description">
                        The <code>permanent</code> variant is used when a <code>&lt;blui-drawer&gt;</code> is never
                        intended to dismiss from the screen.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-permanent-drawer-layout-demo></app-permanent-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="PERMANENT"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="PERMANENT"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Persistent Variant</div>
                    <div class="example-description">
                        The <code>persistent</code> variant allows a <code>&lt;blui-drawer&gt;</code> to open and close,
                        but never fully exits the screen.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-persistent-drawer-layout-demo></app-persistent-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="PERSISTENT"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="PERSISTENT"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Temporary Variant</div>
                    <div class="example-description">
                        The <code>temporary</code> variant allows a <code>&lt;blui-drawer&gt;</code> to enter the screen
                        from the left side as an overlay.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-temporary-drawer-layout-demo></app-temporary-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="TEMPORARY"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="TEMPORARY"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Rail Variant</div>
                    <div class="example-description">
                        The <code>rail</code> variant is similar to a collapsed <code>persistent</code> state.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-rail-drawer-layout-demo></app-rail-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="RAIL"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="RAIL"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <app-layout-playground
                playground
                [inputs]="knobs"
                (codeChange)="generatedCode = $event"
            ></app-layout-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-layout-doc.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DrawerLayoutDocComponent {
    md: string;
    PERMANENT = PERMANENT;
    PERSISTENT = PERSISTENT;
    TEMPORARY = TEMPORARY;
    RAIL = RAIL;
    generatedCode: string;

    /* Default playground knobs */
    knobs: DrawerFooterPlaygroundKnobs = {
        divider: {
            value: true,
            componentDefault: true,
            type: 'boolean',
            hint: 'Show divider under subheader',
        },
        hideContentOnCollapse: {
            value: true,
            componentDefault: true,
            type: 'boolean',
            hint: 'Hide content when the drawer is collapsed',
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
            const delimiterTop = '## Drawer Layout';
            const delimiterBottom = '## Drawer Header';
            const layoutSection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = layoutSection.replace('images/', 'src/assets/md/images/');
        });
    }
}

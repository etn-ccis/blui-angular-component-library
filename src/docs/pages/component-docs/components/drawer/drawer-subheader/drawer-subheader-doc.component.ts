import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { COMPLEX } from './examples/complex.component';

@Component({
    selector: 'app-subheader-body-doc',
    template: `<app-component-doc-scaffold [md]="md">
        <div examples class="app-example">
            <div class="example-section">
                <div class="example-heading">Basic Drawer Subheader</div>
                <div class="example-description">
                    The <code>&lt;blui-drawer-subheader&gt;</code> appears below the
                    <code>&lt;blui-drawer-header&gt;</code> and is an optional section for rendering custom content.
                </div>
                <div class="example-demo-wrapper">
                    <app-basic-drawer-subheader-demo></app-basic-drawer-subheader-demo>
                </div>
                <app-example-code [snippet]="BASIC" dataLine="3-5"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                </div>
            </div>
        </div>

        <div examples class="app-example">
            <div class="example-section">
                <div class="example-heading">Complex Drawer Subheader</div>
                <div class="example-demo-wrapper">
                    <app-complex-drawer-subheader-demo></app-complex-drawer-subheader-demo>
                </div>
                <app-example-code [snippet]="COMPLEX" dataLine="3-11"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="COMPLEX"></app-copy-code-button>
                </div>
            </div>
        </div>
        <div playground></div>
        <div code></div>
        <div knobs></div>
    </app-component-doc-scaffold> `,
    styleUrls: ['./drawer-subheader-doc.component.scss'],
})
export class DrawerSubheaderDocComponent {
    md: string;
    BASIC = BASIC;
    COMPLEX = COMPLEX;

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Subheader';
            const delimiterBottom = '## Drawer Body';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }
}
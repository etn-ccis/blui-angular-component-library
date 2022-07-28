import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { BASIC } from './examples/basic.component';

@Component({
    selector: 'app-drawer-footer-doc',
    template: `
        <app-component-doc-scaffold [md]="md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer Footer</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer-footer&gt;</code> appears at the bottom of a
                        <code>&lt;blui-drawer&gt;</code> can be used to project custom content.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-drawer-footer-demo></app-basic-drawer-footer-demo>
                    </div>
                    <app-example-code [snippet]="BASIC" dataLine="2"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <div playground></div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-footer-doc.component.scss'],
})
export class DrawerFooterDocComponent {
    md: string;
    BASIC = BASIC;

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Footer';
            const footerSection = this._splitService.subsection(data, delimiterTop);
            this.md = footerSection.replace('images/', 'src/assets/md/images/');
        });
    }
}

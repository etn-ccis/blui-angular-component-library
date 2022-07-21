import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';

@Component({
    selector: 'app-drawer-footer-doc',
    template: `
        <app-component-doc-scaffold [md]="md">
            <div examples>
                <app-coming-soon></app-coming-soon>
            </div>
            <div playground>
                <app-coming-soon></app-coming-soon>
            </div>
            <div knobs>
                <app-coming-soon></app-coming-soon>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-footer-doc.component.scss'],
})
export class DrawerFooterDocComponent {
    md: string;

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

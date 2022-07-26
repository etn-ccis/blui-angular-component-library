import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
    selector: 'app-drawer-doc',
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
    styleUrls: ['./drawer-doc.component.scss'],
})
export class DrawerDocComponent {
    md: string;

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            this.md = data.replace('images/', 'src/assets/md/images/');
        });
    }
}

import { Component, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
    selector: 'app-component-doc-scaffold',
    template: `
        <div class="scaffold-container">
            <div class="tabs-container">
                <mat-tab-group style="width: 100%">
                    <mat-tab label="Examples">
                        <ng-content select="[examples]"></ng-content>
                    </mat-tab>
                    <mat-tab label="API Docs">
                        <div class="doc-tab-content">
                            <markdown *ngIf="useDefaultDocs" [data]="md"></markdown>
                            <ng-content select="[docs]"></ng-content>
                        </div>
                    </mat-tab>
                    <mat-tab label="Playground">
                        <div class="playground-container">
                            <div style="width: 100%">
                                <ng-content select="[playground]"></ng-content>
                            </div>
                            <div class="props-container">
                                <div class="mat-headline" style="margin-bottom: 24px;">Props</div>
                                <ng-content select="[knobs]"></ng-content>
                            </div>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        </div>
    `,
    styleUrls: ['./scaffold.component.scss'],
})
export class ScaffoldComponent {
    @Input() useDefaultDocs = true;
    @Input() mdFileName: string;

    md: string;

    constructor(private readonly _markdownService: MarkdownService) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/${this.mdFileName}`).subscribe((data) => {
            this.md = data.replace('images/', 'src/assets/md/images/');
            console.log(this.md);

        });
    }
}

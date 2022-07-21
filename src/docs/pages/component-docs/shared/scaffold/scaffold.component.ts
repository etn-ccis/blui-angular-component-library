import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

type TabName = 'example' | 'api' | 'playground';

@Component({
    selector: 'app-component-doc-scaffold',
    template: `
        <div class="scaffold-container">
            <div class="tabs-container">
                <mat-tab-group
                    style="width: 100%"
                    animationDuration="0ms"
                    (selectedTabChange)="changeTab($event)"
                    [(selectedIndex)]="currentTabIndex"
                >
                    <mat-tab label="Examples">
                        <div class="examples-tab-content-wrapper">
                            <ng-content select="[examples]"></ng-content>
                        </div>
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
    encapsulation: ViewEncapsulation.None,
})
export class ScaffoldComponent {
    @Input() useDefaultDocs = true;
    @Input() mdFileName: string;
    @Input() md: string;
    currentTabIndex = 0;

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        if (this.mdFileName) {
            this._markdownService.getSource(`src/assets/md/${this.mdFileName}`).subscribe((data) => {
                this.md = data.replace('images/', 'src/assets/md/images/');
            });
        }
        this._route.queryParams.subscribe((params: Params) => {
            const tab = params.tab;
            if (tab) {
                this.currentTabIndex = this._tabNameToIndex(tab);
            }
        });
        const hasTabParam = this._router.url.includes('tab=');
        if (!hasTabParam) {
            this.updateQueryParams('example');
        }
    }

    changeTab(event: MatTabChangeEvent): void {
        const tabName = this._tabIndexToName(event.index);
        this.updateQueryParams(tabName);
    }

    /** Updates the URL to reflect tab name. */
    updateQueryParams(tab: TabName): void {
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                tab,
            },
            skipLocationChange: false,
        });
    }

    private _tabIndexToName(index: number): TabName {
        return index === 0 ? 'example' : index === 1 ? 'api' : 'playground';
    }

    private _tabNameToIndex(name: TabName): number {
        return name === 'example' ? 0 : name === 'api' ? 1 : 2;
    }
}

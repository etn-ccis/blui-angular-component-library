import { Component, Input, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { ViewportService } from '../../../../services/viewport/viewport.service';
import { PlaygroundService } from '../../../../services/playground/playground.service';

export type TabName = 'examples' | 'api-docs' | 'playground';

export type Knob = {
    label?: string;
    value: any;
    componentDefault?: string | boolean | number;
    type: 'string' | 'color' | 'select' | 'number' | 'boolean';
    hint: string;
    options?: string[];
};

@Component({
    selector: 'app-component-doc-scaffold',
    template: `
        <div class="scaffold-container">
            <div
                class="fixed-tab-group-banner"
                style="height: 48px; background: white; width: 100%; position: sticky; left: 0; z-index: 2"
                [style.top.px]="isSmall() ? 60 : 68"
            ></div>
            <div class="tabs-container" [class.small]="isSmall()">
                <mat-tab-group
                    style="width: 100%"
                    animationDuration="0ms"
                    (selectedTabChange)="userChangeTab($event)"
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
                    <mat-tab label="Playground"></mat-tab>
                </mat-tab-group>
            </div>

            <div class="playground-container" *ngIf="currentTabIndex === 2">
                <div style="width: 100%; display: flex; flex-direction: column;">
                    <div class="playground-live-example-wrapper" style="height: 50%">
                        <ng-content select="[playground]"></ng-content>
                    </div>
                    <div style="height: 50%; overflow: auto; box-sizing: border-box">
                        <ng-content select="[code]"></ng-content>
                    </div>
                </div>
                <div class="props-container">
                    <mat-accordion *ngFor="let group of knobGroups">
                        <mat-expansion-panel [expanded]="group.defaultExpanded" class="mat-elevation-z0">
                            <mat-expansion-panel-header>
                                <mat-panel-title>
                                    {{ group.title }}
                                </mat-panel-title>
                            </mat-expansion-panel-header>
                            <ng-container *ngFor="let key of getKeys()">
                                <app-select-knob
                                        *ngIf="knobs[key].type === 'select'"
                                        [label]="knobs[key].label || key"
                                        [options]="knobs[key].options"
                                        [(value)]="knobs[key].value"
                                        [hint]="knobs[key].hint"
                                        (valueChange)="emitKnobChange(knobs)"
                                ></app-select-knob>
                                <app-color-knob
                                        *ngIf="knobs[key].type === 'color'"
                                        [label]="knobs[key].label || key"
                                        [(value)]="knobs[key].value"
                                        [hint]="knobs[key].hint"
                                        (valueChange)="emitKnobChange(knobs)"
                                ></app-color-knob>
                                <app-text-knob
                                        *ngIf="knobs[key].type === 'string'"
                                        [label]="knobs[key].label || key"
                                        [(value)]="knobs[key].value"
                                        [hint]="knobs[key].hint"
                                        (valueChange)="emitKnobChange(knobs)"
                                ></app-text-knob>
                                <app-boolean-knob
                                        *ngIf="knobs[key].type === 'boolean'"
                                        [label]="knobs[key].label || key"
                                        [(value)]="knobs[key].value"
                                        [hint]="knobs[key].hint"
                                        (valueChange)="emitKnobChange(knobs)"
                                ></app-boolean-knob>
                            </ng-container>
                        </mat-expansion-panel>
                    </mat-accordion>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./scaffold.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ScaffoldComponent implements OnInit, OnDestroy {
    @Input() useDefaultDocs = true;
    @Input() mdFileName: string;
    @Input() md: string;
    @Input() knobs: { [key: string]: Knob };
    @Input() knobGroups: Array<{ title: string, knobs: [key: string], defaultExpanded: boolean; }>;


    currentTabIndex = 0;

    routeListener: Subscription;

    constructor(
        private readonly _playgroundService: PlaygroundService,
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _markdownService: MarkdownService,
        private readonly _viewportService: ViewportService
    ) {}

    getKeys(): any {
        return Object.keys(this.knobs || {});
    }

    ngOnInit(): void {
        if (this.mdFileName) {
            this._markdownService.getSource(`src/assets/md/${this.mdFileName}`).subscribe((data) => {
                this.md = data.replace('images/', 'src/assets/md/images/');
            });
        }
        const tab = this._getTabNameFromUrl();
        this.updateRouteFromTab(tab);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Enhance the first H2 -> H1
        if (changes.md && this.md) {
            this.md = this.md.replace('## ', '# ');
        }
    }

    ngOnDestroy(): void {
        if (this.routeListener) {
            this.routeListener.unsubscribe();
        }
    }

    /** Called when a user clicks a tab. */
    userChangeTab(event: MatTabChangeEvent): void {
        const tabName = this._tabIndexToName(event.index);
        this.updateRouteFromTab(tabName);
    }

    /** Updates the URL to reflect tab name. */
    updateRouteFromTab(tab: TabName): void {
        const routeMinusTab = this._getRouteMinusTab();
        void this._router.navigate([`${routeMinusTab}/${tab}`], {
            skipLocationChange: false,
            replaceUrl: true,
        });
        this.currentTabIndex = this._tabNameToIndex(tab);
    }

    /** Emits an event whenever a knob has been udpated. */
    emitKnobChange(knobs: { [key: string]: Knob }): void {
        this._playgroundService.knobChange.next(knobs);
    }

    /** Returns angular route, but without the TabName at the end. */
    private _getRouteMinusTab(): string {
        return this._router.url.substr(0, this._router.url.lastIndexOf('/'));
    }

    /** Returns current TabName */
    private _getTabNameFromUrl(): TabName {
        const route = this._router.url;
        const everythingElse = this._getRouteMinusTab();
        return route.replace(everythingElse, '').replace('/', '') as TabName;
    }

    private _tabIndexToName(index: number): TabName {
        return index === 0 ? 'examples' : index === 1 ? 'api-docs' : 'playground';
    }

    private _tabNameToIndex(name: TabName): number {
        return name === 'examples' ? 0 : name === 'api-docs' ? 1 : 2;
    }

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }
}

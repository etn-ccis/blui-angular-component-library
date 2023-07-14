import { Component, Input, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Router } from '@angular/router';
import { MatLegacyTabChangeEvent as MatTabChangeEvent } from '@angular/material/legacy-tabs';
import { Subscription } from 'rxjs';
import { ViewportService } from '../../../../services/viewport/viewport.service';
import { PlaygroundService } from '../../../../services/playground/playground.service';
import { COMPONENT_NAV_ITEMS } from '../../../../navigation/nav-items';
import { TabService } from '../../../../services/tab/tab.service';

export type Tab = 'examples' | 'api-docs' | 'playground';

export type Knob = {
    label?: string;
    value: any;
    componentDefault?: string | boolean | number;
    range?: { min: number; max: number; tickInterval: number; step: number };
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
                    <mat-tab label="Examples" *ngIf="hasExamples">
                        <div class="examples-tab-content-wrapper" *ngIf="currentTabIndex === 0">
                            <ng-content *ngIf="!examplesRef" select="[examples]"></ng-content>
                            <template [ngTemplateOutlet]="examplesRef"></template>
                        </div>
                    </mat-tab>
                    <mat-tab label="API Docs">
                        <div class="doc-tab-content">
                            <markdown *ngIf="useDefaultDocs" [data]="md"></markdown>
                            <ng-content select="[docs]"></ng-content>
                        </div>
                    </mat-tab>
                    <mat-tab label="Playground" *ngIf="hasPlayground"></mat-tab>
                </mat-tab-group>
            </div>

            <div class="playground-container" *ngIf="currentTabIndex === 2" [class.md]="isMedium()">
                <div style="width: 100%; display: flex; flex-direction: column;">
                    <div class="playground-live-example-wrapper" style="height: 70%">
                        <ng-content *ngIf="!playgroundRef" select="[playground]"></ng-content>
                        <template [ngTemplateOutlet]="playgroundRef"></template>
                    </div>
                    <div style="height: 30%; overflow: auto; box-sizing: border-box">
                        <ng-content select="[code]"></ng-content>
                    </div>
                </div>
                <div class="props-container">
                    <ng-container *ngIf="knobGroups.length > 1">
                        <mat-accordion *ngFor="let group of knobGroups; let last = last">
                            <mat-expansion-panel [expanded]="group.defaultExpanded" class="mat-elevation-z0">
                                <mat-expansion-panel-header>
                                    <mat-panel-title class="blui-subtitle-1 primary">
                                        {{ group.title }}
                                    </mat-panel-title>
                                </mat-expansion-panel-header>
                                <ng-container *ngFor="let key of getKeys(group.knobs)">
                                    <ng-template
                                        *ngTemplateOutlet="
                                            interactiveKnob;
                                            context: {
                                                knob: group.knobs[key],
                                                key: key,
                                                required: isRequired(group.title)
                                            }
                                        "
                                    >
                                    </ng-template>
                                </ng-container>
                            </mat-expansion-panel>
                            <mat-divider *ngIf="!last"></mat-divider>
                        </mat-accordion>
                    </ng-container>

                    <div style="padding: 0 24px" *ngIf="knobGroups.length === 1">
                        <div class="blui-subtitle-1 primary" style="margin-bottom: 16px;">
                            {{ knobGroups[0].title }}
                        </div>
                        <ng-container *ngFor="let key of getKeys(knobGroups[0].knobs)">
                            <ng-template
                                *ngTemplateOutlet="
                                    interactiveKnob;
                                    context: {
                                        knob: knobGroups[0].knobs[key],
                                        key: key,
                                        required: isRequired(knobGroups[0].title)
                                    }
                                "
                            >
                            </ng-template>
                        </ng-container>
                    </div>
                </div>
            </div>
        </div>

        <ng-template #interactiveKnob let-knob="knob" let-key="key" let-required="required">
            <div [class.non-prop]="knob.label?.indexOf(' ') > 0">
                <app-select-knob
                    *ngIf="knob.type === 'select'"
                    [label]="knob.label || key"
                    [options]="knob.options"
                    [(value)]="knob.value"
                    [isRequired]="required"
                    [hint]="knob.hint"
                    (valueChange)="emitKnobChange()"
                ></app-select-knob>
                <app-color-knob
                    *ngIf="knob.type === 'color'"
                    [label]="knob.label || key"
                    [(value)]="knob.value"
                    [hint]="knob.hint"
                    (valueChange)="emitKnobChange()"
                ></app-color-knob>
                <app-text-knob
                    *ngIf="knob.type === 'string'"
                    [label]="knob.label || key"
                    [(value)]="knob.value"
                    [isRequired]="required"
                    [hint]="knob.hint"
                    (valueChange)="emitKnobChange()"
                ></app-text-knob>
                <app-boolean-knob
                    *ngIf="knob.type === 'boolean'"
                    [label]="knob.label || key"
                    [isRequired]="required"
                    [(value)]="knob.value"
                    [hint]="knob.hint"
                    (valueChange)="emitKnobChange()"
                ></app-boolean-knob>
                <app-number-knob
                    *ngIf="knob.type === 'number'"
                    [label]="knob.label || key"
                    [(value)]="knob.value"
                    [isRequired]="required"
                    [max]="knob.range.max"
                    [min]="knob.range.min"
                    [tickInterval]="knob.range.tickInterval"
                    [step]="knob.range.step"
                    [hint]="knob.hint"
                    (valueChange)="emitKnobChange()"
                ></app-number-knob>
            </div>
        </ng-template>
    `,
    styleUrls: ['./scaffold.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ScaffoldComponent implements OnInit, OnDestroy {
    @Input() hasExamples = true;
    @Input() hasPlayground = true;
    @Input() useDefaultDocs = true;
    @Input() mdFileName: string;
    @Input() md: string;
    @Input() examplesRef: TemplateRef<any>;
    @Input() playgroundRef: TemplateRef<any>;
    @Input() knobGroups: Array<{ title: string; knobs: { [key: string]: Knob }; defaultExpanded: boolean }>;

    currentTabIndex = 0;

    routeListener: Subscription;

    constructor(
        private readonly _playgroundService: PlaygroundService,
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _markdownService: MarkdownService,
        private readonly _viewportService: ViewportService,
        private readonly _tabService: TabService
    ) {}

    getKeys(knobs: { [key: string]: Knob }): any {
        return Object.keys(knobs || {}).sort();
    }

    ngOnInit(): void {
        if (this.mdFileName) {
            this._markdownService.getSource(`src/assets/md/${this.mdFileName}`).subscribe((data) => {
                let adjusted = data;
                adjusted = adjusted.replace(/images/g, `src/assets/md/images/`);
                adjusted = adjusted.replace(/gifs/g, `src/assets/md/gifs/`);
                adjusted = this.updateCompDocLinks(adjusted);
                this.md = adjusted;
            });
        }
        let tab = this._getTabNameFromUrl();

        // Handle improper tab changes scenarios.
        if (tab === 'playground' && !this.hasPlayground) {
            tab = 'examples';
        }
        if (tab === 'examples' && !this.hasExamples) {
            tab = 'api-docs';
        }
        this._tabService.setActiveTab(tab);
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

    isRequired(title: string): boolean {
        return title === 'Required Properties';
    }

    /** Replaces comp doc MD links with links to example pages */
    updateCompDocLinks(md: string): string {
        const matches = md.match(/\(([^)]+)\)/gm);
        if (!matches) {
            return md;
        }
        let adjusted = md;
        matches.map((match) => {
            const modified = match.replace('(', '').replace(')', '');
            const examples = '/examples';
            const origin = window.location.origin;
            if (modified.includes('AppBar')) {
                adjusted = adjusted.replace(modified, `${origin}/${COMPONENT_NAV_ITEMS.appBar.route}${examples}`);
            }
            if (modified.includes('Hero')) {
                adjusted = adjusted.replace(modified, `${origin}/${COMPONENT_NAV_ITEMS.hero.route}${examples}`);
            }
            if (modified.includes('ChannelValue')) {
                adjusted = adjusted.replace(modified, `${origin}/${COMPONENT_NAV_ITEMS.channelValue.route}${examples}`);
            }
        });
        return adjusted;
    }

    /** Called when a user clicks a tab. */
    userChangeTab(event: MatTabChangeEvent): void {
        /* This triggers a code-highlighting event. */
        window.dispatchEvent(new Event('resize'));
        const tabName = this._tabIndexToName(event.index);
        this._tabService.setActiveTab(tabName);
        this.updateRouteFromTab(tabName);
    }

    /** Updates the URL to reflect tab name. */
    updateRouteFromTab(tab: Tab): void {
        const routeMinusTab = this._getRouteMinusTab();
        void this._router.navigate([`${routeMinusTab}/${tab}`], {
            skipLocationChange: false,
            replaceUrl: true,
        });
        this.currentTabIndex = this._tabNameToIndex(tab);
    }

    /** Emits an event whenever a knob has been udpated. */
    emitKnobChange(): void {
        this._handleUniqueMobileStepperKnobs();

        // Check for mobile stepper
        this._handleUniqueMobileStepperKnobs();

        const knobs = {};
        this.knobGroups.map((group) => Object.assign(knobs, group.knobs));
        this._playgroundService.knobChange.next(knobs);
    }

    /** Mobile stepper has a unique knob relation where `activeStep` must update based on the number of `steps` available. */
    private _handleUniqueMobileStepperKnobs(): void {
        if (this.mdFileName === 'MobileStepper.md') {
            const required = this.knobGroups[0].knobs as { [key: string]: Knob };
            if (required.activeStep && required.steps) {
                required.activeStep.range = { min: 0, max: required.steps.value - 1, tickInterval: 1, step: 1 };
                if (required.activeStep.value >= required.steps.value) {
                    required.activeStep.value = required.steps.value - 1;
                }
            }
        }
    }

    /** Returns angular route, but without the TabName at the end. */
    private _getRouteMinusTab(): string {
        return this._router.url.substr(0, this._router.url.lastIndexOf('/'));
    }

    /** Returns current TabName */
    private _getTabNameFromUrl(): Tab {
        const route = this._router.url;
        const everythingElse = this._getRouteMinusTab();
        return route.replace(everythingElse, '').replace('/', '') as Tab;
    }

    private _tabIndexToName(index: number): Tab {
        return index === 0 ? 'examples' : index === 1 ? 'api-docs' : 'playground';
    }

    private _tabNameToIndex(name: Tab): number {
        return name === 'examples' ? 0 : name === 'api-docs' ? 1 : 2;
    }

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }

    isMedium(): boolean {
        return this._viewportService.isMedium();
    }
}

import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { VALUE_AND_UNITS } from './examples/value-units.component';
import { CV_CHILDREN } from './examples/channel-value-children.component';
import { ICON_DIFFS } from './examples/icon-diffs.component';
import { WITH_BANNER } from './examples/within-banner.component';

@Component({
    selector: 'app-hero-doc',
    template: `
        <app-component-doc-scaffold mdFileName="Hero.md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Hero</div>
                    <div class="example-demo-wrapper">
                        <app-basic-hero-demo></app-basic-hero-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Hero with Value and Units</div>
                    <div class="example-demo-wrapper">
                        <app-value-units-hero-demo></app-value-units-hero-demo>
                    </div>
                    <app-example-code [snippet]="VALUE_UNITS"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="VALUE_UNITS"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Hero with ChannelValue Children</div>
                    <div class="example-demo-wrapper">
                        <app-channel-value-children-hero-demo></app-channel-value-children-hero-demo>
                    </div>
                    <app-example-code [snippet]="CV_CHILDREN"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="CV_CHILDREN"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Heroes with a HeroBanner</div>
                    <div class="example-demo-wrapper">
                        <app-with-banner-hero-demo></app-with-banner-hero-demo>
                    </div>
                    <app-example-code [snippet]="WITH_BANNER"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_BANNER"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Hero with Icon Size and Image Types</div>
                    <div class="example-demo-wrapper">
                        <app-icon-diffs-hero-demo></app-icon-diffs-hero-demo>
                    </div>
                    <app-example-code [snippet]="ICON_DIFFS"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="ICON_DIFFS"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./hero-doc.component.scss'],
})
export class HeroDocComponent {
    BASIC = BASIC;
    VALUE_UNITS = VALUE_AND_UNITS;
    CV_CHILDREN = CV_CHILDREN;
    ICON_DIFFS = ICON_DIFFS;
    WITH_BANNER = WITH_BANNER;
}

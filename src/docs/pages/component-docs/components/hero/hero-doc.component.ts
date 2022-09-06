import {Component} from '@angular/core';

@Component({
    selector: 'app-hero-doc',
    template: `
        <app-component-doc-scaffold mdFileName="Hero.md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">App Bar with Snap Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> will resize between <code>collapsedHeight</code> and
                        <code>expandedHeight</code> as the window is scrolled.
                    </div>
                    <div class="example-demo-wrapper">
                        
                    </div>
                    <app-example-code [snippet]="BASIC" dataLine="2-9"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/snap"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./hero-doc.component.scss'],
})
export class HeroDocComponent {
    BASIC = '';
}

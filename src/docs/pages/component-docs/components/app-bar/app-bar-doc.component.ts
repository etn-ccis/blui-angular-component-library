import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { THREE_LINER } from './examples/three-liner.component';

@Component({
    selector: 'app-app-bar-doc',
    template: `
        <app-component-doc-scaffold mdFileName="AppBar.md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic App Bar</div>
                    <div class="example-description">A <code>&lt;blui-app-bar&gt;</code> is an app bar.</div>
                    <div class="example-demo-wrapper">
                        <app-basic-app-bar-demo></app-basic-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="BASIC" dataLine="2-9"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                                examplePath="app-bar/examples/basic"
                                style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">App Bar with ThreeLiner Component</div>
                    <div class="example-description">A <code>&lt;blui-app-bar&gt;</code> is an app bar.</div>
                    <div class="example-demo-wrapper">
                        <app-three-liner-app-bar-demo></app-three-liner-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="THREE_LINER" dataLine="9-11"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                                examplePath="app-bar/examples/three-liner"
                                style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="THREE_LINER"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./app-bar-doc.component.scss'],
})
export class AppBarDocComponent {
    BASIC = BASIC;
    THREE_LINER = THREE_LINER;
}

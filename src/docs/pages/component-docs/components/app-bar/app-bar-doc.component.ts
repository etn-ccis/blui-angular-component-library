import { Component } from '@angular/core';
import { COLLAPSED } from './examples/collapsed.component';
import { EXPANDED } from './examples/expanded.component';
import { SNAP } from './examples/snap.component';
import { THREE_LINER } from './examples/three-liner.component';
import { AppBarPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-app-bar-doc',
    template: `
        <ng-template #examples>
            <div class="app-example">
                <div class="example-section">
                    <div class="example-page-title">App Bar</div>
                    <div class="example-description">
                        The <code>&lt;blui-app-bar&gt;</code> supports multiple variants - 'collapsed', 'expanded', and
                        'snap'.
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Collapsed Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> with a <code>collapsed</code> variant will stay fixed at the
                        <code>collapsedHeight</code> size.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-collapsed-app-bar-demo></app-collapsed-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="COLLAPSED" dataLine="2-4"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/collapsed"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="COLLAPSED"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Expanded Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> with an <code>expanded</code> variant will stay fixed at the
                        <code>expandedHeight</code> size.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-expanded-app-bar-demo></app-expanded-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="EXPANDED" dataLine="2-4"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/expanded"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="EXPANDED"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Snap Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> will resize between <code>collapsedHeight</code> and
                        <code>expandedHeight</code> as the window is scrolled.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-snap-app-bar-demo></app-snap-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="SNAP" dataLine="2-9"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/snap"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="SNAP"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">App Bar with Custom Content</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> can accept a <code>blui-icon</code>,
                        <code>blui-actions</code> and custom content.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-three-liner-app-bar-demo></app-three-liner-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="THREE_LINER" dataLine="9-19"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/three-liner"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="THREE_LINER"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </ng-template>

        <ng-template #playground>
            <app-app-bar-playground [inputs]="allProps" (codeChange)="generatedCode = $event"></app-app-bar-playground>
        </ng-template>

        <app-component-doc-scaffold
            mdFileName="AppBar.md"
            [knobGroups]="knobGroups"
            [playgroundRef]="playground"
            [examplesRef]="examples"
        >
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./app-bar-doc.component.scss'],
})
export class AppBarDocComponent {
    SNAP = SNAP;
    COLLAPSED = COLLAPSED;
    EXPANDED = EXPANDED;
    THREE_LINER = THREE_LINER;
    generatedCode: string;

    optionalProps: Partial<AppBarPlaygroundKnobs> = {
        expandedHeight: {
            value: 200,
            componentDefault: 200,
            type: 'number',
            hint: 'Height of the AppBar when expanded',
            range: { min: 50, max: 300, step: 1, tickInterval: 1 },
        },
        collapsedHeight: {
            value: 64,
            type: 'number',
            hint: 'Height of the AppBar when collapsed',
            range: { min: 56, max: 100, step: 1, tickInterval: 1 },
        },
        scrollThreshold: {
            value: 100,
            type: 'number',
            hint: 'Distance in pixels to scroll before collapsing toolbar',
            range: { min: 50, max: 400, step: 10, tickInterval: 1 },
        },
        variant: {
            value: 'snap',
            componentDefault: 'collapsed',
            type: 'select',
            options: ['expanded', 'collapsed', 'snap'],
            hint: 'Behavior of the App Bar',
        },
        color: {
            value: 'primary',
            componentDefault: 'primary',
            type: 'select',
            options: ['primary', 'accent', 'warn'],
            hint: 'Color variant which is passed to the <mat-toolbar>',
        },
    };
    allProps = Object.assign({}, this.optionalProps);
    knobGroups = [
        {
            title: 'Optional Properties',
            knobs: this.optionalProps,
            defaultExpanded: true,
        },
    ];
}

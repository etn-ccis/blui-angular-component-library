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
                    <div class="example-section">
                        <div class="example-heading">Collapsible App Bar</div>
                        <div class="example-description">
                            A <code>&lt;blui-app-bar&gt;</code> is an extenion of the Angular Material Toolbar that can
                            expand and collapse as you scroll the page.
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
                    <div class="example-heading">Permanently Collapsed</div>
                    <div class="example-description">
                        Setting the variant to <code>'collapsed'</code> will lock the the App Bar at its collapsed size
                        and it will behave like a default toolbar.
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
                    <div class="example-heading">Permanently Expanded</div>
                    <div class="example-description">
                        Setting the variant to <code>'expanded'</code> will lock the the App Bar at its expanded size.
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
                    <div class="example-heading">Adding Additional Content</div>
                    <div class="example-description">
                        You can nest content inside of the App Bar. The App Bar reserves space for icons on both the
                        left (<code>blui-icon</code>) and right side (<code>blui-actions</code>).
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

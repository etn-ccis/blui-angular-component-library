import { Component } from '@angular/core';
import { TEXT } from './examples/text.component';
import { PROGRESS } from './examples/progress.component';
import { BASIC } from './examples/basic.component';
import { DOTS } from './examples/dots.component';

@Component({
    selector: 'app-mobile-stepper-doc',
    template: `
        <app-component-doc-scaffold mdFileName="MobileStepper.md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Mobile Stepper</div>
                    <div class="example-description">
                        The <code>&lt;blui-mobile-stepper&gt;</code> shows a user their progress while completing a
                        workflow. Back and Next buttons can be projected to navigate through the steps.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-mobile-stepper-demo style="padding: 0.5rem"></app-basic-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Dots Mobile Stepper</div>
                    <div class="example-description">
                        The default <code>variant</code> shows dots as a progress indicator.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-dots-mobile-stepper-demo></app-dots-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="DOTS"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/dots"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="DOTS"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Text Mobile Stepper</div>
                    <div class="example-description">
                        The <code>&lt;blui-mobile-stepper&gt;</code> supports a 'text' <code>variant</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-text-mobile-stepper-demo></app-text-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="TEXT"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/text"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="TEXT"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Progress Mobile Stepper</div>
                    <div class="example-description">
                        The <code>&lt;blui-mobile-stepper&gt;</code> supports a 'progress' <code>variant</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-progress-mobile-stepper-demo></app-progress-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="PROGRESS"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/progress"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="PROGRESS"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./mobile-stepper-doc.component.scss'],
})
export class MobileStepperDocComponent {
    BASIC = BASIC;
    DOTS = DOTS;
    TEXT = TEXT;
    PROGRESS = PROGRESS;
}

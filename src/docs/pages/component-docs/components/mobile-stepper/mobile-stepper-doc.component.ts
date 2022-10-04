import { Component } from '@angular/core';
import { TEXT } from './examples/text.component';
import { PROGRESS } from './examples/progress.component';
import { BASIC } from './examples/basic.component';
import { DOTS } from './examples/dots.component';
import { MobileStepperPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-mobile-stepper-doc',
    template: `
        <app-component-doc-scaffold mdFileName="MobileStepper.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Mobile Stepper</div>
                    <div class="example-description">
                        A <code>&lt;blui-mobile-stepper&gt;</code> shows a user their progress while completing a
                        workflow. Back and Next buttons can be projected to navigate through the steps. You can
                        configure the Mobile Stepper to show progress via dots, text or using an
                        <a href="https://material.angular.io/components/progress-bar/overview" target="_blank">
                            Angular Material Progress Bar </a
                        >.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-dots-mobile-stepper-demo></app-dots-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="DOTS" dataLine="13, 18, 23"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/dots"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="DOTS"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-mobile-stepper-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-mobile-stepper-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./mobile-stepper-doc.component.scss'],
})
export class MobileStepperDocComponent {
    BASIC = BASIC;
    DOTS = DOTS;
    TEXT = TEXT;
    PROGRESS = PROGRESS;

    generatedCode: string;

    /* Default playground knobs */
    requiredProps: Partial<MobileStepperPlaygroundKnobs> = {
        activeStep: {
            value: 0,
            componentDefault: undefined,
            type: 'number',
            hint: 'The index of the active step',
            range: { min: 0, max: 3, tickInterval: 1, step: 1 },
        },
        steps: {
            value: 4,
            componentDefault: undefined,
            type: 'number',
            hint: 'Total number of steps to display',
            range: { min: 2, max: 8, tickInterval: 1, step: 1 },
        },
    };

    optionalProps: Partial<MobileStepperPlaygroundKnobs> = {
        variant: {
            value: 'dots',
            type: 'select',
            options: ['dots', 'progress', 'text'],
            hint: 'Which type of indicator to use',
        },
    };

    otherProps: Partial<MobileStepperPlaygroundKnobs> = {
        showNext: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            label: 'Show Next Button',
            hint: '',
        },
        showBack: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            label: 'Show Back Button',
            hint: '',
        },
    };
    allProps = Object.assign({}, this.requiredProps, this.optionalProps, this.otherProps);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.requiredProps,
            defaultExpanded: true,
        },
        {
            title: 'Optional Properties',
            knobs: this.optionalProps,
            defaultExpanded: true,
        },
        {
            title: 'Other Properties',
            knobs: this.otherProps,
            defaultExpanded: false,
        },
    ];
}

import { Component } from '@angular/core';
import { COMPONENT_NAV_ITEMS } from 'src/docs/navigation/nav-items';
import { BASIC } from './examples/basic.component';
import { WITH_ICON } from './examples/icon.component';
import { PREFIX } from './examples/prefix.component';
import { UNIT_SPACE } from './examples/unit-space.component';
import { ChannelValuePlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-hero-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ChannelValue.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Channel Value</div>
                    <div class="example-description">
                        The <code>&lt;blui-channel-value&gt;</code> accepts a <code>value</code> and a
                        <code>units</code>
                        input to display metric data.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-channel-value-demo></app-basic-channel-value-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Channel Value with Icon</div>
                    <div class="example-description">
                        The <code>&lt;blui-channel-value&gt;</code> accepts an optional icon content.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-icon-channel-value-demo></app-icon-channel-value-demo>
                    </div>
                    <app-example-code [snippet]="ICON" dataLine="2"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="ICON"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Channel Value with Prefix</div>
                    <div class="example-description">
                        The <code>&lt;blui-channel-value&gt;</code> accepts an optional <code>prefix</code>
                        property that will show the icon before its value.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-prefix-channel-value-demo></app-prefix-channel-value-demo>
                    </div>
                    <app-example-code [snippet]="PREFIX"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="PREFIX"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Channel Value with Different Units</div>
                    <div class="example-description">
                        The <code>&lt;blui-channel-value&gt;</code> will hide the whitespace by default between a
                        <code>value</code> and its <code>units</code> when the units '%', '°F', '°C', '°' or '$' are
                        used. This behavior can be overridden via the optional <code>unitSpace</code> input.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-unit-space-channel-value-demo></app-unit-space-channel-value-demo>
                    </div>
                    <app-example-code [snippet]="UNIT_SPACE"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="UNIT_SPACE"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-channel-value-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-channel-value-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./channel-value-doc.component.scss'],
})
export class ChannelValueDocComponent {
    routes = COMPONENT_NAV_ITEMS;
    BASIC = BASIC;
    ICON = WITH_ICON;
    PREFIX = PREFIX;
    UNIT_SPACE = UNIT_SPACE;
    generatedCode: string;

    requiredProps: Partial<ChannelValuePlaygroundKnobs> = {
        value: {
            value: '12',
            type: 'string',
            hint: 'Text to display for the value',
        },
    };

    optionalProps: Partial<ChannelValuePlaygroundKnobs> = {
        units: {
            value: 'kWh',
            type: 'string',
            componentDefault: '',
            hint: 'Text to display for the units',
        },
        unitSpace: {
            value: 'auto',
            type: 'select',
            options: ['auto', 'hide', 'show'],
            hint: 'Show/Hide spacing between the value and units',
        },
    };
    otherProps: Partial<ChannelValuePlaygroundKnobs> = {
        showIcon: {
            value: true,
            type: 'boolean',
            hint: '',
            label: 'Show Icon',
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
            defaultExpanded: true,
        },
    ];
}

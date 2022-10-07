import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { VALUE_AND_UNITS } from './examples/value-units.component';
import { CV_CHILDREN } from './examples/channel-value-children.component';
import { ICON_DIFFS } from './examples/icon-diffs.component';
import { WITH_BANNER } from './examples/within-banner.component';
import { COMPONENT_NAV_ITEMS } from 'src/docs/navigation/nav-items';
import { Tab } from '../../shared/scaffold/scaffold.component';
import { WITH_ICON } from './examples/with-icon.component';
import { HeroPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-hero-doc',
    template: `
        <app-component-doc-scaffold mdFileName="Hero.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Hero</div>
                    <div class="example-description">
                        A <code>&lt;blui-hero&gt;</code> is used to call attention to a particular value or parameter.
                        It adds some additional visual elements onto a
                        <a [routerLink]="createRouterLink(routes.channelValue.route)">Channel Value</a>. When showing
                        multiple heroes, they are typically placed within a Hero Banner to help with layout.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-value-units-hero-demo></app-value-units-hero-demo>
                    </div>
                    <app-example-code [snippet]="VALUE_UNITS" dataLine="2-4"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="VALUE_UNITS"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Showing Multiple Channel Values</div>
                    <div class="example-description">
                        By default, a Hero renders a single Channel Value. If you need to support multiple Channel
                        Values, you can pass them in as content.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-channel-value-children-hero-demo></app-channel-value-children-hero-demo>
                    </div>
                    <app-example-code [snippet]="CV_CHILDREN" dataLine="3-4"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="CV_CHILDREN"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Adding a Channel Value Icon</div>
                    <div class="example-description">
                        If you want to include an inline icon with the Channel Value, provide it via
                        <code>blui-secondary</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-with-icon-hero-demo></app-with-icon-hero-demo>
                    </div>
                    <app-example-code [snippet]="WITH_ICON" dataLine="3"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_ICON"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Icon Formatting</div>
                    <div class="example-description">
                        The primary icon of a Hero can be provided in a variety of formats and sizes.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-icon-diffs-hero-demo></app-icon-diffs-hero-demo>
                    </div>
                    <app-example-code [snippet]="ICON_DIFFS"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="ICON_DIFFS"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-hero-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-hero-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./hero-doc.component.scss'],
})
export class HeroDocComponent {
    routes = COMPONENT_NAV_ITEMS;

    BASIC = BASIC;
    VALUE_UNITS = VALUE_AND_UNITS;
    CV_CHILDREN = CV_CHILDREN;
    ICON_DIFFS = ICON_DIFFS;
    WITH_ICON = WITH_ICON;
    WITH_BANNER = WITH_BANNER;

    generatedCode: string;

    requiredProps: Partial<HeroPlaygroundKnobs> = {
        label: {
            value: 'Velocity',
            type: 'string',
            hint: 'The text shown below the Channel Value',
        },
        primaryIcon: {
            value: 'blui-fan',
            hint: 'Show primary icon',
            label: 'Show Primary',
            type: 'select',
            options: ['blui-fan', 'blui-fan_circled', 'blui-air_conditioner'],
        },
    };

    optionalProps: Partial<HeroPlaygroundKnobs> = {
        value: {
            componentDefault: '',
            value: '470',
            type: 'string',
            hint: 'The value for the channel',
        },
        units: {
            componentDefault: '',
            value: 'RPM',
            type: 'string',
            hint: 'Text to show after the value',
        },
        iconSize: {
            componentDefault: 36,
            value: 36,
            type: 'number',
            range: { min: 1, max: 96, step: 1, tickInterval: 1 },
            hint: 'The size of the primary icon',
        },
        unitSpace: {
            componentDefault: 'auto',
            value: 'auto',
            type: 'select',
            options: ['auto', 'hide', 'show'],
            hint: 'Show/Hide spacing between the value and units',
        },
    };
    otherProps: Partial<HeroPlaygroundKnobs> = {
        showSecondary: {
            value: true,
            type: 'boolean',
            hint: 'Show optional secondary icon',
            label: 'Show Secondary',
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

    createRouterLink(route: string): string {
        const tab: Tab = 'examples';
        return `/${route}/${tab}`;
    }
}

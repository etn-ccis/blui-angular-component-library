import { Component } from '@angular/core';
import { COMPONENT_NAV_ITEMS } from 'src/docs/navigation/nav-items';
import { BASIC } from './examples/basic.component';
import { WITH_ICON } from './examples/icon.component';
import { PREFIX } from './examples/prefix.component';

@Component({
    selector: 'app-hero-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ChannelValue.md">
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
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./channel-value-doc.component.scss'],
})
export class ChannelValueDocComponent {
    routes = COMPONENT_NAV_ITEMS;
    BASIC = BASIC;
    ICON = WITH_ICON;
    PREFIX = PREFIX;
}

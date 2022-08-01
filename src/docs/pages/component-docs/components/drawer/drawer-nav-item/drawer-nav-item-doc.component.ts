import {Component} from '@angular/core';
import {MarkdownSplitService} from '../../../../../services/markdown-split/markdown-split.service';
import {MarkdownService} from 'ngx-markdown';
import {BASIC} from './examples/basic.component';
import {WITH_ICONS} from './examples/with-icons.component';
import {WITH_NESTED_ITEMS} from './examples/with-nested-items.component';
import {WITH_SELECTED_ITEM} from './examples/with-selected-item.component';
import {ActiveItemBackgroundShape} from "@brightlayer-ui/angular-components";

@Component({
    selector: 'app-drawer-nav-item-doc',
    template: `
        <app-component-doc-scaffold [md]="md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Drawer Nav Items</div>
                    <div class="example-demo-wrapper">
                        <app-basic-drawer-nav-item-demo></app-basic-drawer-nav-item-demo>
                    </div>
                    <app-example-code [snippet]="BASIC" dataLine="4-6"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Drawer Nav Items with Icons</div>
                    <div class="example-description">
                        Drawer navigation items accept icons denoted with the <code>blui-icon</code> selector.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-icons-demo></app-nav-item-with-icons-demo>
                    </div>
                    <app-example-code [snippet]="WITH_ICONS" dataLine="4-9"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Nested Drawer Nav Items</div>
                    <div class="example-description">
                        Navigation items can be nested to allow for different levels of navigation. To create a nested
                        navigation item, simply place a <code>&lt;blui-drawer-nav-item&gt;</code> inside of another. The
                        <code>&lt;blui-drawer-nav-item&gt;</code> allows nested navigation up to 3 levels deep.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-nested-items-demo></app-nav-item-with-nested-items-demo>
                    </div>
                    <app-example-code [snippet]="WITH_NESTED_ITEMS" dataLine="4-13"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button
                            [code]="WITH_NESTED_ITEMS"
                            style="margin-right: 1rem"
                        ></app-copy-code-button>
                        <app-view-code-button
                            examplePath="drawer/drawer-nav-item/examples/with-nested-items"
                        ></app-view-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">Selected Drawer Nav Item</div>
                    <div class="example-description">
                        Navigation items must be supplied with a <code>[selected]</code> input to denote which item is
                        active. The active highlighted shape can be adjusted via the
                        <code>[activeItemBackgroundShape]</code> input to be either "square" (default) or "round".
                    </div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-selected-item-demo></app-nav-item-with-selected-item-demo>
                    </div>
                    <app-example-code [snippet]="WITH_SELECTED_ITEM" dataLine="4-23"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button
                            [code]="WITH_SELECTED_ITEM"
                            style="margin-right: 1rem"
                        ></app-copy-code-button>
                        <app-view-code-button
                            examplePath="drawer/drawer-nav-item/examples/with-selected-item"
                        ></app-view-code-button>
                    </div>
                </div>
            </div>
            <app-nav-item-playground
                playground
                [activeItemBackgroundShape]="activeItemBackgroundShape"
                [chevron]="chevron"
                [divider]="divider"
                [hidden]="hidden"
                [hidePadding]="hidePadding"
                [ripple]="ripple"
                [statusColor]="statusColor"
                [subtitle]="subtitle"
                [title]="title"
                (codeChange)="generatedCode = $event"
            ></app-nav-item-playground>
            <app-example-code code [snippet]="generatedCode"></app-example-code>
            <div knobs>
                <app-text-knob label="title" [(value)]="title"></app-text-knob>
                <app-text-knob label="subtitle" [(value)]="subtitle"></app-text-knob>
                <app-color-knob label="statusColor" [(value)]="statusColor"></app-color-knob>
                <app-boolean-knob label="chevron" [(value)]="chevron"></app-boolean-knob>
                <app-boolean-knob label="divider" [(value)]="divider"></app-boolean-knob>
                <app-boolean-knob label="hidden" [(value)]="hidden"></app-boolean-knob>
                <app-boolean-knob label="hidePadding" [(value)]="hidePadding"></app-boolean-knob>
                <app-boolean-knob label="ripple" [(value)]="ripple"></app-boolean-knob>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-nav-item-doc.component.scss'],
})
export class DrawerNavItemDocComponent {
    md: string;
    BASIC = BASIC;
    WITH_ICONS = WITH_ICONS;
    WITH_NESTED_ITEMS = WITH_NESTED_ITEMS;
    WITH_SELECTED_ITEM = WITH_SELECTED_ITEM;
    generatedCode: string;

    /* Default playground knobs */
    title = 'title';
    subtitle = 'subtitle';
    chevron = true;
    divider = true;
    activeItemBackgroundShape: ActiveItemBackgroundShape = 'square';
    hidePadding = true;
    hidden = false;
    ripple = true;
    statusColor: string = 'red';

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Nav Item';
            const delimiterBottom = '## Drawer Footer';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }
}

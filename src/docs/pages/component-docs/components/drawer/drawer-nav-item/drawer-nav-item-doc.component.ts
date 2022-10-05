import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { WITH_ICONS } from './examples/with-icons.component';
import { WITH_NESTED_ITEMS } from './examples/with-nested-items.component';
import { WITH_SELECTED_ITEM } from './examples/with-selected-item.component';
import { NavItemPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-drawer-nav-item-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Drawer Nav Item</div>
                    <div class="example-description">
                        A <code>&lt;blui-drawer-nav-item&gt;</code> represents a single list item in the navigation
                        drawer. Nav items can contain any combination of title, subtitle and icon.
                    </div>

                    <div class="example-demo-wrapper">
                        <app-basic-drawer-nav-item-demo></app-basic-drawer-nav-item-demo>
                    </div>
                    <app-example-code [snippet]="BASIC" dataLine="4-12"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Selecting a Nav Item</div>
                    <div class="example-description">
                        Navigation items can be highlighted with an active state by setting the
                        <code>selected</code> input. The shape of the highlight can be either "square" (default) or
                        "round".
                    </div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-selected-item-demo></app-nav-item-with-selected-item-demo>
                    </div>
                    <app-example-code [snippet]="WITH_SELECTED_ITEM" dataLine="4-23"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            style="margin-right: 1rem"
                            examplePath="drawer/drawer-nav-item/examples/with-selected-item"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="WITH_SELECTED_ITEM"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Nesting the Nav Items</div>
                    <div class="example-description">
                        Navigation items can be nested to allow for a multi-level navigation hierarchy. The
                        <code>&lt;blui-drawer-nav-item&gt;</code> allows nested navigation up to 3 levels deep.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-nav-item-with-nested-items-demo></app-nav-item-with-nested-items-demo>
                    </div>
                    <app-example-code [snippet]="WITH_NESTED_ITEMS" dataLine="4-7"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            style="margin-right: 1rem"
                            examplePath="drawer/drawer-nav-item/examples/with-nested-items"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="WITH_NESTED_ITEMS"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-nav-item-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-nav-item-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
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
    optionalKnobs: Partial<NavItemPlaygroundKnobs> = {
        title: {
            value: 'title',
            type: 'string',
            hint: 'Text to show on the first line',
        },
        subtitle: {
            value: 'subtitle',
            type: 'string',
            hint: 'Text to show on the second line',
        },
        statusColor: {
            value: '#ffac00',
            type: 'color',
            hint: 'Border color that appears on the side',
        },
        activeItemBackgroundShape: {
            value: 'square',
            componentDefault: 'square',
            type: 'select',
            options: ['square', 'round'],
            hint: 'Selected item background highlight',
        },
        chevron: {
            value: true,
            componentDefault: false,
            type: 'boolean',
            hint: 'Show a chevron to side',
        },
        divider: {
            value: true,
            componentDefault: false,
            type: 'boolean',
            hint: 'Show divider under nav item',
        },
        hidden: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Hide nav item',
        },
        hidePadding: {
            value: true,
            type: 'boolean',
            hint: 'Allow padding, used with icons',
        },
        ripple: {
            value: true,
            componentDefault: true,
            type: 'boolean',
            hint: 'Allow ripple effect on click',
        },
        selected: {
            value: true,
            componentDefault: false,
            type: 'boolean',
            hint: 'Mark selected item as active',
        },
    };
    otherKnobs: Partial<NavItemPlaygroundKnobs> = {
        addIcon: {
            label: 'Add Icon',
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Render a navigation icon',
        },
    };
    allProps = Object.assign({}, this.otherKnobs, this.optionalKnobs);
    knobGroups = [
        {
            title: 'Optional Properties',
            knobs: this.optionalKnobs,
            defaultExpanded: true,
        },
        {
            title: 'Other Properties',
            knobs: this.otherKnobs,
            defaultExpanded: false,
        },
    ];

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

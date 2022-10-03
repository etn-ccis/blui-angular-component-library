import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { LEFT_CONTENT } from './examples/with-left-content.component';
import { ICON } from './examples/with-icon.component';
import { STATUS } from './examples/with-status.component';
import { SUBTITLE } from './examples/with-subtitle.component';
import { RIGHT_CONTENT } from './examples/with-right-content.component';
import { WITHIN_LIST } from './examples/within-list.component';
import { InfoListItemPlaygroundKnobs } from './examples/playground.component';
import { DENSE } from './examples/dense.component';

@Component({
    selector: 'app-info-list-item-doc',
    template: `<app-component-doc-scaffold [md]="md" mdFileName="InfoListItem.md" [knobGroups]="knobGroups">
        <div examples class="app-example">
            <div class="example-section">
                <div class="example-heading">InfoListItem</div>
                <div class="example-description">
                    A <code>&lt;blui-info-list-item&gt;</code> is a wrapper around the Material List Item that 
                    provides convenient styling and content arrangement options.
                    A basic use case displays a combination of title, subtitle, and icon.
                </div>
                <div class="example-demo-wrapper">
                    <app-basic-info-list-item-demo></app-basic-info-list-item-demo>
                </div>
                <app-example-code [snippet]="BASIC"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Showing Lots of List Items</div>
                <div class="example-description">
                    When showing many list items, you can use the <code>dense</code> input to reduce 
                    their vertical padding and fit more list items on the page. 
                </div>
                <div class="example-demo-wrapper">
                    <app-dense-info-list-item-demo></app-dense-info-list-item-demo>
                </div>
                <app-example-code [snippet]="DENSE"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="DENSE"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Indicating Status</div>
                <div class="example-description">
                    You can apply a status to a list item using the <code>statusColor</code> input.
                    This will apply a colored stripe on the side of the list item.
                    
                    This can be paired with the <code>avatar</code> input to 
                    add additional highlighting around the icon.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-status-info-list-item-demo></app-with-status-info-list-item-demo>
                </div>
                <app-example-code [snippet]="STATUS" dataLine="1, 4"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="STATUS"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Adding Additional Content</div>
                <div class="example-description">
                    If you want to show additional content in the list item, such as a timestamp or action buttons, 
                    these can be provided through <code>blui-left-content</code> and / or <code>blui-right-content</code>.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-left-content-info-list-item-demo></app-with-left-content-info-list-item-demo>
                </div>
                <app-example-code [snippet]="LEFT_CONTENT" dataLine="3-6, 9"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="LEFT_CONTENT"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Clickable List Items</div>
                <div class="example-description">
                    If you want your list items to navigate elsewhere in your application, place them within a <code>&lt;mat-nav-list&gt;</code>.
                </div>
                <div class="example-demo-wrapper">
                    <app-within-list-info-list-item-demo></app-within-list-info-list-item-demo>
                </div>
                <app-example-code [snippet]="WITHIN_LIST"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="WITHIN_LIST"></app-copy-code-button>
                </div>
            </div>
        </div>

        <app-info-list-item-playground
            class="info-list-item-playground"
            playground
            [inputs]="allProps"
            (codeChange)="generatedCode = $event"
        ></app-info-list-item-playground>
        <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
    </app-component-doc-scaffold> `,
    styleUrls: ['./info-list-item-doc.component.scss'],
})
export class InfoListItemDocComponent {
    md: string;
    BASIC = BASIC;
    SUBTITLE = SUBTITLE;
    STATUS = STATUS;
    ICON = ICON;
    LEFT_CONTENT = LEFT_CONTENT;
    RIGHT_CONTENT = RIGHT_CONTENT;
    WITHIN_LIST = WITHIN_LIST;
    DENSE = DENSE;
    generatedCode: string;

    requiredProps: Partial<InfoListItemPlaygroundKnobs> = {
        title: {
            value: 'Info List Item',
            type: 'string',
            hint: 'Content to render for the title',
        },
    };

    /* Default playground knobs */
    optionalProps: Partial<InfoListItemPlaygroundKnobs> = {
        avatar: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Show a colored background for the icon',
        },
        chevron: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Add a chevron icon on the right',
        },
        dense: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Smaller height row with less padding\t',
        },
        divider: {
            value: undefined,
            componentDefault: undefined,
            type: 'select',
            options: [undefined, 'full', 'partial'],
            hint: 'Show a row separator below the row',
        },
        disabled: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Disable the list item',
        },
        hidePadding: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Remove left padding if no icon is used',
        },
        iconAlign: {
            value: 'left',
            componentDefault: 'left',
            type: 'select',
            options: ['left', 'center', 'right'],
            hint: 'Icon alignment when avatar is set to false',
        },
        info: {
            value: 'More information goes here',
            type: 'string',
            hint: 'Content to render for the third line of text',
        },
        statusColor: {
            value: '#007bc1',
            componentDefault: '',
            type: 'color',
            hint: 'Left border color',
        },
        subtitle: {
            value: 'with all customizable properties',
            type: 'string',
            hint: 'Content to render for the subtitle',
        },
        wrapInfo: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Whether to wrap info on overflow rather than using ellipsis',
        },
        wrapSubtitle: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Whether to wrap subtitle on overflow rather than using ellipsis',
        },
        wrapTitle: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Whether to wrap title on overflow rather than using ellipsis',
        },
    };

    otherProps = {
        showIcon: {
            label: 'Show Icon',
            value: true,
            type: 'boolean',
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
            defaultExpanded: false,
        },
        {
            title: 'Other Properties',
            knobs: this.otherProps,
            defaultExpanded: false,
        },
    ];
}

import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { COMPLEX } from './examples/complex.component';
import { TabName } from '../../shared/scaffold/scaffold.component';
import { COMPONENT_NAV_ITEMS } from '../../../../navigation/nav-items';
import { ListItemTagPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-list-item-tag-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ListItemTag.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">List Item Tag</div>
                    <div class="example-description">
                        A <code>&lt;blui-list-item-tag&gt;</code> is a stylized text element used for labeling. Text and
                        background colors are customizable via <code>fontColor</code> and
                        <code>backgroundColor</code> inputs.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-list-item-tag-demo></app-basic-list-item-tag-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Using within an Info List Item</div>
                    <div class="example-description">
                        The <code>&lt;blui-list-item-tag&gt;</code> commonly appears within an
                        <a [routerLink]="createRouterLink(routes.infoListItem.route)">Info List Item</a>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-complex-list-item-tag-demo></app-complex-list-item-tag-demo>
                    </div>
                    <app-example-code [snippet]="COMPLEX" dataLine="6-16"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="COMPLEX"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-list-item-tag-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-list-item-tag-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./list-item-tag-doc.component.scss'],
})
export class ListItemTagDocComponent {
    routes = COMPONENT_NAV_ITEMS;
    label = 'label';
    BASIC = BASIC;
    COMPLEX = COMPLEX;
    generatedCode: string;

    requiredProps: Partial<ListItemTagPlaygroundKnobs> = {
        label: {
            value: 'Velocity',
            type: 'string',
            hint: 'The label text',
        },
    };

    optionalProps: Partial<ListItemTagPlaygroundKnobs> = {
        fontColor: {
            type: 'color',
            hint: 'The label text',
            value: '',
            componentDefault: '',
        },
        backgroundColor: {
            type: 'color',
            hint: 'Color of the label background',
            value: '',
            componentDefault: '',
        },
    };
    allProps = Object.assign({}, this.requiredProps, this.optionalProps);
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
    ];

    ngAfterViewInit(): void {
        // We should move this functionality to a parent class so it's inherited.
        window.dispatchEvent(new Event('resize'));
    }

    createRouterLink(route: string): string {
        const tab: TabName = 'examples';
        return `/${route}/${tab}`;
    }
}

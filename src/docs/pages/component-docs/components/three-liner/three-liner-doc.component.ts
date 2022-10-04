import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { COMPLEX } from './examples/complex.component';
import { COMPONENT_NAV_ITEMS } from '../../../../navigation/nav-items';
import { TabName } from '../../shared/scaffold/scaffold.component';
import { ThreeLinerPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-three-liner-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ThreeLiner.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Three Liner</div>
                    <div class="example-description">
                        A <code>&lt;blui-three-liner&gt;</code> shows three lines of stylized text.
                        It is commonly used within an
                        <a [routerLink]="createRouterLink(routes.appBar.route)">App Bar</a>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-three-liner></app-basic-three-liner>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Adding Custom Content</div>
                    <div class="example-description">
                        If you want to display more than simple strings, you can pass custom content for each line.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-complex-three-liner></app-complex-three-liner>
                    </div>
                    <app-example-code [snippet]="COMPLEX" dataLine="2-8"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="COMPLEX"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-three-liner-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-three-liner-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./three-liner-doc.component.scss'],
})
export class ThreeLinerDocComponent {
    routes = COMPONENT_NAV_ITEMS;
    label = 'label';
    BASIC = BASIC;
    COMPLEX = COMPLEX;
    generatedCode: string;

    optionalProps: Partial<ThreeLinerPlaygroundKnobs> = {
        title: {
            value: 'Title',
            type: 'string',
            hint: 'First line content',
        },
        subtitle: {
            value: 'Subtitle',
            type: 'string',
            hint: 'Second line content',
        },
        info: {
            value: 'Info',
            type: 'string',
            hint: 'Third line content',
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

    ngAfterViewInit(): void {
        // We should move this functionality to a parent class so it's inherited.
        window.dispatchEvent(new Event('resize'));
    }

    createRouterLink(route: string): string {
        const tab: TabName = 'examples';
        return `/${route}/${tab}`;
    }
}

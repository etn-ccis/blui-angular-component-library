import { Component } from '@angular/core';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { MarkdownService } from 'ngx-markdown';
import { BASIC } from './examples/basic.component';
import { WITH_CUSTOM_CONTENT } from './examples/with-custom-content.component';
import { WITH_SUBTITLE } from './examples/with-subtitle.component';
import { WITH_ICON } from './examples/with-icon.component';
import { HeaderPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-drawer-header-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Drawer Header</div>
                    <div class="example-description">
                        The <code>&lt;blui-drawer-header&gt;</code> appears at the top of a drawer. It is commonly used
                        to show your application title and holds controls for the drawer.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-with-icon-drawer-header-demo></app-with-icon-drawer-header-demo>
                    </div>
                    <app-example-code [snippet]="WITH_ICON"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_ICON"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Customizing the Title Content</div>
                    <div class="example-description">
                        If you want to display more than just a title and subtitle, you can pass custom content via
                        <code>blui-title-content</code>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-with-custom-content-drawer-header-demo> </app-with-custom-content-drawer-header-demo>
                    </div>
                    <app-example-code [snippet]="WITH_CUSTOM_CONTENT" dataLine="3-6"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_CUSTOM_CONTENT"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-header-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-header-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-header-doc.component.scss'],
})
export class DrawerHeaderDocComponent {
    md: string;
    BASIC = BASIC;
    WITH_SUBTITLE = WITH_SUBTITLE;
    WITH_ICON = WITH_ICON;
    WITH_CUSTOM_CONTENT = WITH_CUSTOM_CONTENT;
    generatedCode: string;

    /* Default playground knobs */
    optionalProps: Partial<HeaderPlaygroundKnobs> = {
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
        color: {
            value: 'primary',
            type: 'select',
            options: [undefined, 'primary', 'secondary', 'warn'],
            hint: 'Themed background color for the header toolbar',
        },
        divider: {
            value: true,
            componentDefault: false,
            type: 'boolean',
            hint: 'Show divider under header',
        },
    };
    otherProps: Partial<HeaderPlaygroundKnobs> = {
        showIcon: {
            label: 'Add Icon',
            value: true,
            componentDefault: false,
            type: 'boolean',
            hint: 'Show a header icon',
        },
    };
    allProps = Object.assign({}, this.otherProps, this.optionalProps);
    knobGroups = [
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

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Header';
            const delimiterBottom = '## Drawer Subheader';
            const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = subsection.replace('images/', 'src/assets/md/images/');
        });
    }
}

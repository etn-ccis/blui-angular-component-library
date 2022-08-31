import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';
import { PERMANENT } from './examples/permanent.component';
import { PERSISTENT } from './examples/persistent.component';
import { DrawerLayoutPlaygroundProps } from './examples/playground.component';
import { RAIL_CONDENSED } from './examples/rail-condensed.component';
import { RAIL } from './examples/rail.component';
import { TEMPORARY } from './examples/temporary.component';
import { DrawerPlaygroundKnobs } from '../drawer/examples/playground.component';
import { Knob } from '../../../shared/scaffold/scaffold.component';

@Component({
    selector: 'app-drawer-layout-doc',
    template: `
        <app-component-doc-scaffold [md]="md" [knobGroups]="knobGroups" class="drawer-layout-examples">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Drawer Layout</div>
                    <div class="example-description">
                        The <code>&lt;blui-drawer-layout&gt;</code> manages how a <code>&lt;blui-drawer&gt;</code> and
                        its application content is displayed. It supports four different <code>variant</code> options -
                        'permanent', 'persistent', 'temporary', and 'rail'.
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Permanent Variant</div>
                    <div class="example-description">
                        The <code>permanent</code> variant is used when a <code>&lt;blui-drawer&gt;</code> is never
                        intended to dismiss from the screen.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-permanent-drawer-layout-demo></app-permanent-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="PERMANENT"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="PERMANENT"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Persistent Variant</div>
                    <div class="example-description">
                        The <code>persistent</code> variant allows a <code>&lt;blui-drawer&gt;</code> to open and close,
                        but never fully exits the screen.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-persistent-drawer-layout-demo></app-persistent-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="PERSISTENT"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="PERSISTENT"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Temporary Variant</div>
                    <div class="example-description">
                        The <code>temporary</code> variant allows a <code>&lt;blui-drawer&gt;</code> to enter the screen
                        from the left side as an overlay.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-temporary-drawer-layout-demo></app-temporary-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="TEMPORARY"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="TEMPORARY"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Rail Variant</div>
                    <div class="example-description">
                        The <code>rail</code> variant is similar to a collapsed <code>persistent</code> state.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-rail-drawer-layout-demo></app-rail-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="RAIL"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="RAIL"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Rail Condensed Variant</div>
                    <div class="example-description">
                        The <code>rail</code> variant can be <code>condensed</code> so that it only displays icons. Each
                        navigation item will show a tooltip when hovered while in this mode.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-rail-condensed-drawer-layout-demo></app-rail-condensed-drawer-layout-demo>
                    </div>
                    <app-example-code [snippet]="RAIL_CONDENSED"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="RAIL_CONDENSED"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <app-layout-playground
                playground
                [inputs]="allKnobs"
                (codeChange)="generatedCode = $event"
            ></app-layout-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./drawer-layout-doc.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DrawerLayoutDocComponent {
    md: string;
    PERMANENT = PERMANENT;
    PERSISTENT = PERSISTENT;
    TEMPORARY = TEMPORARY;
    RAIL = RAIL;
    RAIL_CONDENSED = RAIL_CONDENSED;
    generatedCode: string;

    /* Default playground knobs */
    required: Partial<DrawerLayoutPlaygroundProps> = {
        variant: {
            value: 'persistent',
            type: 'select',
            options: ['persistent', 'permanent', 'temporary', 'rail'],
            hint: 'Sets the drawer variant',
        },
    };
    optional: Partial<DrawerLayoutPlaygroundProps> = {
        width: {
            value: 350,
            componentDefault: 350,
            type: 'number',
            hint: 'Sets the drawer width',
            range: { min: 50, max: 500, step: 50, tickInterval: 1 },
        },
    };
    drawerOptionalProps: { [key: string]: Knob } = {
        condensed: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'condensed',
        },
        disableRailTooltip: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            hint: 'Hide tooltips on hover for the rail variant',
        },
    };
    allKnobs = Object.assign({}, this.required, this.optional, this.drawerOptionalProps);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.required,
            defaultExpanded: true,
        },
        {
            title: 'Optional Properties',
            knobs: this.optional,
            defaultExpanded: true,
        },
        {
            title: 'Drawer Properties',
            knobs: this.drawerOptionalProps,
            defaultExpanded: false,
        },
    ];

    constructor(
        private readonly _splitService: MarkdownSplitService,
        private readonly _markdownService: MarkdownService
    ) {}

    ngOnInit(): void {
        this._markdownService.getSource(`src/assets/md/Drawer.md`).subscribe((data) => {
            const delimiterTop = '## Drawer Layout';
            const delimiterBottom = '## Drawer Header';
            const layoutSection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
            this.md = layoutSection.replace('images/', 'src/assets/md/images/');
        });
    }
}

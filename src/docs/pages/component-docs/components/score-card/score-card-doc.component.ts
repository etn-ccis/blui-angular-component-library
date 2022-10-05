import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { MULTI_LINE } from './examples/multi-line.component';
import { WITH_ACTIONS } from './examples/with-actions.component';
import { WITH_HEROES } from './examples/with-heroes.component';
import { WITH_SCORE_BADGE } from './examples/with-score-badge.component';
import { TabName } from '../../shared/scaffold/scaffold.component';
import { COMPONENT_NAV_ITEMS } from '../../../../navigation/nav-items';
import { ScoreCardPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-spacer-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ScoreCard.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Score Card</div>
                    <div class="example-description">
                        <div>
                            A <code>&lt;blui-score-card&gt;</code> is a card component that calls attention to
                            particular values. It is frequently seen on dashboard interfaces.
                        </div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-score-card-demo></app-basic-score-card-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Adding a Badge</div>
                    <div class="example-description">
                        <div>
                            A Score Card reserves space for <code>blui-badge</code> content. This space is commonly used
                            to show <a [routerLink]="createRouterLink(routes.hero.route)">Heroes</a>.
                        </div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-with-heroes-score-card-demo></app-with-heroes-score-card-demo>
                    </div>
                    <app-example-code [snippet]="WITH_HEROES" dataLine="8-15"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_HEROES"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Adjusting the Badge</div>
                    <div class="example-description">
                        <div>The badge position can be adjusted via the <code>badgeOffset</code> input.</div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-with-score-badge-score-card-demo></app-with-score-badge-score-card-demo>
                    </div>
                    <app-example-code [snippet]="WITH_SCORE_BADGE" dataLine="5, 9-11"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_SCORE_BADGE"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Adding Actions</div>
                    <div class="example-description">
                        <div>
                            A Score Card can be interactive. Actions can be added in the header through the
                            <code>blui-action-item</code> content or at the bottom of the card via the
                            <code>blui-action-row</code>.
                        </div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-custom-header-score-card-demo></app-custom-header-score-card-demo>
                    </div>
                    <app-example-code [snippet]="WITH_ACTIONS" dataLine="4-8, 17-19"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_ACTIONS"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-score-card-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-score-card-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./score-card-doc.component.scss'],
})
export class ScoreCardDocComponent {
    routes = COMPONENT_NAV_ITEMS;
    BASIC = BASIC;
    MULTI_LINE = MULTI_LINE;
    WITH_ACTIONS = WITH_ACTIONS;
    WITH_HEROES = WITH_HEROES;
    WITH_SCORE_BADGE = WITH_SCORE_BADGE;

    generatedCode: string;

    requiredProps: Partial<ScoreCardPlaygroundKnobs> = {
        headerTitle: {
            componentDefault: '',
            value: 'Substation 3',
            type: 'string',
            hint: 'The first line of text in the header',
        },
    };

    optionalProps: Partial<ScoreCardPlaygroundKnobs> = {
        headerSubtitle: {
            componentDefault: '',
            value: 'Normal',
            type: 'string',
            hint: 'The second line of text in the header',
        },
        headerInfo: {
            componentDefault: '',
            value: '4 Devices',
            type: 'string',
            hint: 'The third line of text in the header',
        },
        badgeOffset: {
            componentDefault: 0,
            value: -80,
            type: 'number',
            range: { min: -100, max: 100, step: 1, tickInterval: 1 },
            hint: 'Vertical offset for the badge content',
        },
    };

    otherProps: Partial<ScoreCardPlaygroundKnobs> = {
        numberOfHeroes: {
            value: 1,
            type: 'number',
            range: { min: 0, max: 2, step: 1, tickInterval: 1 },
            hint: '',
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
            defaultExpanded: false,
        },
    ];

    createRouterLink(route: string): string {
        const tab: TabName = 'examples';
        return `/${route}/${tab}`;
    }
}

import { NgModule } from '@angular/core';
import { HeroModule, InfoListItemModule, ScoreCardModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './examples/basic.component';
import { ScoreCardDocComponent } from './score-card-doc.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MultiLineComponent } from './examples/multi-line.component';
import { WithActionsComponent } from './examples/with-actions.component';
import { WithHeroesComponent } from './examples/with-heroes.component';
import { WithScoreBadgeComponent } from './examples/with-score-badge.component';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        ScoreCardDocComponent,
        WithScoreBadgeComponent,
        BasicComponent,
        WithHeroesComponent,
        MultiLineComponent,
        WithActionsComponent,
        PlaygroundComponent,
    ],
    imports: [
        ScoreCardModule,
        HeroModule,
        InfoListItemModule,
        MatListModule,
        SharedCompDocsModule,
        MatIconModule,
        RouterModule,
    ],
    exports: [ScoreCardDocComponent],
})
export class ScoreCardDocModule {}

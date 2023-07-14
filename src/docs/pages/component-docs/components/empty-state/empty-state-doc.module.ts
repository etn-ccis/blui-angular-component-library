import { NgModule } from '@angular/core';
import { EmptyStateModule } from 'src/lib/core';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { EmptyStateDocComponent } from './empty-state-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { MatIconModule } from '@angular/material/icon';
import { WithDescriptionComponent } from './examples/with-description.component';
import { WithActionsComponent } from './examples/with-actions.component';
import { WithContentComponent } from './examples/with-content.component';
import { WithinCardComponent } from './examples/within-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        EmptyStateDocComponent,
        BasicExampleComponent,
        WithDescriptionComponent,
        WithActionsComponent,
        WithContentComponent,
        WithinCardComponent,
        PlaygroundComponent,
    ],
    imports: [EmptyStateModule, SharedCompDocsModule, MatIconModule, MatExpansionModule, BrowserAnimationsModule],
    exports: [EmptyStateDocComponent],
})
export class EmptyStateDocModule {}

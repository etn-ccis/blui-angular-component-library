import { NgModule } from '@angular/core';
import { AppBarModule, ThreeLinerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { AppBarDocComponent } from './app-bar-doc.component';
import { ThreeLinerComponent } from './examples/three-liner.component';
import { SnapAppBarComponent } from './examples/snap.component';
import { ExpandedComponent } from './examples/expanded.component';
import { CollapsedComponent } from './examples/collapsed.component';
import { MatIconModule } from '@angular/material/icon';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        AppBarDocComponent,
        SnapAppBarComponent,
        ExpandedComponent,
        CollapsedComponent,
        ThreeLinerComponent,
        PlaygroundComponent,
    ],
    imports: [AppBarModule, ThreeLinerModule, SharedCompDocsModule, MatIconModule],
    exports: [AppBarDocComponent],
})
export class AppBarDocModule {}

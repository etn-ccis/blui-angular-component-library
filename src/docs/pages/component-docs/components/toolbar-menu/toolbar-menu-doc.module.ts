import { NgModule } from '@angular/core';
import { ToolbarMenuModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './examples/basic.component';
import { MatListModule } from '@angular/material/list';
import { ToolbarMenuDocComponent } from './toolbar-menu-doc.component';
import { MatMenuModule } from '@angular/material/menu';
import { WithIconComponent } from './examples/with-icon.component';
import { WithinToolbarComponent } from './examples/within-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        ToolbarMenuDocComponent,
        WithIconComponent,
        BasicComponent,
        WithinToolbarComponent,
        PlaygroundComponent,
    ],
    imports: [
        MatToolbarModule,
        ToolbarMenuModule,
        MatListModule,
        MatMenuModule,
        SharedCompDocsModule,
        MatIconModule,
        RouterModule,
    ],
    exports: [ToolbarMenuDocComponent],
})
export class ToolbarMenuDocModule {}

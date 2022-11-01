import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule, UserMenuModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserMenuDocComponent } from './user-menu-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { FromListComponent } from './examples/from-list.component';
import { NonTextAvatarComponent } from './examples/non-text-avatar.component';
import { MenuHeaderComponent } from './examples/menu-header.component';
import { CustomHeaderComponent } from './examples/custom-header.component';
import { WithinToolbarComponent } from './examples/within-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlacementOptionsComponent } from './examples/placement-options.component';
import { BottomsheetComponent } from './examples/bottomsheet.component';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        UserMenuDocComponent,
        BasicExampleComponent,
        FromListComponent,
        NonTextAvatarComponent,
        MenuHeaderComponent,
        WithinToolbarComponent,
        CustomHeaderComponent,
        PlacementOptionsComponent,
        BottomsheetComponent,
        PlaygroundComponent,
    ],
    imports: [
        UserMenuModule,
        SpacerModule,
        InfoListItemModule,
        SharedCompDocsModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
    ],
    exports: [UserMenuDocComponent],
})
export class UserMenuDocModule {}

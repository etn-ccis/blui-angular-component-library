import {NgModule} from '@angular/core';
import {InfoListItemModule, UserMenuModule} from '@brightlayer-ui/angular-components';
import {SharedCompDocsModule} from '../../shared/shared-comp-docs.module';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {UserMenuDocComponent} from "./user-menu-doc.component";
import {BasicExampleComponent} from "./examples/basic.component";
import {FromListComponent} from "./examples/from-list.component";
import {NonTextAvatarComponent} from "./examples/non-text-avatar.component";
import {MenuHeaderComponent} from "./examples/menu-header.component";
import {CustomHeaderComponent} from "./examples/custom-header.component";

@NgModule({
    declarations: [
        UserMenuDocComponent, BasicExampleComponent, FromListComponent, NonTextAvatarComponent, MenuHeaderComponent, CustomHeaderComponent
    ],
    imports: [UserMenuModule, InfoListItemModule, SharedCompDocsModule, MatIconModule, RouterModule],
    exports: [UserMenuDocComponent],
})
export class UserMenuDocModule {}

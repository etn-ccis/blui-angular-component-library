import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {DrawerNavGroupComponent} from "./drawer-nav-group.component";
import {MatListModule} from "@angular/material/list";

@NgModule({
    declarations: [DrawerNavGroupComponent],
    imports: [
        CommonModule,
        MatDividerModule,
        MatListModule,
    ],
    exports: [DrawerNavGroupComponent],
})
export class DrawerNavGroupModule {}

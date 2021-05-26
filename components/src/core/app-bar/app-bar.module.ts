import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppBarComponent} from "./app-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ScrollDir} from "./scroll.directive";

@NgModule({
    declarations: [AppBarComponent, ScrollDir],
    imports: [CommonModule, MatToolbarModule],
    exports: [AppBarComponent, ScrollDir],
})
export class AppBarModule {}

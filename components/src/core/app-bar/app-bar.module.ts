import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppBarComponent} from "./app-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
    declarations: [AppBarComponent],
    imports: [CommonModule, MatToolbarModule],
    exports: [AppBarComponent],
})
export class AppBarModule {}

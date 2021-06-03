import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppBarComponent, AppBarThreeLiner} from './app-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [AppBarComponent, AppBarThreeLiner],
    imports: [CommonModule, MatToolbarModule],
    exports: [AppBarComponent, AppBarThreeLiner],
})
export class AppBarModule {}

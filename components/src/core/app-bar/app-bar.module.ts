import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SpacerModule } from '../utility/spacer.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AppBarComponent],
    imports: [CommonModule, MatToolbarModule, SpacerModule, MatIconModule],
    exports: [AppBarComponent],
})
export class AppBarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './toolbar-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SpacerModule } from '../utility/public-api';

@NgModule({
    declarations: [ToolbarMenuComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        SpacerModule,
    ],
    exports: [ToolbarMenuComponent],
})
export class ToolbarMenuModule {}

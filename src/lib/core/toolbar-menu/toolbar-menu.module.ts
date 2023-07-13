import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './toolbar-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

@NgModule({
    declarations: [ToolbarMenuComponent],
    imports: [CommonModule, MatToolbarModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatMenuModule],
    exports: [ToolbarMenuComponent],
})
export class ToolbarMenuModule {}

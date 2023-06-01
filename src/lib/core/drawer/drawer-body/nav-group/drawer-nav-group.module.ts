import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@NgModule({
    declarations: [DrawerNavGroupComponent],
    imports: [CommonModule, MatDividerModule, MatListModule],
    exports: [DrawerNavGroupComponent],
})
export class DrawerNavGroupModule {}

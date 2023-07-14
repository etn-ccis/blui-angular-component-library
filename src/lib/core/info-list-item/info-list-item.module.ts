import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { InfoListItemComponent } from './info-list-item.component';
import { SpacerModule } from '../utility/spacer.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [InfoListItemComponent],
    imports: [SpacerModule, MatIconModule, CommonModule, MatListModule, MatDividerModule],
    exports: [InfoListItemComponent, MatIconModule, MatListModule, SpacerModule, MatDividerModule],
})
export class InfoListItemModule {}

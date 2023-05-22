import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreCardComponent } from './score-card.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [ScoreCardComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule],
    exports: [ScoreCardComponent],
})
export class ScoreCardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreCardComponent} from "./scorecard.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
    declarations: [ScoreCardComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule],
    exports: [ScoreCardComponent],
})
export class ScoreCardModule {}

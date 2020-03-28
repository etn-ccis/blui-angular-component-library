import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreCardComponent} from "./scorecard.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    declarations: [ScoreCardComponent],
    imports: [CommonModule, MatCardModule],
    exports: [ScoreCardComponent],
})
export class ScoreCardModule {}

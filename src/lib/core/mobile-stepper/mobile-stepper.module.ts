import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileStepperComponent } from './mobile-stepper.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';

@NgModule({
    declarations: [MobileStepperComponent],
    imports: [CommonModule, MatButtonModule, MatProgressBarModule],
    exports: [MobileStepperComponent],
})
export class MobileStepperModule {}

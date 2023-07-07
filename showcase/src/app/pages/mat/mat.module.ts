import { NgModule } from '@angular/core';
import { MatSurfacesComponent } from './surfaces/surfaces.component';
import { MatDisplayComponent } from './data-display/display.component';
import { FeedbackBottomSheetExample, FeedbackDialogExample, MatFeedackComponent } from './feedback/feedback.component';
import { MatInputsComponent } from './inputs/inputs.component';
import { MatNavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

@NgModule({
    declarations: [
        MatSurfacesComponent,
        MatDisplayComponent,
        MatFeedackComponent,
        MatInputsComponent,
        MatNavigationComponent,
        FeedbackDialogExample,
        FeedbackBottomSheetExample,
    ],
    imports: [
        CommonModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatDialogModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatStepperModule,
        MatTabsModule,
        MatSelectModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatTableModule,
        MatTooltipModule,
    ],
    exports: [
        MatSurfacesComponent,
        MatDisplayComponent,
        MatFeedackComponent,
        MatInputsComponent,
        MatNavigationComponent,
        FeedbackDialogExample,
        FeedbackBottomSheetExample,
    ],
})
export class MatModule {}

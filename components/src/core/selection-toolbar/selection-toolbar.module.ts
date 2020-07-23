import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionToolbarComponent } from './selection-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SpacerModule } from '../utility/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [SelectionToolbarComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        SpacerModule,
    ],
    exports: [SelectionToolbarComponent],
})
export class SelectionToolbarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionToolbarComponent } from './selection-toolbar.component';

@NgModule({
    declarations: [SelectionToolbarComponent],
    imports: [CommonModule],
    exports: [SelectionToolbarComponent],
})
export class SelectionToolbarModule {}

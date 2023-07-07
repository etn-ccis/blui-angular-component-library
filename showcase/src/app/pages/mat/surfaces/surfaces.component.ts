import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-mat-surfaces',
    templateUrl: './surfaces.component.html',
    styleUrls: ['./surfaces.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'host',
    },
})
export class MatSurfacesComponent {}

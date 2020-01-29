import { Component, OnInit } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'pxb-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
    inputs: ['title', 'description'],
})
export class EmptyStateComponent {
    constructor() {}
    title: string;
    description: string;
    Colors: any = Colors;
}

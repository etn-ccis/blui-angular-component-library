import { Component, Input } from '@angular/core';

@Component({
    selector: 'pxb-list-item-tag',
    templateUrl: './list-item-tag.component.html',
    styleUrls: ['./list-item-tag.component.scss'],
})
export class ListItemTagComponent {
    @Input() label: string;
    @Input() backgroundColor: string;
    @Input() fontColor: string;

    ngOnInit() {
        console.log(`LOOK HERE ${this.fontColor}`);
    }
}

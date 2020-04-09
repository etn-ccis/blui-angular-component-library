import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'pxb-list-item-tag',
  templateUrl: './list-item-tag.component.html',
  styleUrls: ['./list-item-tag.component.scss']
})
export class ListItemTagComponent {

  Colors: any = Colors;

  @Input() label: string;
  @Input() backgroundColor: string;
  @Input() fontColor: string;
}

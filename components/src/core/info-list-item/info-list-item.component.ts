import {Component, Input, OnInit} from '@angular/core';
import * as Colors from '@pxblue/colors';


@Component({
  selector: 'pxb-info-list-item',
  templateUrl: './info-list-item.component.html',
  styleUrls: ['./info-list-item.component.scss']
})
export class InfoListItemComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() units: string;

  colors = Colors;

}

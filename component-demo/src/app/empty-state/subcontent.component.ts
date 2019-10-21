import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'subcontent',
  template: `  
    <mat-grid-list #grid [cols]="cols" rowHeight="160px" gutterSize="10px">
      <mat-grid-tile *ngFor="let device of devices" style="overflow: visible">
        <mat-card class="card" fxLayout="column">
          <h3 class="title" [style.background]="device.performance ? Colors.blue[500] : Colors.orange[500]">Device {{device.id}}</h3>
          <mat-card-content fxFlex="1 1 0px" style="margin: 0">
            <mat-list *ngIf="device.performance" style="padding: 0">
              <mat-list-item class="list-row">
                <h4 class="list-text">Performance:</h4>
                <h4 class="list-text">{{device.performance}}</h4>
              </mat-list-item>   
              <mat-list-item class="list-row">
                <h4 class="list-text">Battery Life:</h4>
                <h4 class="list-text">{{device.battery}}</h4>
              </mat-list-item>   
            </mat-list>
            <empty-state *ngIf="!device.performance" title="No Data">
              <mat-icon empty-icon style="font-size: 30px">devices</mat-icon>
            </empty-state>
          </mat-card-content>

          <mat-card-actions *ngIf="device.performance" fxFlex="0 0 auto" style="margin: 0; text-align: right">
            <button mat-button color="primary" >REPORT</button>
            <button mat-button color="primary" style="margin-right: 0">LEARN MORE</button>
          </mat-card-actions>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styleUrls: ['./subcontent.component.scss']
})

export class SubcontentComponent implements OnDestroy {
  cols: number = 4;
  subscription: any;
  Colors: Object = Colors;
  devices = [
    { id: 101 },
    { id: 201, performance: "Poor", battery: "20%" },
    { id: 202, performance: "Average", battery: "15%" },
    { id: 203, performance: "Excellent", battery: "96%" }
  ];

  constructor(private breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef) {
    this.subscription = this.breakpointObserver.observe([ '(max-width: 599.99px)', '(max-width: 959.99px)']).subscribe(result => {
      const small = Object.keys(result.breakpoints)[0];
      const medium = Object.keys(result.breakpoints)[1];

      if (result.breakpoints[small]) { this.cols = 1 }
      else if (result.breakpoints[medium]) { this.cols = 2 }
      else { this.cols = 4 }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
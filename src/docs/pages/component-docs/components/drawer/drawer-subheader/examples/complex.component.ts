import { Component } from '@angular/core';

export const COMPLEX = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-header title="Title"></blui-drawer-header>
        <blui-drawer-subheader>
              <mat-form-field appearance="outline"
                style="width: 100%; padding: 8px 16px; box-sizing: border-box">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search criteria">
                <mat-icon matSuffix>search</mat-icon>
                <mat-hint style="min-width: 360px">
                    Sample search functionality
                </mat-hint>
              </mat-form-field>
          </blui-drawer-subheader>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-complex-drawer-subheader-demo',
    template: COMPLEX,
})
export class ComplexComponent {}

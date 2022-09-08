import { Component } from '@angular/core';

export const ICON_DIFFS = `<blui-hero-banner *ngFor="let size of [36, 48, 72]">
    <blui-hero label="SVG" [value]="size + 'px'" [iconSize]="size">
        <mat-icon blui-primary svgIcon="blui-icons:voltage_circled_outline">
        </mat-icon>
    </blui-hero>
    <blui-hero label="mat icon" [value]="size + 'px'" [iconSize]="size">
        <mat-icon blui-primary>schedule</mat-icon>
    </blui-hero>
    <blui-hero label="icon font" [value]="size + 'px'" [iconSize]="size">
        <i blui-primary class="blui-current_circled"></i>
    </blui-hero>
    <blui-hero label="PNG" [value]="size + 'px'" [iconSize]="size">
        <img blui-primary src="assets/trex.png" alt="A T-Rex as the avatar image" />
    </blui-hero>
</blui-hero-banner>
`;

@Component({
    selector: 'app-icon-diffs-hero-demo',
    template: ICON_DIFFS,
})
export class IconDiffsComponent {}

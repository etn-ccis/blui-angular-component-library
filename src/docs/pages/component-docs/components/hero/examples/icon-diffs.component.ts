import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const ICON_DIFFS = `<blui-hero-banner *ngFor="let size of [36, 48, 72]">
    <blui-hero label="SVG" [value]="size + 'px'" 
        [iconBackgroundColor]="bluiWhite" [iconSize]="size">
        <mat-icon blui-primary svgIcon="blui-icons:voltage_circled_outline" 
            [style.color]="bluiBlue">
        </mat-icon>
    </blui-hero>
    <blui-hero label="mat icon" [value]="size + 'px'" 
        [iconBackgroundColor]="bluiWhite" [iconSize]="size">
        <mat-icon blui-primary>schedule</mat-icon>
    </blui-hero>
    <blui-hero label="web icon" [value]="size + 'px'" 
        [iconBackgroundColor]="bluiWhite" [iconSize]="size">
        <i blui-primary [style.color]="bluiGreen" class="blui-current_circled"></i>
    </blui-hero>
    <blui-hero label="PNG" [value]="size + 'px'" 
        [iconBackgroundColor]="bluiWhite" [iconSize]="size">
        <img blui-primary src="assets/trex.png" alt="A T-Rex as the avatar image" />
    </blui-hero>
</blui-hero-banner>
`;

@Component({
    selector: 'app-icon-diffs-hero-demo',
    template: ICON_DIFFS,
})
export class IconDiffsComponent {
    bluiBlue = Colors.blue[500];
    bluiWhite = Colors.white[50];
    bluiRed = Colors.red[500];
    bluiGreen = Colors.green[500];
}

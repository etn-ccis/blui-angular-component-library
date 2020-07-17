import { Component, NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HeroModule } from '@pxblue/angular-components';
import * as Colors from '@pxblue/colors';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
const iconSet = require('@pxblue/icons-svg/icons.svg');
const Trex = require('../../assets/trex.png');

@Component({
    selector: 'image-types-story',
    template: `
        <pxb-hero-banner>
            <pxb-hero label="SVG" value="36px" [iconBackgroundColor]="colors.white[50]">
                <mat-icon svgIcon="px-icons:grade_a" pxb-primary [style.color]="colors.blue[500]"></mat-icon>
            </pxb-hero>
            <pxb-hero label="mat icon" value="36px" [iconBackgroundColor]="colors.white[50]">
                <mat-icon pxb-primary>schedule</mat-icon>
            </pxb-hero>
            <pxb-hero label="web icon" value="36px" [iconBackgroundColor]="colors.white[50]">
                <i pxb-primary [style.color]="colors.green[800]" class="pxb-current_circled"></i>
            </pxb-hero>
            <pxb-hero label="PNG" value="36px" [iconBackgroundColor]="colors.white[50]">
                <img pxb-primary [src]="trex" alt="A T-Rex as the avatar image" />
            </pxb-hero>
            <pxb-hero label="progress icon" value="36px" [iconBackgroundColor]="colors.white[50]">
                <battery-progress pxb-primary size="36" [color]="colors.red[500]" percent="15"></battery-progress>
            </pxb-hero>
        </pxb-hero-banner>

        <pxb-hero-banner>
            <pxb-hero label="SVG" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <mat-icon svgIcon="px-icons:grade_a" pxb-primary [style.color]="colors.blue[500]"></mat-icon>
            </pxb-hero>
            <pxb-hero label="mat icon" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <mat-icon pxb-primary>schedule</mat-icon>
            </pxb-hero>
            <pxb-hero label="web icon" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <i pxb-primary [style.color]="colors.green[800]" class="pxb-current_circled"></i>
            </pxb-hero>
            <pxb-hero label="PNG" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <img pxb-primary [src]="trex" alt="A T-Rex as the avatar image" />
            </pxb-hero>
            <pxb-hero label="progress icon" value="48px" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <battery-progress pxb-primary size="48" [color]="colors.yellow[500]" percent="50"></battery-progress>
            </pxb-hero>
        </pxb-hero-banner>

        <pxb-hero-banner>
            <pxb-hero label="SVG" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <mat-icon svgIcon="px-icons:grade_a" pxb-primary [style.color]="colors.blue[500]"></mat-icon>
            </pxb-hero>
            <pxb-hero label="mat icon" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <mat-icon pxb-primary>schedule</mat-icon>
            </pxb-hero>
            <pxb-hero label="web icon" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <i pxb-primary [style.color]="colors.green[800]" class="pxb-current_circled"></i>
            </pxb-hero>
            <pxb-hero label="PNG" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <img pxb-primary [src]="trex" alt="A T-Rex as the avatar image" />
            </pxb-hero>
            <pxb-hero label="progress icon" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <battery-progress pxb-primary size="72" [color]="colors.green[500]" percent="92"></battery-progress>
            </pxb-hero>
        </pxb-hero-banner>
    `,
})
export class DifferentImageTypesComponent {
    colors = Colors;
    trex = Trex;
    constructor(private readonly _matIconRegistry: MatIconRegistry, private readonly _domSanitizer: DomSanitizer) {
        this._matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this._domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
        );
    }
}

@NgModule({
    declarations: [DifferentImageTypesComponent],
    imports: [MatIconModule, BrowserModule, HeroModule, HttpClientModule, NgProgressIconsModule],
    exports: [DifferentImageTypesComponent],
})
export class DifferentImageTypesModule {}

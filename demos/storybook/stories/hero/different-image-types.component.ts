import { Component, NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HeroModule } from '@brightlayer-ui/angular-components';
import * as Colors from '@brightlayer-ui/colors';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressIconsModule } from '@brightlayer-ui/ng-progress-icons';
const iconSet = require('@brightlayer-ui/icons-svg/icons.svg');
const Trex = require('../../assets/trex.png');

@Component({
    selector: 'image-types-story',
    template: `
        <blui-hero-banner>
            <blui-hero label="SVG" value="36px" [iconBackgroundColor]="colors.white[50]">
                <mat-icon
                    svgIcon="px-icons:voltage_circled_outline"
                    blui-primary
                    [style.color]="colors.blue[500]"
                ></mat-icon>
            </blui-hero>
            <blui-hero label="mat icon" value="36px" [iconBackgroundColor]="colors.white[50]">
                <mat-icon blui-primary>schedule</mat-icon>
            </blui-hero>
            <blui-hero label="web icon" value="36px" [iconBackgroundColor]="colors.white[50]">
                <i blui-primary [style.color]="colors.green[800]" class="blui-current_circled"></i>
            </blui-hero>
            <blui-hero label="PNG" value="36px" [iconBackgroundColor]="colors.white[50]">
                <img blui-primary [src]="trex" alt="A T-Rex as the avatar image" />
            </blui-hero>
            <blui-hero label="progress icon" value="36px" [iconBackgroundColor]="colors.white[50]">
                <battery-progress blui-primary [color]="colors.red[500]" percent="15"></battery-progress>
            </blui-hero>
        </blui-hero-banner>

        <blui-hero-banner>
            <blui-hero label="SVG" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <mat-icon
                    svgIcon="px-icons:voltage_circled_outline"
                    blui-primary
                    [style.color]="colors.blue[500]"
                ></mat-icon>
            </blui-hero>
            <blui-hero label="mat icon" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <mat-icon blui-primary>schedule</mat-icon>
            </blui-hero>
            <blui-hero label="web icon" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <i blui-primary [style.color]="colors.green[800]" class="blui-current_circled"></i>
            </blui-hero>
            <blui-hero label="PNG" units="px" value="48" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <img blui-primary [src]="trex" alt="A T-Rex as the avatar image" />
            </blui-hero>
            <blui-hero label="progress icon" value="48px" iconSize="48" [iconBackgroundColor]="colors.white[50]">
                <battery-progress blui-primary [color]="colors.yellow[500]" percent="50"></battery-progress>
            </blui-hero>
        </blui-hero-banner>

        <blui-hero-banner>
            <blui-hero label="SVG" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <mat-icon
                    svgIcon="px-icons:voltage_circled_outline"
                    blui-primary
                    [style.color]="colors.blue[500]"
                ></mat-icon>
            </blui-hero>
            <blui-hero label="mat icon" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <mat-icon blui-primary>schedule</mat-icon>
            </blui-hero>
            <blui-hero label="web icon" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <i blui-primary [style.color]="colors.green[800]" class="blui-current_circled"></i>
            </blui-hero>
            <blui-hero label="PNG" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <img blui-primary [src]="trex" alt="A T-Rex as the avatar image" />
            </blui-hero>
            <blui-hero label="progress icon" value="72px" iconSize="72" [iconBackgroundColor]="colors.white[50]">
                <battery-progress blui-primary [color]="colors.green[500]" percent="92"></battery-progress>
            </blui-hero>
        </blui-hero-banner>
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

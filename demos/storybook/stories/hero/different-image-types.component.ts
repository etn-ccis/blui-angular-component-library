import {Component, NgModule} from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { HeroModule } from '@pxblue/angular-components';
import * as Colors from '@pxblue/colors';
import {HttpClientModule} from '@angular/common/http';
const iconSet = require('@pxblue/icons-svg/icons.svg');
const Trex = require('../../assets/pxblue.png');

@Component({
    selector: 'image-types-story',
    template: `
        <pxb-hero-banner>
            <pxb-hero label='SVG' value='normal' iconSize='normal' [iconBackgroundColor]='colors.white[50]'>
                <mat-icon svgIcon='px-icons:grade_a' primary [style.color]='colors.blue[500]'></mat-icon>
            </pxb-hero>
            <pxb-hero label='mat icon' value='normal' iconSize='normal' [iconBackgroundColor]='colors.white[50]'>
                <mat-icon primary>schedule</mat-icon>
            </pxb-hero>
            <pxb-hero label='web icon' value='normal' iconSize='normal' [iconBackgroundColor]='colors.white[50]'>
                <i primary [style.color]='colors.green[800]' class='pxb-current_circled'></i>
            </pxb-hero>
            <pxb-hero label='PNG' value='normal' iconSize='normal' [iconBackgroundColor]='colors.white[50]'>
                <img primary [src]='trex' />
            </pxb-hero>
        </pxb-hero-banner>

        <pxb-hero-banner>
            <pxb-hero label='SVG' units='px' value='48' iconSize='48' [iconBackgroundColor]='colors.white[50]'>
                <mat-icon svgIcon='px-icons:grade_a' primary [style.color]='colors.blue[500]'></mat-icon>
            </pxb-hero>
            <pxb-hero label='mat icon' units='px' value='48' iconSize='48' [iconBackgroundColor]='colors.white[50]'>
                <mat-icon primary>schedule</mat-icon>
            </pxb-hero>
            <pxb-hero label='web icon' units='px' value='48'  iconSize='48' [iconBackgroundColor]='colors.white[50]'>
                <i primary [style.color]='colors.green[800]' class='pxb-current_circled'></i>
            </pxb-hero>
            <pxb-hero label='PNG' units='px' value='48' iconSize='48' [iconBackgroundColor]='colors.white[50]'>
                <img primary [src]='trex' />
            </pxb-hero>
        </pxb-hero-banner>

        <pxb-hero-banner>
            <pxb-hero label='SVG' value='large' iconSize='large' [iconBackgroundColor]='colors.white[50]'>
                <mat-icon svgIcon='px-icons:grade_a' primary [style.color]='colors.blue[500]'></mat-icon>
            </pxb-hero>
            <pxb-hero label='mat icon' value='large' iconSize='large' [iconBackgroundColor]='colors.white[50]'>
                <mat-icon primary>schedule</mat-icon>
            </pxb-hero>
            <pxb-hero label='web icon' value='large'  iconSize='large' [iconBackgroundColor]='colors.white[50]'>
                <i primary [style.color]='colors.green[800]' class='pxb-current_circled'></i>
            </pxb-hero>
            <pxb-hero label='PNG' value='large' iconSize='large' [iconBackgroundColor]='colors.white[50]'>
                <img primary [src]='trex' />
            </pxb-hero>
        </pxb-hero-banner>
    `,
})
export class DifferentImageTypesComponent {
    colors = Colors;
    trex = Trex;
    constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
        );
    }
}

@NgModule({
    declarations: [DifferentImageTypesComponent],
    imports: [MatIconModule, BrowserModule, HeroModule, HttpClientModule],
    exports: [DifferentImageTypesComponent],
})
export class DifferentImageTypesModule {}

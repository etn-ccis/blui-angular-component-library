import '@pxblue/themes/angular/theme.scss';
import {Component, NgModule, OnInit, OnDestroy} from '@angular/core';
import 'typeface-open-sans';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {UtilModule} from "../utils";
import * as Colors from '@pxblue/colors';
const bg = require('../../assets/circles-bg.svg');
const icon = require('../../assets/pxb-icon.svg');

@Component({
    selector: 'welcome',
    styleUrls: ['welcome.component.css'],
    template: `
        <div class="pxb-blue mat-typography root"
             [style.backgroundColor]="pxbColors.blue[500]" 
             [style.color]="pxbColors.white[50]"
             [style.backgroundImage]='background'>
            
            <div class="container">
                <div class="img-container">
                    <img [src]="icon" alt="pxb-icon" class="rotateMe" />
                </div>
                <section class="mat-typography">
                    <div class="mat-display-3">Power Xpert <strong>Blue</strong></div>
                    <div class="mat-display-1" style="margin-top: -20px">Angular components</div>
                    <div class="cards">
                        <mat-card>
                            <div class="card">
                                <div class="mat-h4">
                                    Storybook isolates components and allows you to interact with them via knobs.
                               </div>
                                <button mat-stroked-button color="primary">Get Started</button>
                            </div>
                        </mat-card>
                        <mat-card>
                            <div class="card">
                                <div class="mat-h4">
                                    PX Blue is an open-source design system.  View our code here:
                                </div>
                                <button mat-stroked-button color="primary">Github</button>
                            </div>
                        </mat-card>
                    </div>
                    <div [style.color]="pxbColors.white[500]" class="buttons">
                        <button mat-flat-button>Home</button>
                        <button mat-flat-button>Github</button>
                        <button mat-flat-button>NPM</button>
                    </div>
                </section>
            </div>
        </div>
    `,
})
export class WelcomeComponent implements OnInit, OnDestroy {
    pxbColors = Colors;
    background = `url(${bg})`;
    icon = icon;

    ngOnInit(): void {
        const root = document.getElementById('root');
        root.style.height = '100%';
        root.style.width = '100%';
    }

    ngOnDestroy(): void {
        const root = document.getElementById('root');
        root.style.height = 'unset';
        root.style.width = 'unset';
    }
}

@NgModule({
    imports: [UtilModule, MatButtonModule, MatCardModule, MatDividerModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent, UtilModule],
})
export class WelcomeModule {}

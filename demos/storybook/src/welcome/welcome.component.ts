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
                    <img [src]="pxbIcon" alt="pxb-icon" class="rotate" />
                </div>
                <section class="mat-typography">
                    <div class="mat-display-3">Power Xpert <strong>Blue</strong></div>
                    <div class="mat-display-1" style="margin-top: -16px">Angular Component Library</div>
                    <div class="mat-h3 description">
                        Learn about our PX Blue components in the API section or interact with them in the Playground.
                    </div>
                    <div class="buttons">
                        <a target="_blank" href="https://github.com/pxblue/angular-component-library" mat-stroked-button 
                            [style.color]="pxbColors.white[50]" 
                            [style.borderColor]="pxbColors.white[50]"
                            class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github" [style.fill]="pxbColors.white[50]">
                                <title>github</title>
                                <rect width="24" height="24" fill="none"/>
                                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
                            </svg>
                            <span class="mat-h4">Github</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    `,
})
export class WelcomeComponent implements OnInit, OnDestroy {
    pxbColors = Colors;
    background = `url(${bg})`;
    pxbIcon = icon;

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

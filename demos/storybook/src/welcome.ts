import '@pxblue/themes/angular/theme.scss';
import {Component, NgModule, OnInit, OnDestroy} from '@angular/core';
import 'typeface-open-sans';
import {UtilModule} from "./utils";
import * as Colors from '@pxblue/colors';
const bg = require('../assets/circles-bg.svg');

@Component({
    selector: 'welcome',
    template: `
        <div class="pxb-blue mat-typography"
              style="
                  height:100%; 
                  width: 100%; 
                  display: flex; 
                  align-content: center; 
                  justify-content: center;"
             
             [style.backgroundColor]="pxbColors.blue[500]" 
             [style.color]="pxbColors.white[50]"
             [style.backgroundImage]='background'>
            
            <div style="display:flex; 
            flex-direction: column; 
            justify-content: center;"
            >[TODO: Landing Page]</div>
        </div>
    `,
})
export class WelcomeComponent implements OnInit, OnDestroy {
    pxbColors = Colors;
    background = `url(${bg})`;

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
    imports: [UtilModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent, UtilModule],
})
export class WelcomeModule {}

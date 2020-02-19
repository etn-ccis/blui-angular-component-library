import '@pxblue/themes/angular/theme.scss';
import { Component, NgModule } from '@angular/core';
import 'typeface-open-sans';

@Component({
    selector: 'welcome',
    template: `
        <div class="pxb-blue mat-typography" style="height:100%; width: 100%;">
            [TODO: Landing Page]
        </div>
    `,
})
export class WelcomeComponent {
    ngOnInit(): void {
        // Uh, ref to story component too
    }
}

@NgModule({
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent],
})
export class WelcomeModule {}

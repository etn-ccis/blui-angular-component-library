import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as PXBColors from '@pxblue/colors';
import { ViewportService } from './services/viewport.service';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { StateService } from './services/state.service';
const iconSet = require('@pxblue/icons-svg/icons.svg');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    colors: Record<string, any>;
    variant: DrawerLayoutVariantType = 'persistent';

    constructor(
        public readonly stateService: StateService,
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer,
        private readonly viewportService: ViewportService
    ) {
        this.colors = PXBColors;
        this.matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
        );
    }

    test(): void {
        // eslint-disable-next-line no-alert
        alert('Hero component');
    }

    isMobile(): boolean {
        return this.viewportService.isSmall();
    }

    getVariant(): DrawerLayoutVariantType {
        return this.viewportService.isSmall() ? 'temporary' : 'persistent';
    }
}

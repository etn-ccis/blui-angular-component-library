import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as PXBColors from '@pxblue/colors';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const iconSet = require('@pxblue/icons-svg/icons.svg');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    colors: Record<string, any>;
    drawerOpen = true;
    variant = 'persistent';
    variantDrawerHandler: boolean;
    constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {
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

    clickDrawerHeaderButton(): void {
        // eslint-disable-next-line
        console.log('drawer header button clicked...');
    }

    setVariant(str: string): void {
        this.drawerOpen = true;
        this.variant = str;
        this.updateChildDrawer();
    }

    // end user is responsible for state management of the following:
    // @TODO: Joe check these out!
    toggleDrawer(): void {
        if (this.variant !== 'permanent') {
            this.drawerOpen = !this.drawerOpen;
        }
    }

    toggleDrawerAndUpdateChildDrawer(): void {
        this.toggleDrawer();
        this.updateChildDrawer();
    }

    updateChildDrawer(): void {
        this.variantDrawerHandler = this.drawerOpen;
    }
}

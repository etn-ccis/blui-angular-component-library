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
    drawerBodyTestItems;
    colors: Record<string, any>;
    constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {
        this.colors = PXBColors;
        this.matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
        );

        this.drawerBodyTestItems = [
            {
                title: 'First DrawerNavGroup',
                itemID: 'firstDrawerNavGroup',
                items: [
                    {
                        itemID: 'drawerNavItem1',
                        statusColor: this.colors.red[500],
                        title: 'DrawerNavItem 1',
                        subtitle: 'Subtitle 1',
                        icon: '<mat-icon>home</mat-icon>'
                    },
                    {
                        itemID: 'drawerNavItem2',
                        statusColor: this.colors.blue[500],
                        title: 'DrawerNavItem 2',
                        subtitle: 'Subtitle 2'
                    }
                ]
            },
            {
                title: 'Second DrawerNavGroup',
                itemID: 'secondDrawerNavGroup',
                items: [
                    {
                        itemID: 'drawerNavItem3',
                        title: 'DrawerNavItem 3',
                        icon: '<mat-icon>work</mat-icon>'
                    },
                    {
                        itemID: 'drawerNavItem4',
                        statusColor: this.colors.orange[500],
                        title: 'DrawerNavItem 4',
                        icon: '<mat-icon>work</mat-icon>'
                    }
                ]
            }
        ]
    }

    test(): void {
        // eslint-disable-next-line no-alert
        alert('Hero component');
    }

    clickDrawerHeaderButton(): void {
        // eslint-disable-next-line
        console.log('drawer header button clicked...');
    }
}

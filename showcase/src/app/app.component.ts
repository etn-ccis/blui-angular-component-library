import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewportService } from './services/viewport.service';
import { DrawerLayoutVariantType } from '@brightlayer-ui/angular-components';
import { StateService } from './services/state.service';
import { RtlService } from './services/rtl.service';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    isRtl = false;
    variant: DrawerLayoutVariantType = 'persistent';
    userMenuOpen = false;
    title: string;
    menuGroups = [
        {
            items: [
                {
                    title: 'Account Settings',
                    icon: 'settings',
                },
                {
                    title: 'Log Out',
                    icon: 'logout',
                },
            ],
        },
        {
            title: 'Contact Us',
            items: [
                {
                    title: 'eatonhelp@eaton.com',
                    icon: 'send',
                },
                {
                    title: '1-866-905-9988',
                    icon: 'mail',
                },
            ],
        },
    ];
    constructor(
        private readonly _stateService: StateService,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _domSanitizer: DomSanitizer,
        private readonly _viewportService: ViewportService,
        private readonly _rtlService: RtlService,
        private readonly _router: Router,
        private readonly _themeService: ThemeService
    ) {
        this.listenForRouteChanges();
        this._matIconRegistry.addSvgIconSetInNamespace(
            'blui-icons',
            /* **Note to Brightlayer UI Users:
                Stackblitz has difficulty reading static assets found within the node_modules folder.
                For this example to work inside Stackblitz, we use a https request to fetch the Brightlayer UI icon set.
                In normal situations, we encourage you to import the iconSet directly from the node_modules folder like below:
                    // const iconSet = require('@brightlayer-ui/icons-svg/icons.svg').default;
                    // this._domSanitizer.bypassSecurityTrustResourceUrl('iconSet')
             */
            this._domSanitizer.bypassSecurityTrustResourceUrl(
                'https://raw.githubusercontent.com/etn-ccis/blui-icons/dev/packages/svg/icons.svg'
            )
        );
    }

    listenForRouteChanges(): void {
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationEnd) {
                switch (route.urlAfterRedirects.split('?')[0]) {
                    case `/blui-components/data-display-components`: {
                        this.title = 'Brightlayer UI Data Display';
                        break;
                    }
                    case `/blui-components/navigation-components`: {
                        this.title = 'Brightlayer UI Navigation';
                        break;
                    }
                    case `/blui-components/surface-components`: {
                        this.title = 'Brightlayer UI Surfaces';
                        break;
                    }
                    case `/material-components/data-display-components`: {
                        this.title = 'Material Data Display';
                        break;
                    }
                    case `/material-components/feedback-components`: {
                        this.title = 'Material Feedback';
                        break;
                    }
                    case `/material-components/input-components`: {
                        this.title = 'Material Inputs';
                        break;
                    }
                    case `/material-components/navigation-components`: {
                        this.title = 'Material Navigation';
                        break;
                    }
                    case `/material-components/surface-components`: {
                        this.title = 'Material Surfaces';
                        break;
                    }
                    case `/templates/alarms`: {
                        this.title = 'Alarms';
                        break;
                    }
                    case `/templates/settings`: {
                        this.title = 'Settings';
                        break;
                    }
                    case `/templates/dashboard`: {
                        this.title = 'Dashboard';
                        break;
                    }
                    default:
                        return;
                }
            }
        });
    }

    isMobile(): boolean {
        return this._viewportService.isSmall();
    }

    getVariant(): DrawerLayoutVariantType {
        if (this.variant === 'persistent' && this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(false);
        } else if (this.variant === 'temporary' && !this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(true);
        }

        this.variant = this._viewportService.isSmall() ? 'temporary' : 'persistent';
        return this.variant;
    }

    closeDrawer(): void {
        this._stateService.setDrawerOpen(false);
    }

    openDrawer(): void {
        this._stateService.setDrawerOpen(true);
    }

    toggleTheme(): void {
        const body = document.querySelector('body') as HTMLElement;
        if (this._themeService.isDarkMode) {
            body.classList.remove('blui-blue-dark');
            body.classList.add('blui-blue');
        } else {
            body.classList.remove('blui-blue');
            body.classList.add('blui-blue-dark');
        }
        this._themeService.isDarkMode = !this._themeService.isDarkMode;
    }

    // Use in unit tests.
    isDarkMode(): boolean {
        return this._themeService.isDarkMode;
    }

    toggleDirectionality(): void {
        this.isRtl = !this.isRtl;
        this._rtlService.setRTL(this.isRtl);
    }
}

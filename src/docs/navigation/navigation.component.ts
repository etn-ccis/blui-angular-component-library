import { Component } from '@angular/core';
import { DrawerLayoutVariantType } from '@brightlayer-ui/angular-components';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ViewportService } from '../services/viewport/viewport.service';
import { DrawerStateService } from '../services/drawer-state/drawer-state.service';
import { APP_NAV_ITEMS, COMPONENT_NAV_ITEMS, DRAWER_NAV_ITEMS, NavItem } from './nav-items';
import { TabName } from '../pages/component-docs/shared/scaffold/scaffold.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    toolbarTitle: string;
    routeListener: Subscription;
    variant: DrawerLayoutVariantType;
    navItems = [APP_NAV_ITEMS.home];
    componentNavItems = [
        COMPONENT_NAV_ITEMS.appBar,
        COMPONENT_NAV_ITEMS.channelValue,
        COMPONENT_NAV_ITEMS.drawer,
        COMPONENT_NAV_ITEMS.emptyState,
        COMPONENT_NAV_ITEMS.hero,
        COMPONENT_NAV_ITEMS.infoListItem,
        COMPONENT_NAV_ITEMS.listItemTag,
        COMPONENT_NAV_ITEMS.mobileStepper,
        COMPONENT_NAV_ITEMS.spacer,
        COMPONENT_NAV_ITEMS.userMenu,
    ];

    constructor(
        private readonly _router: Router,
        private readonly _viewportService: ViewportService,
        private readonly _stateService: DrawerStateService
    ) {
        this._listenForRouteChanges();
    }

    navigate(url: string): void {
        void this._router.navigateByUrl(url);
    }

    isOpen(): boolean {
        return this._stateService.getDrawerOpen();
    }

    selectItem(navItem: NavItem): void {
        // Currently treats the top-level as non-navigation items.
        if (navItem.children) {
            return;
        }

        const defaultTab: TabName = 'examples';
        this.navigate(`${navItem.route}/${defaultTab}`);
        if (this._viewportService.isMedium()) {
            this._stateService.setDrawerOpen(false);
        }
    }

    toggleDrawerOpen(): void {
        this._stateService.setDrawerOpen(!this._stateService.getDrawerOpen());
    }

    closeDrawer(): void {
        this._stateService.setDrawerOpen(false);
    }

    openDrawer(): void {
        this._stateService.setDrawerOpen(true);
    }

    getSelectedItem(): string {
        return this._stateService.getSelectedItem();
    }

    /** Returns angular route, but without the TabName at the end. */
    private _getRouteMinusTab(): string {
        return this._router.url.substr(0, this._router.url.lastIndexOf('/'));
    }

    // Observes route changes and determines which BLUI Auth page to show via route name.
    private _listenForRouteChanges(): void {
        this.routeListener = this._router.events.subscribe((route) => {
            // Scroll to top of page.
            const scrollEl = document.getElementsByClassName('mat-drawer-content')[0];
            scrollEl.scrollTop = 0;

            if (route instanceof NavigationEnd) {
                const currentRoute = this._getRouteMinusTab();
                const navSections = [APP_NAV_ITEMS, COMPONENT_NAV_ITEMS, DRAWER_NAV_ITEMS];
                navSections.map((section) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    for (const [key, value] of Object.entries(section)) {
                        if (currentRoute === `/${value.route}`) {
                            return this._setActiveDrawerItem(value.title);
                        }
                    }
                });
            }
        });
    }

    private _setActiveDrawerItem(title: string): void {
        this.toolbarTitle = title;
        this._stateService.setSelectedItem(title);
    }

    getVariant(): DrawerLayoutVariantType {
        if (this.variant === 'permanent' && this._viewportService.isMedium()) {
            this._stateService.setDrawerOpen(false);
        } else if (this.variant === 'temporary' && !this._viewportService.isMedium()) {
            this._stateService.setDrawerOpen(true);
        }
        this.variant = this._viewportService.isMedium() ? 'temporary' : 'permanent';
        return this.variant;
    }
}

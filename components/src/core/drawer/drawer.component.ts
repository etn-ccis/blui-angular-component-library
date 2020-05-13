import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    Input,
    OnChanges,
    SimpleChanges,
    Output,
    EventEmitter,
    OnInit,
    HostListener,
} from '@angular/core';

type VariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="pxb-drawer"
            [ngClass]="[
                variant === 'permanent'
                    ? 'pxb-drawer-permanent'
                    : variant === 'persistent'
                    ? 'pxb-drawer-persistent'
                    : 'pxb-drawer-temporary',
                drawerOpen ? 'pxb-drawer-open' : 'pxb-drawer-closed'
            ]"
        >
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="pxb-drawer-header"></ng-content>
            <div (mouseenter)="openDrawer()" (mouseleave)="closeDrawer()">
                <ng-content select="pxb-drawer-subheader"></ng-content>
                <ng-content select="pxb-drawer-body"></ng-content>
                <ng-content select="pxb-drawer-footer"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnChanges, OnInit {
    @Input() variant: VariantType;
    @Input() drawerOpen: boolean;
    @Input() variantDrawerHandler: boolean;
    @Input() drawerSize = 350;
    @Input() navRailSize = 56;
    @Output() drawerOpenChange: EventEmitter<boolean> = new EventEmitter();
    pxbDrawer = document.getElementsByClassName('pxb-drawer');
    pxbDrawerLayoutContent = document.getElementById('pxb-drawer-layout-content-wrapper');

    @HostListener('window:resize', ['$event'])
    onResize(event): void {
        const windowWidth = event.target.innerWidth;

        if (windowWidth <= 600) {
            this.adjustContentPadding();
        }
    }

    @HostListener('document:mousedown', ['$event'])
    onGlobalClick(event): void {
        if (event.target.className === 'pxb-drawer-layout' && this.drawerOpen) {
            this.hideOverlay();
            this.drawerOpen = false;
            this.onDrawerOpenChange();
        }
    }

    ngOnInit(): void {
        this.variantDrawerHandler = this.drawerOpen;
        this.adjustContentPadding();
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            if (propName === 'drawerOpen') {
                this.onDrawerOpenChange();
                if (this.variant === 'persistent' || this.variant === 'temporary') {
                    this.adjustContentPadding();
                }
            }
            if (propName === 'variant') {
                this.adjustContentPadding();
            }
        }
    }

    openDrawer(): void {
        if (this.variant === 'persistent') {
            if (this.drawerOpen) {
                return;
            }
            this.drawerOpen = true;
            this.onDrawerOpenChange();
            this.adjustContentPadding();
        }
    }

    closeDrawer(): void {
        if (this.variant === 'persistent') {
            if (this.variantDrawerHandler) {
                return;
            }
            this.drawerOpen = false;
            this.onDrawerOpenChange();
            this.adjustContentPadding();
        }
    }

    onDrawerOpenChange(): void {
        if (this.variant === 'persistent') {
            this.drawerOpenChange.emit(this.drawerOpen);
        }
    }

    adjustContentPadding(): void {
        const drawer = this.pxbDrawer[0] as HTMLElement;
        drawer.style.width = this.drawerOpen ? `${this.drawerSize}px` : `${this.navRailSize}px`;
        let px = 0;
        if (this.variant !== 'temporary') {
            px = this.drawerOpen ? this.drawerSize + 8 : this.navRailSize + 8;
        }
        this.pxbDrawerLayoutContent.style.paddingLeft = `${px}px`;

        if (this.variant === 'temporary' && this.drawerOpen) {
            this.pxbDrawerLayoutContent.style.zIndex = '-1';
            this.pxbDrawerLayoutContent.classList.add('pxb-drawer-layout-content-overlay');
        }

        if (this.variant === 'temporary' && !this.drawerOpen) {
            this.hideOverlay();
        }
    }

    hideOverlay(): void {
        this.pxbDrawerLayoutContent.classList.remove('pxb-drawer-layout-content-overlay');
    }
}

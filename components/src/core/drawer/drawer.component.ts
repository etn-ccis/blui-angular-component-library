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
            <div (mouseenter)="persistentOpenDrawer()" (mouseleave)="persistentCloseDrawer()">
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
    @Output() drawerOpenChange: EventEmitter<boolean> = new EventEmitter();
    pxbDrawer = document.getElementsByClassName('pxb-drawer');
    pxbDrawerLayoutContent = document.getElementById('pxb-drawer-layout-content-wrapper');

    @HostListener('window:resize', ['$event'])
    
    onResize(event){
         let windowWidth = event.target.innerWidth;

         if(windowWidth <= 600) { 
            this.adjustContentPadding();
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
                if(this.variant === 'persistent') {
                    if (this.drawerOpen) {
                        this.adjustContentPadding();
                    } else {
                        this.adjustContentPadding();
                    }
                }
            }
        }
    }

    persistentOpenDrawer(): void {
        if (this.variant === 'persistent') {
            if (this.drawerOpen) {
                return;
            }
            this.drawerOpen = true;
            this.onDrawerOpenChange();
            this.adjustContentPadding();
        }
    }

    persistentCloseDrawer(): void {
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

        // const adjustPadding = () => {
        //     let px = this.getDrawerWidth() + 25;
            let px = this.drawerOpen ? 375 : 81;
            this.pxbDrawerLayoutContent.style.paddingLeft = `${px}px`;
        // }

        // setTimeout(adjustPadding, 175);
    }

    getDrawerWidth(): number {
        return this.pxbDrawer[0].clientWidth;
    }
}

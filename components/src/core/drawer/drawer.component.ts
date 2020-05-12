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
            (mouseenter)="persistentOpenDrawer()"
            (mouseleave)="persistentCloseDrawer()"
        >
            <div
                *ngIf="variant === 'temporary' && drawerOpen"
                class="pxb-drawer-temporary-overlay"
                (click)="drawerOpen = false"
            ></div>
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="pxb-drawer-header"></ng-content>
            <ng-content select="pxb-drawer-subheader"></ng-content>
            <ng-content select="pxb-drawer-body"></ng-content>
            <ng-content select="pxb-drawer-footer"></ng-content>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnChanges, OnInit {
    @Input() variant: VariantType;
    @Input() drawerOpen: boolean;
    @Input() variantDrawerHandler: boolean;
    @Output() drawerOpenChange: EventEmitter<boolean> = new EventEmitter();

    ngOnInit(): void {
        this.variantDrawerHandler = this.drawerOpen;
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            if (propName === 'drawerOpen') {
                this.onDrawerOpenChange();
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
        }
    }

    persistentCloseDrawer(): void {
        if (this.variant === 'persistent') {
            if (this.variantDrawerHandler) {
                return;
            }
            this.drawerOpen = false;
            this.onDrawerOpenChange();
        }
    }

    onDrawerOpenChange(): void {
        if (this.variant === 'persistent') {
            this.drawerOpenChange.emit(this.drawerOpen);
        }
    }
}

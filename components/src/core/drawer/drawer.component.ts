import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ChangeDetectorRef,
} from '@angular/core';
import { DrawerService } from './drawer.service';

export type VariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer">
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="pxb-drawer-header"></ng-content>
            <div (mouseenter)="hoverDrawer()" (mouseleave)="unhoverDrawer()">
                <ng-content select="pxb-drawer-subheader"></ng-content>
                <ng-content select="pxb-drawer-body"></ng-content>
                <ng-content select="pxb-drawer-footer"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
    @Input() variant: VariantType;
    @Input() variantDrawerHandler: boolean;
    @Output() drawerOpenChange: EventEmitter<boolean> = new EventEmitter();
    drawerOpen: boolean;

    constructor(public drawerService: DrawerService, private readonly changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.drawerOpen = this.drawerService.getDrawerOpen();
        this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            this.changeDetector.detectChanges();
        });

        this.variantDrawerHandler = this.drawerOpen;
    }

    hoverDrawer(): void {
        const openDrawer = () => {
            this.drawerOpen = true
            this.onDrawerOpenChange();
        }

        if (this.variant === 'persistent') {
            if (this.drawerOpen) {
                return;
            }
            setTimeout(openDrawer, 300);
        }
    }

    unhoverDrawer(): void {
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

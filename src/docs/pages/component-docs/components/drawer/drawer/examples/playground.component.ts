import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';
import { DrawerNavItem } from '@brightlayer-ui/angular-components';
import * as Colors from '@brightlayer-ui/colors';

export type DrawerPlaygroundKnobs = {
    openOnHover: Knob;
    disableActiveItemParentStyles: Knob;
    open: Knob;
    openOnHoverDelay: Knob;
    sideBorder: Knob;
};

type Group = {
    items: DrawerNavItem[];
};

@Component({
    selector: 'app-drawer-playground',
    template: ` <blui-drawer
        class="app-drawer-playground-drawer"
        *ngIf="inputs"
        [open]="inputs.open.value"
        [disableActiveItemParentStyles]="inputs.disableActiveItemParentStyles.value"
        [openOnHoverDelay]="inputs.openOnHoverDelay.value"
        [openOnHover]="inputs.openOnHover.value"
        [sideBorder]="inputs.sideBorder.value"
    >
        <blui-drawer-header title="Brightlayer UI" subtitle="Drawer Component">
            <button mat-icon-button blui-icon>
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header>
        <blui-drawer-body>
            <ng-container *ngFor="let navGroup of [group1]; let first = first">
                <blui-drawer-nav-group>
                    <blui-drawer-nav-item
                        *ngFor="let navItem of navGroup.items"
                        [title]="navItem.title"
                        [selected]="selectedItem === navItem.title"
                        (select)="setActive(navItem)"
                    >
                        <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                        <blui-drawer-nav-item
                            *ngFor="let nestedItem of navItem.items"
                            [title]="nestedItem.title"
                            [selected]="selectedItem === nestedItem.title"
                            (select)="setActive(nestedItem)"
                        >
                        </blui-drawer-nav-item>
                    </blui-drawer-nav-item>
                </blui-drawer-nav-group>
            </ng-container>
        </blui-drawer-body>
        <blui-drawer-footer [hideContentOnCollapse]="true">
            <div style="padding: 16px">
                <div style="display: flex; justify-content: space-between; align-items: center">
                    <img src="assets/eaton-condensed.png" width="100" style="margin-left: -8px" />
                    <div>
                        <div class="mat-caption">Copyright © Eaton</div>
                        <div class="mat-caption">All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </blui-drawer-footer>
    </blui-drawer>`,
    styles: [
        `
            :host {
                height: 100%;
            }
            ::ng-deep .app-drawer-playground-drawer .blui-drawer-content blui-drawer-body {
                overflow: auto !important;
            }
        `,
    ],
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: DrawerPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    Colors = Colors;
    knobListener: Subscription;
    selectedItem: string;

    group1: Group = {
        items: [
            {
                title: 'Overview',
                subtitle: 'Learn more about us',
                statusColor: Colors.green[500],
                icon: 'dashboard',
                items: [
                    {
                        title: 'Monthly Report',
                    },
                    {
                        title: 'Annual Report',
                    },
                ],
            },
            {
                title: 'Timeline',
                icon: 'toc',
            },
            {
                title: 'Devices',
                subtitle: '4 new warnings',
                statusColor: Colors.yellow[500],
                icon: 'devices',
            },
            {
                title: 'Schedule',
                icon: 'airport_shuttle',
            },
        ],
    };

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: DrawerPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            this._emitNewCodeChanges();
        });
    }

    ngAfterViewInit(): void {
        this._emitNewCodeChanges();
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    setActive(navItem: DrawerNavItem): void {
        this.selectedItem = navItem.title;
    }

    private _emitNewCodeChanges(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer
    ${this._playgroundService.addOptionalProp(this.inputs, 'disableActiveItemParentStyles')}
    [open]="${this.inputs.open.value}"
    ${this._playgroundService.addOptionalProp(this.inputs, 'openOnHover')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'openOnHoverDelay')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'sideBorder')}
>
    <blui-drawer-header title="Brightlayer UI" subtitle="Drawer Component">
        <button mat-icon-button blui-icon>
            <mat-icon>menu</mat-icon>
        </button>
    </blui-drawer-header>
    <blui-drawer-body>
        <ng-container *ngFor="let navGroup of [group1]; let first = first">
            <blui-drawer-nav-group>
                <blui-drawer-nav-item
                    *ngFor="let navItem of navGroup.items"
                    [title]="navItem.title"
                    [selected]="selectedItem === navItem.title"
                    (select)="setActive(navItem)"
                >
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                    <blui-drawer-nav-item
                        *ngFor="let nestedItem of navItem.items"
                        [title]="nestedItem.title"
                        [selected]="selectedItem === nestedItem.title"
                        (select)="setActive(nestedItem)"
                    >
                    </blui-drawer-nav-item>
                </blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </ng-container>
    </blui-drawer-body>
    <blui-drawer-footer [hideContentOnCollapse]="true">
        <div style="padding: 16px">
            <div style="display: flex; justify-content: space-between; align-items: center">
                <img src="assets/eaton-condensed.png" width="100" style="margin-left: -8px" />
                <div>
                    <div class="mat-caption">Copyright © Eaton</div>
                    <div class="mat-caption">All Rights Reserved</div>
                </div>
            </div>
        </div>
    </blui-drawer-footer>
</blui-drawer>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}

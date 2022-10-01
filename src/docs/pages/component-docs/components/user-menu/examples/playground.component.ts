import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Knob } from '../../../shared/scaffold/scaffold.component';
import { PlaygroundService } from '../../../../../services/playground/playground.service';

export type UserMenuPlaygroundKnobs = {
    avatarImage: Knob;
    avatarValue: Knob;
    menuSubtitle: Knob;
    menuTitle: Knob;
    open: Knob;
    useBottomSheetAt: Knob;

    // Other
    showAvatarImage: Knob;
    originX: Knob;
    originY: Knob;
    overlayX: Knob;
    overlayY: Knob;
};

@Component({
    selector: 'app-user-menu-playground',
    template: `
        <blui-user-menu
            [(open)]="inputs.open.value"
            (openChange)="emitNewCodeChanges()"
            [avatarValue]="inputs.showAvatarImage.value ? '' : inputs.avatarValue.value"
            [avatarImage]="inputs.showAvatarImage.value ? 'assets/trex.png' : ''"
            [menuTitle]="inputs.menuTitle.value"
            [menuSubtitle]="inputs.menuSubtitle.value"
            [useBottomSheetAt]="inputs.useBottomSheetAt.value"
        >
            <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
                <blui-info-list-item (click)="open = false" [dense]="true">
                    <mat-icon blui-icon>settings</mat-icon>
                    <div blui-title>Settings</div>
                </blui-info-list-item>
                <blui-info-list-item (click)="open = false" [dense]="true">
                    <mat-icon blui-icon>mail</mat-icon>
                    <div blui-title>Contact Us</div>
                </blui-info-list-item>
                <blui-info-list-item (click)="open = false" [dense]="true">
                    <mat-icon blui-icon>logout</mat-icon>
                    <div blui-title>Log out</div>
                </blui-info-list-item>
            </mat-nav-list>
        </blui-user-menu>
    `,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: UserMenuPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;
    // positions: ConnectionPositionPair[];

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: UserMenuPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            /*
            this.positions = [
                new ConnectionPositionPair(
                    {
                        originX: this.inputs.originX.value,
                        originY: this.inputs.originY.value,
                    },
                    {
                        overlayX: this.inputs.overlayX.value,
                        overlayY: this.inputs.overlayY.value,
                    }
                ),
            ]; */
            this.emitNewCodeChanges();
        });
    }

    ngAfterViewInit(): void {
        this.emitNewCodeChanges();
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    emitNewCodeChanges(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    private _getAvatar(): string {
        if (this.inputs.showAvatarImage.value) {
            return `avatarImage="assets/trex.png"`;
        }
        return `${this._playgroundService.addOptionalProp(this.inputs, 'avatarValue')}`;
    }

    private _createGeneratedCode(): string {
        const code = `<blui-user-menu 
    ${this._getAvatar()}
    ${this._playgroundService.addOptionalProp(this.inputs, 'menuTitle')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'menuSubtitle')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'useBottomSheetAt')}
    [open]="${this.inputs.open.value}">
    <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
        <blui-info-list-item (click)="open=false" [dense]="true">
            <mat-icon blui-icon>settings</mat-icon>
            <div blui-title>Settings</div>
        </blui-info-list-item>
        <blui-info-list-item (click)="open=false" [dense]="true">
            <mat-icon blui-icon>mail</mat-icon>
            <div blui-title>Contact Us</div>
        </blui-info-list-item>
        <blui-info-list-item (click)="open=false" [dense]="true">
            <mat-icon blui-icon>logout</mat-icon>
            <div blui-title>Log out</div>
        </blui-info-list-item>
    </mat-nav-list>
</blui-user-menu>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}

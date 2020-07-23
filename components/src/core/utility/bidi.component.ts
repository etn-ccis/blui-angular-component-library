import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Direction, Directionality } from '@angular/cdk/bidi';

export class BidiComponent implements OnDestroy {
    isRtl: boolean;
    dirChangeSubscription = Subscription.EMPTY;

    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef) {
        this.isRtl = dir.value === 'rtl';
        this.dirChangeSubscription = dir.change.subscribe((direction: Direction) => {
            this.isRtl = direction === 'rtl';
            changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.unsubscribeDir();
    }

    public unsubscribeDir(): void {
        if (this.dirChangeSubscription) {
            this.dirChangeSubscription.unsubscribe();
        }
    }
}

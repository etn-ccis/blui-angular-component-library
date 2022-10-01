import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

// Use this service to get viewport size.
@Injectable({
    providedIn: 'root',
})
export class ViewportService {
    breakpointSubscription: any;
    mobileViewport: boolean;
    mediumViewport: boolean;

    constructor(private readonly _breakpointObserver: BreakpointObserver) {
        this.breakpointSubscription = this._breakpointObserver
            .observe(['(max-width: 600px)', '(max-width: 1280px)'])
            .subscribe((result) => {
                const small = Object.keys(result.breakpoints)[0];
                const medium = Object.keys(result.breakpoints)[1];
                this.mobileViewport = result.breakpoints[small];
                this.mediumViewport = result.breakpoints[medium];
            });
    }

    isSmall(): boolean {
        return this.mobileViewport;
    }

    isMedium(): boolean {
        return this.mediumViewport;
    }
}

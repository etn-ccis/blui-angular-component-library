import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RtlService {
    private rtlEnabled = false;

    setRTL(rtl: boolean): void {
        this.rtlEnabled = rtl;
    }

    isRtl(): boolean {
        return this.rtlEnabled;
    }

    invertRTL(): string {
        return this.rtlEnabled ? 'scaleX(-1)' : '';
    }
}

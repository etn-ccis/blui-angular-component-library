import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-copy-code-button',
    template: `
        <button blui-inline mat-stroked-button color="primary" style="width: 125px" (click)="copyCode()">
            <mat-icon>
                {{ hasCopiedCode ? 'check_outline' : 'copy_all' }}
            </mat-icon>
            <span>{{ hasCopiedCode ? 'Copied' : 'Copy All' }}</span>
        </button>
    `,
})
export class CopyCodeButtonComponent {
    @Input() code: string;

    hasCopiedCode: boolean;

    copyCode(): void {
        navigator.clipboard.writeText(this.code).then(
            () => {},
            (err) => {
                console.error('Async: Could not copy text: ', err);
            }
        );

        this.hasCopiedCode = true;
        setTimeout(() => {
            this.hasCopiedCode = false;
        }, 750);
    }
}

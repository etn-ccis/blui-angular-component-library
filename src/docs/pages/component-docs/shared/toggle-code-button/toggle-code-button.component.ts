import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-toggle-code-button',
    template: `
        <button
            mat-stroked-button
            color="primary"
            style="width: 150px; margin-top: 8px"
            (click)="toggleShowCodeButton()"
        >
            {{ showCode ? 'Hide' : 'Show' }} Code
        </button>
    `,
})
export class ToggleCodeButtonComponent {
    @Input() showCode: boolean;
    @Output() showCodeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleShowCodeButton(): void {
        this.showCode = !this.showCode;
        this.showCodeChange.emit(this.showCode);
        setTimeout(() => {
            //@ts-ignore
            window.Prism.highlightAll();
            window.dispatchEvent(new Event('resize'));
        });
    }
}

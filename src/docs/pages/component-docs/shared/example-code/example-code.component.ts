import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-example-code',
    host: {
        class: 'app-example-code',
    },
    template: `
        <pre style="display: flex" [attr.data-line]="dataLine" 
             (mouseenter)="isHoverSnippet=true"
             (mouseleave)="isHoverSnippet=false">
            <code [innerHTML]="snippet | language: 'html' | markdown"></code>
            <app-copy-code-button [code]="snippet" *ngIf="copyButtonOnHover && isHoverSnippet"
                  style="position: absolute; bottom: 16px; right: 420px;"></app-copy-code-button>
            
        </pre>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['example-code.component.scss'],
})
export class ExampleCodeComponent {
    @Input() snippet: string;
    @Input() dataLine: string;
    @Input() copyButtonOnHover = false;

    isHoverSnippet: boolean;

    ngAfterViewInit(): void {
        window.dispatchEvent(new Event('resize'));
    }
}

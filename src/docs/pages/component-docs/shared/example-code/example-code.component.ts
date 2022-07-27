import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-example-code',
    host: {
        class: 'app-example-code',
    },
    template: `
        <pre style="display: flex" [attr.data-line]="dataLine">
            <code [innerHTML]="snippet | language: 'html' | markdown"></code>
        </pre>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['example-code.component.scss'],
})
export class ExampleCodeComponent {
    @Input() snippet: string;
    @Input() dataLine: string;

    ngAfterViewInit(): void {
        window.dispatchEvent(new Event('resize'));
    }
}

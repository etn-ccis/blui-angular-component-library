import { Component } from '@angular/core';
import { loremIpsum } from './lorem-ipsum';

export const EXPANDED = `<div class="scroll-container">
    <blui-app-bar variant="expanded">
        <div>Content</div>
    </blui-app-bar>
    <div class="content-body">{{ filler }}</div>
</div>
`;

@Component({
    selector: 'app-expanded-app-bar-demo',
    template: EXPANDED,
    styles: [
        `
            .scroll-container {
                width: 100%;
                max-width: 450px;
                max-height: 400px;
                overflow: auto;
                position: relative;
            }
            .content-body {
                padding: 16px;
                background: white;
            }
        `,
    ],
})
export class ExpandedComponent {
    filler = loremIpsum;
}

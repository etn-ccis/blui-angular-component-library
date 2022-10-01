import { Component } from '@angular/core';
import { loremIpsum } from './lorem-ipsum';

export const COLLAPSED = `<div class="scroll-container">
    <blui-app-bar variant="collapsed">
        <div>Content</div>
    </blui-app-bar>
    <div class="content-body">{{ filler }}</div>
</div>
`;

@Component({
    selector: 'app-collapsed-app-bar-demo',
    template: COLLAPSED,
    styles: [
        `
            .scroll-container {
                width: 100%;
                max-width: 450px;
                max-height: 200px;
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
export class CollapsedComponent {
    filler = loremIpsum;
}

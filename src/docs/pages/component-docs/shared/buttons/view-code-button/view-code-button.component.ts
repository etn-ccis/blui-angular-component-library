import { Component, Input } from '@angular/core';
import {environment} from "../../../../../../environments/environment";

@Component({
    selector: 'app-view-code-button',
    template: `
        <button blui-inline mat-stroked-button color="primary" style="width: 200px" (click)="viewCodeOnGitHub()">
            <img src="assets/github-icon.svg" style="height: 1.125rem; margin-right: 8px" />
            <span>Full Code on GitHub</span>
        </button>
    `,
})
export class ViewCodeButtonComponent {
    @Input() examplePath;

    master =
        `https://github.com/brightlayer-ui/angular-component-library/tree/${environment.devDocsCodeSnippetBranch}/src/docs/pages/component-docs/components`;

    viewCodeOnGitHub(): void {
        window.open(`${this.master}/${this.examplePath}.component.ts`, '_blank');
    }
}

import '@pxblue/themes/angular/theme.scss';
import { Component, NgModule } from '@angular/core';
import 'typeface-open-sans';

export const wrap = () => (storyFn): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<story>${story.template}</story>`,
    };
};

@Component({
    selector: 'documentation',
    template: ``,
})
export class DocumentationComponent {
    ngOnInit(): void {
        window.top.document.getElementsByClassName('simplebar-content')[1].setAttribute('style', 'display: none');
        if (window.top.location.href.includes('/story/')) {
            // @ts-ignore
            window.top.document.getElementsByClassName('css-mtwlrt')[0].click();
        }
    }
}

@Component({
    selector: 'story',
    template: `
        <div class="pxb-blue mat-typography"><ng-content></ng-content></div>
    `,
})
export class StoryComponent {
    ngOnInit(): void {
        if (!window.top.location.href.toLocaleLowerCase().includes('--doc')) {
            const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
            banner.setAttribute('style', 'display: unset');
            const sections = banner.children[0].children[0].children[0];
            sections.setAttribute('style', 'display: none');
            if (window.top.location.href.includes('/info/')) {
                // @ts-ignore
                window.top.document.getElementsByClassName('css-mtwlrt')[0].click();
            }
        }
    }
}

@NgModule({
    declarations: [DocumentationComponent, StoryComponent],
    exports: [DocumentationComponent, StoryComponent],
})
export class UtilModule {}

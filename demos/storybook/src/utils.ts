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
        // Hide all content from within the top bar when a documentation component is rendered.
        // History needs to be modified to avoid infinite looping when hitting back button.
        // This entire hack should be removed when it becomes possible to conditionally render or reorder Notes tab, hopefully available in Storybook v6.
        window.top.document.getElementsByClassName('simplebar-content')[1].setAttribute('style', 'display: none');
        if (window.top.location.href.includes('/story/')) {
            window.top.history.replaceState(null, null, window.top.location.href.replace('/story/', '/info/'));
            //@ts-ignore
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
        // Reset style found within the topbar when a StoryComponent is rendered.
        const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
        banner.setAttribute('style', 'display: unset');
        if (window.top.location.href.includes('/info/')) {
            // @ts-ignore
            window.top.document.getElementsByClassName('css-mtwlrt')[0].click();
        }
    }
}

@NgModule({
    declarations: [DocumentationComponent, StoryComponent],
    exports: [DocumentationComponent, StoryComponent],
})
export class UtilModule {}

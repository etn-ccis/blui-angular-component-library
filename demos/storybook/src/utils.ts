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
    selector: 'story',
    template: `
        <div class="pxb-blue mat-typography" style="height: 100%; width: 100%"><ng-content></ng-content></div>
    `,
})
export class StoryComponent {
    ngOnInit(): void {
        const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
        banner.setAttribute('style', 'display: unset');

        // If we are currently on the 'Notes' tab.
        if (window.top.location.href.includes('/info/')) {
            window.top.history.replaceState(null, '', window.top.location.href.replace('/info/', '/story/'));
            //@ts-ignore
            banner.children[0].children[0].children[0].children[0].click(); // Click the 'Canvas' button
        }
    }
}

@NgModule({
    declarations: [StoryComponent],
    exports: [StoryComponent],
})
export class UtilModule {}

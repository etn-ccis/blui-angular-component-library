import '@pxblue/angular-themes/theme.scss';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import 'typeface-open-sans';
import { BrowserModule } from '@angular/platform-browser';
import { COMPONENT_SECTION_NAME, README_STORY_NAME } from './constants';
import * as Colors from '@pxblue/colors';

let banner: HTMLElement;
let prevUrl = '';

const STORY_PATH = '/story/';
const NOTES_PATH = '/info/';
const getBanner = (): HTMLElement => {
    if (!banner) {
        banner = window.top.document.getElementsByClassName('simplebar-content')[1] as HTMLElement;
    }
    return banner;
};
const setBannerStyle = (display: string): void => getBanner().setAttribute('style', `display: ${display}`);

export const showTopBanner = (): void => setBannerStyle('unset');
export const hideTopBanner = (): void => setBannerStyle('none');

export const selectCanvasTab = (): void => {
    window.top.history.replaceState(null, '', window.top.location.href.replace(NOTES_PATH, STORY_PATH));
    (getBanner().children[0].children[0].children[0].children[0] as HTMLElement).click(); // click the Canvas tab.
};

const selectNotesTab = (): void => {
    window.top.history.replaceState(null, '', window.top.location.href.replace(STORY_PATH, NOTES_PATH));
    (getBanner().children[0].children[0].children[0].children[1] as HTMLElement).click(); // click the Notes tab.
};

export const updateTitle = (): void => {
    setTimeout(() => {
        window.top.document.title = 'PX Blue | Angular Components';
    }, 10);

    const link: any = window.top.document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './pxblue.png';
    window.top.document.getElementsByTagName('head')[0].appendChild(link);
};

export const storyWrapper = () => (storyFn): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<story>${story.template}</story>`,
    };
};

export const getReadMe = (name: string): any => {
    const md = require(`./../../../docs/${name}`);

    // Locate all relative links that use href syntax and replace them with absolute URLs.
    md.default = md.default.replace(/\(.\/.*md\)/g, (substring: string) => {
        // Example: http://localhost:6006/?path=/info/components-hero--readme
        const root = window.top.location.href.split('/?')[0];
        const path = `?path=/info/${COMPONENT_SECTION_NAME.toLowerCase()}`;

        // Get component from link. (./HeroBanner.md) => HeroBanner
        const component = substring.split('/')[1].split('.')[0];
        // Storybook uses dash-limited-syntax in their URL schema.
        const dashed = component.replace(/\.?([A-Z])/g, (x) => `-${x.toLowerCase()}`);
        return `(${root}${path}${dashed}--readme)`;
    });
    return md;
};

export const getReadMeStory = (): any => {
    return {
        template: `<readme></readme>`,
    };
};
getReadMeStory.story = { name: README_STORY_NAME };

export const isDarkMode = (): boolean => {
    const darkModeLocalStorage = JSON.parse(window.localStorage.getItem('sb-addon-themes-3'));
    return darkModeLocalStorage && darkModeLocalStorage.current === 'dark';
};

@Component({
    selector: 'readme',
    template: `
        <div></div>
    `,
})
export class ReadMeComponent {
    ngOnInit(): void {
        hideTopBanner();
        // If we are currently on the Canvas tab, go to Notes tab.  The README story never shows the Canvas.
        if (window.top.location.href.includes(STORY_PATH)) {
            selectNotesTab();
        }
    }
}

@Component({
    selector: 'story',
    template: `
        <div
            class="mat-typography"
            [ngClass]="useDarkMode ? 'pxb-blue-dark' : 'pxb-blue'"
            style="height: 100%; width: 100%"
        >
            <ng-content></ng-content>
        </div>
    `,
})
export class StoryComponent {
    useDarkMode = isDarkMode();

    // Auto-navigates the user to the Canvas tab when switching stories.
    ngOnInit(): void {
        const currentUrl = window.top.location.href;
        showTopBanner();
        updateTitle();

        const currStoryUrl = currentUrl.replace(STORY_PATH, '').replace(NOTES_PATH, '');
        const prevStoryUrl = prevUrl.replace(STORY_PATH, '').replace(NOTES_PATH, '');

        // If user changed stories while on the Notes tab, but not from the README story.
        if (currStoryUrl !== prevStoryUrl && !currentUrl.includes('readme') && currentUrl.includes(NOTES_PATH)) {
            selectCanvasTab();
        }
        prevUrl = currentUrl;

        this.setTheme();
        window.onstorage = (): void => {
            this.setTheme();
        };
    }

    setTheme(): void {
        this.useDarkMode = isDarkMode();
        const canvas = document.querySelector('.sb-show-main') as HTMLElement;
        if (canvas && canvas.style) {
            canvas.style.backgroundColor = this.useDarkMode ? Colors.darkBlack[100] : Colors.gray[50];
            canvas.style.color = this.useDarkMode ? Colors.gray[300] : Colors.black[500];
        }
    }
}

@NgModule({
    imports: [CommonModule, BrowserModule],
    declarations: [StoryComponent, ReadMeComponent],
    exports: [StoryComponent, ReadMeComponent],
})
export class UtilModule {}

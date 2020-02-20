import { storiesOf } from '@storybook/angular';

// Auto-navigates to the Notes tab when selected.
const docFn = () => (story): any => {
    const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
    banner.setAttribute('style', 'display: none');
    // If we are currently on the 'Canvas' tab.
    if (window.top.location.href.includes('/story/')) {
        window.top.history.replaceState(null, '', window.top.location.href.replace('/story/', '/info/'));
        //@ts-ignore
        banner.children[0].children[0].children[0].children[1].click(); // click the Notes tab.
    }
    return {
        ...story,
        template: `<div></div>`,
    };
};

export const stories = storiesOf('API/Documentation', module);
stories.add('Channel Value', docFn(), { notes: { markdown: require('./../../../docs/ChannelValue.md') } });
stories.add('Empty State', docFn(), { notes: { markdown: require('./../../../docs/EmptyState.md') } });
stories.add('Hero', docFn(), { notes: { markdown: require('./../../../docs/Hero.md') } });

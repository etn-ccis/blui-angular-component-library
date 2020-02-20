import {addParameters} from '@storybook/angular';
require('@pxblue/icons/iconfont/PXBlueIcons.css');
import { pxblueTheme } from '@pxblue/storybook-theme';

const newViewports = {
    iPhone5: {
        name: 'iPhone 5',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    iPhone6: {
        name: 'iPhone 6',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iPad: {
        name: 'iPad',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
};

pxblueTheme.brandTitle = 'PX Blue Angular Component Library';
pxblueTheme.brandImage = 'https://pxblue.github.io/static/media/pxblue.d5fa6462.svg';
pxblueTheme.brandUrl = 'https://pxblue.github.io';

addParameters({
    /* Users will see this while the component is loading. */
    notes: {
        markdown: '<div> </div>',
    },
    viewport: {
        viewports: newViewports,
    },
    options: {
        theme: pxblueTheme,
        showRoots: true,
    },
});

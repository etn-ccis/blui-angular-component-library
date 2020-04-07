import { addParameters } from '@storybook/angular';
require('@pxblue/icons/iconfont/PXBlueIcons.css');
import { pxblueTheme, pxblueDarkTheme } from '@pxblue/storybook-themes';

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

pxblueTheme.brandTitle = pxblueDarkTheme.brandTitle = 'PX Blue Angular Component Library';
pxblueTheme.brandImage = pxblueDarkTheme.brandImage = require('../assets/pxblue-angular.svg');
pxblueTheme.brandUrl = pxblueDarkTheme.brandUrl ='https://pxblue.github.io';

const themeInit = { dark: pxblueDarkTheme, light: pxblueTheme, current: 'light' }
window.localStorage.setItem('sb-addon-themes-3', JSON.stringify(themeInit));

addParameters({
    /* Users will see this while the component is loading. */
    notes: {
        markdown: '<div> </div>',
    },
    viewport: {
        viewports: newViewports,
    },
    options: {
        showRoots: true,
    },
    darkMode: {
        // Override the default light theme
        light: { ...pxblueTheme },
        // Override the default dark theme
        dark: { ...pxblueDarkTheme }
    }
});

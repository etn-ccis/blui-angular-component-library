import { addParameters } from '@storybook/angular';
require('@brightlayer-ui/icons/iconfont/BrightlayerUIIcons.css');
import { bluiTheme } from '@brightlayer-ui/storybook-themes';

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

bluiTheme.brandTitle = 'Brightlayer UI Angular Component Library';
bluiTheme.brandUrl = 'https://pxblue.github.io';

if (window.top.location.hostname === 'localhost') {
    bluiTheme.brandImage = require('../assets/blui-angular-alpha.svg');
} else if (window.top.location.pathname.slice(0, 13) === '/angular-dev/') {
    bluiTheme.brandImage = require('../assets/blui-angular-beta.svg');
} else {
    bluiTheme.brandImage = require('../assets/blui-angular.svg');
}

const themeInit = { dark: bluiTheme, light: bluiTheme, current: 'light' };
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
        light: { ...bluiTheme },
        // Override the default dark theme
        dark: { ...bluiTheme },
    },
});

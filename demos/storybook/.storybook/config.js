import {addParameters, configure} from '@storybook/angular';
require('@pxblue/icons/iconfont/PXBlueIcons.css');
import pxblue from './pxblue-theme';
import * as Colors from '@pxblue/colors';

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

addParameters({
    viewport: {
        viewports: newViewports
    },
    options: {
        theme: pxblue,
        panelPosition: 'bottom',
    },
});

// automatically import all files ending in *.stories.ts
configure(require.context('../stories', true, /\.stories.ts$/), module);

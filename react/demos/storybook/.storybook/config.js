import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ReactThemes } from '@pxblue/themes';
import * as Colors from '@pxblue/colors';
import 'typeface-open-sans';
import './styles.css';
import pxblue from './pxblue-theme';

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
        viewports: newViewports,
    },
    options: {
        theme: pxblue,
    },
});

addDecorator((storyFn) => (
    <MuiThemeProvider theme={createMuiTheme(ReactThemes.blue)}>
        <div className={'wrapper'} style={{ color: Colors.gray['800'] }}>
            {storyFn()}
        </div>
    </MuiThemeProvider>
));

addDecorator(withKnobs({escapeHTML: false}));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|tsx)$/), module);

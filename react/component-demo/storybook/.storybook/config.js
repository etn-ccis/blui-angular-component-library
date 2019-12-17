import React from 'react';
import {configure, addDecorator, addParameters} from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { React as ReactThemes } from '@pxblue/themes';
import * as Colors from '@pxblue/colors';
import 'typeface-open-sans';
import './styles.css';
import { addReadme } from 'storybook-readme';

addParameters({
    options: {
        /**
         * show story component as full screen
         * @type {Boolean}
         */
        isFullscreen: false,
        /**
         * display panel that shows a list of stories
         * @type {Boolean}
         */
        showNav: true,
        /**
         * display panel that shows addon configurations
         * @type {Boolean}
         */
        showPanel: true,
        /**
         * where to show the addon panel
         * @type {('bottom'|'right')}
         */
        panelPosition: 'right',
        name: 'PX Blue React Component Library'
    }
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|tsx)$/), module);

addDecorator(addReadme);
addDecorator(storyFn => <MuiThemeProvider theme={createMuiTheme(ReactThemes.blue)}><div className={'wrapper'} style={{ color: Colors.gray['800']}}>{storyFn()}</div></MuiThemeProvider>);

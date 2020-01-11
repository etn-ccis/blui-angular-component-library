import React from 'react';
import {configure, addDecorator, addParameters} from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { React as ReactThemes } from '@pxblue/themes';
import * as Colors from '@pxblue/colors';
import 'typeface-open-sans';
import './styles.scss';

addParameters({
    options: {
        isFullscreen: false,
        showNav: true,
        showPanel: true,
        panelPosition: 'right',
        name: 'PX Blue React Component Library'
    }
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /drawer\.stories\.(js|tsx)$/), module);

addDecorator(storyFn =>
    <MuiThemeProvider theme={createMuiTheme(ReactThemes.blue)}>
        <div className={'wrapper'} style={{ color: Colors.gray['800']}}>
            {storyFn()}
        </div>
</MuiThemeProvider>);

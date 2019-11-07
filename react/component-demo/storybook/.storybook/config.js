import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { React as ReactThemes } from '@pxblue/themes';
import * as Colors from '@pxblue/colors';

addDecorator(storyFn => <MuiThemeProvider theme={createMuiTheme(ReactThemes.blue)}><div style={{ color: Colors.gray['800'], padding: 0 }}>{storyFn()}</div></MuiThemeProvider>);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|tsx)$/), module);

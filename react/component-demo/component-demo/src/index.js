import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import * as PXBThemes from '@pxblue/themes/react';
import App from './App';
require('typeface-open-sans');

ReactDOM.render(
<MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
    <CssBaseline/>
    <App/>
</MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

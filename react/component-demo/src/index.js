import React from 'react';
import ReactDOM from 'react-dom';
import HeroChannel from './HeroChannel';
import ChannelValue from './ChannelValue';
import * as serviceWorker from './serviceWorker';
import Menu from '@material-ui/icons/Menu';
import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as PXBThemes from '@pxblue/themes/react';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA } from '@pxblue/icons-mui';

ReactDOM.render(
<MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <HeroChannel 
            icon={'💩'}//<GradeA fontSize={'inherit'} color={'inherit'} nativeColor={Colors.green[500]}/>} 
            label={'Healthy'}
        >
            <ChannelValue value={96} units={'/100'}/>
        </HeroChannel>
        <HeroChannel 
            icon={<Pie fontSize={'inherit'} color={Colors.blue[500]} percent={65} size={36}/>} 
            label={'Load'}
        >
            <ChannelValue value={65} units={'%'} trend={<Trend nativeColor={Colors.red[500]} fontSize={'inherit'}/>} />
        </HeroChannel>
        <HeroChannel 
            icon={<Timer fontSize={'inherit'} color={'inherit'}/>} 
            label={'Estimated'}
        >
            <ChannelValue value={1} units={'h'} />
            <ChannelValue value={26} units={'m'} />
        </HeroChannel>
        <HeroChannel 
            icon={<Battery fontSize={'inherit'} color={Colors.blue[500]} percent={100} size={36}/>} 
            value={'Full'}
            label={'Battery'}
        >
            <ChannelValue value={'Full'}/>
        </HeroChannel>
    </div>
</MuiThemeProvider>


, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

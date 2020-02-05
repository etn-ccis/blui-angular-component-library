import Menu from "@material-ui/core/SvgIcon/SvgIcon";
import React from 'react';
import ReactDOM from 'react-dom';
import {ChannelValue} from "../ChannelValue";
import {findByTestId} from "../test-utils";
import { Mount, Shallow } from '../types';
import { UserMenu } from './UserMenu';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SendIcon from '@material-ui/icons/Send';

import { ListItemIcon, ListItemAvatar, Avatar } from '@material-ui/core';

import Chevron from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';

import * as Colors from '@pxblue/colors';

import { createMount, createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

let mount: Mount;
let shallow: Shallow;

describe('User Menu', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserMenu />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with icon', () => {
        let wrapper = shallow(<UserMenu AvatarProps={{children: <SendIcon data-test={'send-icon'}/>}}/>);
        expect(findByTestId('send-icon', wrapper).length).toEqual(1);
    });

    fit('displays a menu when clicked', () => {
        let wrapper = shallow(<UserMenu AvatarProps={{children: <SendIcon data-test={'send-icon'}/>}}/>);
        expect(findByTestId('drawer-header', wrapper).length).toEqual(1);
    });

    /*
    it('renders with a menu list items', () => {
        let wrapper = shallow(<UserMenu value={'DH'} menuTitle={'Menu Title'} />);
        expect(findByTestId('drawer-header', wrapper).length).toEqual(1);
    }); */
});

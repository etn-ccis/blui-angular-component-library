import { Avatar } from '@material-ui/core';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import SendIcon from '@material-ui/icons/Send';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import { findByTestId } from '../test-utils';
import { Mount, Shallow } from '../types';
import { UserMenu } from './UserMenu';

Enzyme.configure({ adapter: new Adapter() });

let mount: Mount;
let shallow: Shallow;

describe('User Menu', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: false});
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        const avatar = <Avatar />;
        ReactDOM.render(<UserMenu avatar={avatar} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with icon', () => {
        const avatar = (
            <Avatar data-test={'avatar'}>
                <SendIcon data-test={'send-icon'} />
            </Avatar>
        );
        const wrapper = shallow(<UserMenu avatar={avatar} />);
        expect(findByTestId('send-icon', wrapper).length).toEqual(1);
    });

    it('runs onOpen function when avatar is clicked', () => {
        const onOpen = jest.fn();
        const avatar = (
            <Avatar data-test={'avatar'}>
                <SendIcon />
            </Avatar>
        );
        const wrapper = shallow(<UserMenu onOpen={onOpen} avatar={avatar} />);
        const renderedAvatar = findByTestId('avatar', wrapper);
        expect(onOpen).not.toHaveBeenCalled();
        renderedAvatar.simulate('click', { currentTarget: 'test' });
        expect(onOpen).toHaveBeenCalled();
    });
});

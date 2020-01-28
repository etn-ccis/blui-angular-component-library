import React from 'react';
import * as ReactDOM from 'react-dom';
import { findByTestId } from '../test-utils';
import { Mount, Shallow } from '../types';
import { ChannelValue } from './ChannelValue';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '@material-ui/icons/Menu';
import { createMount, createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;

describe('ChannelValue', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({});
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ChannelValue value={'test'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render with the wrapper class', () => {
        const wrapper = shallow(<ChannelValue value={1} />);
        expect(findByTestId('wrapper', wrapper)).toBeTruthy();
    });
    it('should render value properly', () => {
        const wrapper = shallow(<ChannelValue value={1} />);
        expect(findByTestId('value', wrapper).length).toEqual(1);
    });
    it('should render icon properly', () => {
        let wrapper = shallow(<ChannelValue icon={<Menu />} value={1} />);
        expect(findByTestId('icon', wrapper).length).toEqual(1);
        wrapper = shallow(<ChannelValue value={1} />);
        expect(findByTestId('icon', wrapper).length).toEqual(0);
    });
    it('should render units properly', () => {
        let wrapper = shallow(<ChannelValue value={1} units={'X'} />);
        expect(findByTestId('unit', wrapper).length).toEqual(1);
        wrapper = shallow(<ChannelValue value={1} />);
        expect(findByTestId('unit', wrapper).length).toEqual(0);
    });
});

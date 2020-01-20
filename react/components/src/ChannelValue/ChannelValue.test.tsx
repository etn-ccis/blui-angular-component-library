import {MountOptions} from "@material-ui/core/test-utils/createMount";
import React from 'react';
import ReactDOM from 'react-dom';
import ChannelValue from './ChannelValue';
import Enzyme, {ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '@material-ui/icons/Menu';
import { createMount, createShallow, createRender, getClasses } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: ReactWrapper<ChannelValue>;
let shallow;
let render;
let classes;

describe('ChannelValue', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
        render = createRender();
        classes = getClasses(<ChannelValue value={0} units={'test'} icon={<Menu />} prefix />);
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
        expect(wrapper.hasClass(classes.wrapper)).toEqual(true);
    });

    it('should render value properly', () => {
        const wrapper = shallow(<ChannelValue value={1} />);
        expect(wrapper.find('.' + classes.value).length).toEqual(1);
    });

    it('should render icon properly', () => {
        let wrapper = shallow(<ChannelValue icon={<Menu />} value={1} />);
        expect(wrapper.find('.' + classes.icon).length).toEqual(1);
        wrapper = shallow(<ChannelValue value={1} />);
        expect(wrapper.find('.' + classes.icon).length).toEqual(0);
    });

    it('should render units properly', () => {
        let wrapper = shallow(<ChannelValue value={1} units={'X'} />);
        expect(wrapper.find('.' + classes.unit).length).toEqual(1);
        wrapper = shallow(<ChannelValue value={1} />);
        expect(wrapper.find('.' + classes.unit).length).toEqual(0);
    });
});

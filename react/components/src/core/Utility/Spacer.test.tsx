import React from 'react';
import ReactDOM from 'react-dom';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Mount, Shallow } from '../types';
import { Spacer } from './Spacer';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;

describe('Spacer', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: false });
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Spacer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders default properties', () => {
        const wrapper = shallow(<Spacer />);
        const style = wrapper.props().style;
        expect(style.flex).toEqual('1 1 0px');
        expect(style.height).toEqual('auto');
        expect(style.width).toEqual('auto');
    });
    it('renders flex properties', () => {
        let wrapper = shallow(<Spacer flex={2} />);
        let style = wrapper.props().style;
        expect(style.flex).toEqual('2 2 0px');

        wrapper = shallow(<Spacer flex={3} />);
        style = wrapper.props().style;
        expect(style.flex).toEqual('3 3 0px');
        expect(style.height).toEqual('auto');
        expect(style.width).toEqual('auto');
    });
    it('renders static properties', () => {
        const wrapper = shallow(<Spacer flex={0} width={250} height={100} />);
        const style = wrapper.props().style;
        expect(style.flex).toEqual('0 0 auto');
        expect(style.height).toEqual(100);
        expect(style.width).toEqual(250);
    });
    it('accepts style overrides', () => {
        const wrapper = shallow(
            <Spacer style={{ flex: '3 4 100%', display: 'inline', height: '30%', width: '1rem' }} />
        );
        const style = wrapper.props().style;
        expect(style.flex).toEqual('3 4 100%');
        expect(style.display).toEqual('inline');
        expect(style.height).toEqual('30%');
        expect(style.width).toEqual('1rem');
    });
});

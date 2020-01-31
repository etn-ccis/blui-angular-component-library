import React from 'react';
import ReactDOM from 'react-dom';
import { findByTestId } from '../test-utils';
import { Mount, Shallow } from '../types';
import { Hero } from './Hero';
import { ChannelValue } from '../ChannelValue';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMount, createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;

describe('Hero', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow();
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render with the wrapper class', () => {
        const wrapper = shallow(<Hero value={1} label={'test'} icon={'a'} />);
        expect(findByTestId('wrapper', wrapper)).toBeTruthy();
    });
    it('renders without children', () => {
        const wrapper = shallow(<Hero value={1} label={'test'} icon={'a'} />);
        expect(wrapper.find(ChannelValue).length).toEqual(1);
    });
    it('renders with children', () => {
        const wrapper = shallow(
            <Hero value={1} label={'test'} icon={'a'}>
                <ChannelValue value={1} />
                <ChannelValue value={1} />
            </Hero>
        );
        expect(wrapper.find(ChannelValue).length).toEqual(2);
    });
});

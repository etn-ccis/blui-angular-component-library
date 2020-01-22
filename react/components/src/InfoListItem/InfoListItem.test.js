import React from 'react';
import ReactDOM from 'react-dom';
import InfoListItem from './InfoListItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ListItemAvatar } from '@material-ui/core';

import Chevron from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';

import * as PXBColors from '@pxblue/colors';

import {
    createMount,
    createShallow,
    createRender,
    // describeConformance,
    getClasses,
} from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount;
let shallow;
let render;
let classes;

describe('InfoListItem', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
        render = createRender();
        classes = getClasses(<InfoListItem title={'test'} />);
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InfoListItem title={'test'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders with icon', () => {
        let wrapper = shallow(<InfoListItem hidePadding icon={<PersonIcon />} title="Test" />);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
        wrapper = shallow(<InfoListItem hidePadding title="Test" />);
        expect(wrapper.find(PersonIcon).length).toEqual(0);
    });
    it('renders correct icon Color', () => {
        let wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} />);
        expect(wrapper.instance().iconColor()).toEqual('inherit');

        wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} />);
        expect(wrapper.instance().iconColor()).toEqual('red');

        wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} iconColor={'green'} />);
        expect(wrapper.instance().iconColor()).toEqual('green');

        wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} avatar />);
        expect(wrapper.instance().iconColor()).toEqual(PXBColors.white['50']);

        wrapper = shallow(
            <InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} iconColor={'blue'} avatar />
        );
        expect(wrapper.instance().iconColor()).toEqual('blue');
    });
    it('renders with avatar', () => {
        let wrapper = shallow(<InfoListItem avatar icon={<PersonIcon />} title="Test" />);
        expect(wrapper.find(ListItemAvatar).length).toEqual(1);
        wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} />);
        expect(wrapper.find(ListItemAvatar).length).toEqual(0);
    });
    it('renders rightComponent', () => {
        let wrapper = shallow(<InfoListItem title="Test" chevron />);
        expect(wrapper.find(Chevron).length).toEqual(1);

        wrapper = shallow(<InfoListItem title="Test" />);
        expect(wrapper.find(Chevron).length).toEqual(0);

        wrapper = shallow(<InfoListItem title="Test" onClick={() => {}} rightComponent={<PersonIcon />} />);
        expect(wrapper.find(Chevron).length).toEqual(0);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
    });
    it('renders leftComponent', () => {
        let wrapper = shallow(<InfoListItem title="Test" leftComponent={<PersonIcon />} />);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
    });
});

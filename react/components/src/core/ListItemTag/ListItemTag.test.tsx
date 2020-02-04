import React from 'react';
import ReactDOM from 'react-dom';
import { Mount, Shallow } from '../types';
import { ListItemTag } from './ListItemTag';
import { findByTestId } from '../test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as Colors from '@pxblue/colors';

import { createMount, createShallow } from '@material-ui/core/test-utils';
import { Typography } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

let mount: Mount;
let shallow: Shallow;

describe('ListItemTag', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        // shallow = createShallow({ dive: true });
        shallow = createShallow();
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListItemTag label={'test'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render with the tag-container class', () => {
        let wrapper = shallow(<ListItemTag label={'test'} />);
        expect(findByTestId('tag-root', wrapper)).toBeTruthy();
    });

    xit('renders the correct label text', () => {
        let wrapper = shallow(<ListItemTag label={'test'} />);
        expect(findByTestId('tag-root', wrapper)).toBeTruthy();
    });

    xit('renders with correct colors', () => {

        // default color
        let wrapper = shallow(<ListItemTag label={'test'} />);
        expect(wrapper.find('Typography').props().style.color).toEqual(Colors.white['50']);

    //     // // customized color
    //     // wrapper = shallow(<ListItemTag label={'test'} textColor={Colors.gold['200']} />);
    //     // expect(wrapper.find(Typography).props().style.color).toEqual(Colors.gold['200']);
    });

    // it('renders with icon', () => {
    //     let wrapper = shallow(<InfoListItem hidePadding icon={<PersonIcon />} title="Test" />);
    //     expect(wrapper.find(PersonIcon).length).toEqual(1);
    //     wrapper = shallow(<InfoListItem hidePadding title="Test" />);
    //     expect(wrapper.find(PersonIcon).length).toEqual(0);
    // });

    // it('renders correct icon Color', () => {
    //     let wrapper = shallow(<InfoListItem icon={<PersonIcon />} title="Test" />);
    //     expect(wrapper.find(ListItemIcon).props().style.color).toEqual('inherit');

    //     wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} />);
    //     expect(wrapper.find(ListItemIcon).props().style.color).toEqual('red');

    //     wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} iconColor={'green'} />);
    //     expect(wrapper.find(ListItemIcon).props().style.color).toEqual('green');

    //     wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} avatar />);
    //     expect(wrapper.find(Avatar).props().style.color).toEqual(Colors.white['50']);

    //     wrapper = shallow(
    //         <InfoListItem title="Test" icon={<PersonIcon />} statusColor={'red'} iconColor={'blue'} avatar />
    //     );
    //     expect(wrapper.find(Avatar).props().style.color).toEqual('blue');
    // });
    // it('renders with avatar', () => {
    //     let wrapper = shallow(<InfoListItem avatar icon={<PersonIcon />} title="Test" />);
    //     expect(wrapper.find(ListItemAvatar).length).toEqual(1);
    //     wrapper = shallow(<InfoListItem title="Test" icon={<PersonIcon />} />);
    //     expect(wrapper.find(ListItemAvatar).length).toEqual(0);
    // });
    // it('renders rightComponent', () => {
    //     let wrapper = shallow(<InfoListItem title="Test" chevron />);
    //     expect(wrapper.find(Chevron).length).toEqual(1);

    //     wrapper = shallow(<InfoListItem title="Test" />);
    //     expect(wrapper.find(Chevron).length).toEqual(0);

    //     wrapper = shallow(<InfoListItem title="Test" onClick={() => {}} rightComponent={<PersonIcon />} />);
    //     expect(wrapper.find(Chevron).length).toEqual(0);
    //     expect(wrapper.find(PersonIcon).length).toEqual(1);
    // });
    // it('renders leftComponent', () => {
    //     const wrapper = shallow(<InfoListItem title="Test" leftComponent={<PersonIcon />} />);
    //     expect(wrapper.find(PersonIcon).length).toEqual(1);
    // });
});

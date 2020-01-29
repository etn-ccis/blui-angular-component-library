import React from 'react';
import ReactDOM from 'react-dom';

import { Divider, List, Typography } from '@material-ui/core';

import { createMount, createShallow } from '@material-ui/core/test-utils';
import { MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HeroBanner } from '../HeroBanner';
import { findByTestId } from '../test-utils';
import { Mount, Shallow } from '../types';
import { ScoreCard } from './ScoreCard';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;

describe('ScoreCard', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScoreCard headerTitle={'TestTitle'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders with all text', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} />);
        expect(wrapper.find(Typography).length).toEqual(1);
        wrapper = shallow(<ScoreCard headerTitle={'Test'} headerSubtitle={'TestSub'} />);
        expect(wrapper.find(Typography).length).toEqual(2);
        wrapper = shallow(<ScoreCard headerTitle={'Test'} headerSubtitle={'TestSub'} headerInfo={'TestInfo'} />);
        expect(wrapper.find(Typography).length).toEqual(3);
    });
    it('renders with header actions', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} />);
        expect(wrapper.find(MoreVert).length).toEqual(0);
        wrapper = shallow(<ScoreCard headerTitle={'Test'} actionItems={[<MoreVert key={'icon1'} />]} />);
        expect(findByTestId('action-item', wrapper).length).toEqual(1);
        expect(wrapper.find(MoreVert).length).toEqual(1);
        wrapper = shallow(
            <ScoreCard
                actionLimit={2}
                headerTitle={'Test'}
                actionItems={[<MoreVert key={'icon1'} />, <MoreVert key={'icon2'} />, <MoreVert key={'icon3'} />]}
            />
        );
        expect(findByTestId('action-item', wrapper).length).toEqual(2);
        expect(wrapper.find(MoreVert).length).toEqual(2);
    });
    it('renders correct header text color', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} />);
        let title = wrapper.find(Typography);

        let div = findByTestId('header', wrapper);
        expect(div.props().style.color).toEqual(Colors.white[50]);
        wrapper = shallow(<ScoreCard headerTitle={'Test'} headerFontColor={'red'} />);
        title = wrapper.find(Typography);
        div = findByTestId('header', wrapper);
        expect(title.props().style.color).toEqual('red');
        expect(div.props().style.color).toEqual('red');
    });
    it('renders body content', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} />);
        let content = findByTestId('content', wrapper);
        let body = findByTestId('body-wrapper', wrapper);
        expect(content.children().length).toEqual(1); // body wrapper
        expect(body.children().length).toEqual(0);

        wrapper = shallow(
            <ScoreCard headerTitle={'Test'}>
                <List />
            </ScoreCard>
        );
        content = findByTestId('content', wrapper);
        body = findByTestId('body-wrapper', wrapper);
        expect(content.children().length).toEqual(1);
        expect(body.children(List).length).toEqual(1);
        expect(wrapper.find(List).length).toEqual(1);
    });
    it('renders an action row', () => {
        const wrapper = shallow(<ScoreCard headerTitle={'Test'} actionRow={<List />} />);
        const card = findByTestId('card', wrapper);
        expect(card.children().length).toEqual(4); // header, content, footer (Divider + content)
        expect(wrapper.find(List).length).toEqual(1);
        expect(wrapper.find(Divider).length).toEqual(1);
    });
    it('renders badge content', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} badge={<HeroBanner />} />);
        const content = findByTestId('content', wrapper);
        const body = findByTestId('body-wrapper', wrapper);
        let badge = findByTestId('badge-wrapper', wrapper);
        expect(content.children().length).toEqual(2); // body wrapper + badge
        expect(body.children().length).toEqual(0); // no body
        expect(badge.children(HeroBanner).length).toEqual(1);
        expect(badge.props().style.marginTop).toEqual(0);
        expect(badge.props().style.alignSelf).toEqual('center');

        wrapper = shallow(<ScoreCard headerTitle={'Test'} badge={<HeroBanner />} badgeOffset={1} />);
        badge = findByTestId('badge-wrapper', wrapper);
        expect(badge.children(HeroBanner).length).toEqual(1);
        expect(badge.props().style.marginTop).toEqual(1);
        expect(badge.props().style.alignSelf).toEqual('flex-start');
    });
});

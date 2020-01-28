import { Divider, List, StyleRules, Typography } from '@material-ui/core';

import { createMount, createShallow, getClasses } from '@material-ui/core/test-utils';
import { MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import { HeroBanner } from '../HeroBanner';
import { Mount, Shallow } from '../types';
import { ScoreCard } from './ScoreCard';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;
let classes: StyleRules;

describe('ScoreCard', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
        classes = getClasses(<ScoreCard headerTitle={'Test'} />);
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
        expect(wrapper.find(`.${classes.actionItem}`).length).toEqual(1);
        expect(wrapper.find(MoreVert).length).toEqual(1);
        wrapper = shallow(
            <ScoreCard
                actionLimit={2}
                headerTitle={'Test'}
                actionItems={[<MoreVert key={'icon1'} />, <MoreVert key={'icon2'} />, <MoreVert key={'icon3'} />]}
            />
        );
        expect(wrapper.find(`.${classes.actionItem}`).length).toEqual(2);
        expect(wrapper.find(MoreVert).length).toEqual(2);
    });
    it('renders correct header text color', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} />);
        let title = wrapper.find(Typography);
        let div = wrapper.find(`.${classes.header}`);
        expect(div.props().style.color).toEqual(Colors.white[50]);
        wrapper = shallow(<ScoreCard headerTitle={'Test'} headerFontColor={'red'} />);
        title = wrapper.find(Typography);
        div = wrapper.find(`.${classes.header}`);
        expect(title.props().style.color).toEqual('red');
        expect(div.props().style.color).toEqual('red');
    });
    it('renders body content', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} />);
        let content = wrapper.find(`.${classes.content}`);
        let body = wrapper.find(`.${classes.bodyWrapper}`);
        expect(content.children().length).toEqual(1); // body wrapper
        expect(body.children().length).toEqual(0);

        wrapper = shallow(
            <ScoreCard headerTitle={'Test'}>
                <List />
            </ScoreCard>
        );
        content = wrapper.find(`.${classes.content}`);
        body = wrapper.find(`.${classes.bodyWrapper}`);
        expect(content.children().length).toEqual(1);
        expect(body.children(List).length).toEqual(1);
        expect(wrapper.find(List).length).toEqual(1);
    });
    it('renders an action row', () => {
        const wrapper = shallow(<ScoreCard headerTitle={'Test'} actionRow={<List />} />);
        const card = wrapper.find(`.${classes.card}`);
        expect(card.children().length).toEqual(4); // header, content, footer (Divider + content)
        expect(wrapper.find(List).length).toEqual(1);
        expect(wrapper.find(Divider).length).toEqual(1);
    });
    it('renders badge content', () => {
        let wrapper = shallow(<ScoreCard headerTitle={'Test'} badge={<HeroBanner />} />);
        const content = wrapper.find(`.${classes.content}`);
        const body = wrapper.find(`.${classes.bodyWrapper}`);
        let badge = wrapper.find(`.${classes.badgeWrapper}`);
        expect(content.children().length).toEqual(2); // body wrapper + badge
        expect(body.children().length).toEqual(0); // no body
        expect(badge.children(HeroBanner).length).toEqual(1);
        expect(badge.props().style.marginTop).toEqual(0);
        expect(badge.props().style.alignSelf).toEqual('center');

        wrapper = shallow(<ScoreCard headerTitle={'Test'} badge={<HeroBanner />} badgeOffset={1} />);
        badge = wrapper.find(`.${classes.badgeWrapper}`);
        expect(badge.children(HeroBanner).length).toEqual(1);
        expect(badge.props().style.marginTop).toEqual(1);
        expect(badge.props().style.alignSelf).toEqual('flex-start');
    });
});

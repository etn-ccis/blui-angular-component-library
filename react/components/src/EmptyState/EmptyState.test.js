import React from 'react';
import ReactDOM from 'react-dom';
import EmptyState from "./EmptyState";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';

import {
    createMount,
    createShallow,
    createRender,
    // describeConformance,
    getClasses,
} from '@material-ui/core/test-utils';


Enzyme.configure({adapter: new Adapter()});
let mount;
let shallow;
let render;
let classes;

describe("EmptyState", () => {

    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
        render = createRender();
        classes = getClasses(<EmptyState icon={<PersonIcon />} title="Test" description="Test Description" actions={<Button> Test </Button>}/>);
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EmptyState icon={<PersonIcon />} title="Test" description="Test Description" actions={<Button> Test </Button>}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders with frame class', () => {
        const wrapper = shallow(
            <EmptyState icon={<PersonIcon />} title="Test" />
        );
        expect(wrapper.hasClass(classes.frame)).toEqual(true);
    });
    it('renders with icon', () => {
        let wrapper = shallow(
            <EmptyState icon={<PersonIcon />} title="Test" />
        );
        expect(wrapper.find(PersonIcon).length).toEqual(1);
        wrapper = shallow(
            <EmptyState title="Test" />
        );
        expect(wrapper.find(PersonIcon).length).toEqual(0);
    });
    it('renders with text', () => {
        let wrapper = shallow(
            <EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />
        );
        expect(wrapper.find(Typography).length).toEqual(2);
        wrapper = shallow(
            <EmptyState icon={<PersonIcon />} title="Test"/>
        );
        expect(wrapper.find(Typography).length).toEqual(1);
    });
    it('renders with actions', () => {
        let wrapper = shallow(
            <EmptyState icon={<PersonIcon />} title="Test" description="Test Description" actions={<Button> Test </Button>} />
        );
        expect(wrapper.find(Button).length).toEqual(1);
        wrapper = shallow(
            <EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />
        );
        expect(wrapper.find(Button).length).toEqual(0);
    });
})







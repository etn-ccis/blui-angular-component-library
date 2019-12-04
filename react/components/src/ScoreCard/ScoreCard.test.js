import React from 'react';
import ReactDOM from 'react-dom';
import ScoreCard from "./ScoreCard";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

describe("InfoListItem", () => {

    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
        render = createRender();
        classes = getClasses(<ScoreCard />);
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScoreCard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})







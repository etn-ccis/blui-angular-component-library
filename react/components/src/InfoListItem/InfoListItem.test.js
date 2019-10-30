import React from 'react';
import ReactDOM from 'react-dom';
import InfoListItem from "./InfoListItem";
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
        classes = getClasses(<InfoListItem/>);
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InfoListItem/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})







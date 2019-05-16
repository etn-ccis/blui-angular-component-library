import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero'
import ChannelValue from '../ChannelValue/ChannelValue';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '@material-ui/icons/Menu';
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

describe("Hero", () => {

  beforeEach(() => {
    mount = createMount({ strict: true });
    shallow = createShallow({ dive: true });
    render = createRender();
    classes = getClasses(<Hero value={0} units={'test'} label={'TEST'} icon={<Menu/>} valueIcon={<Menu/>} />);
  });
  
  afterEach(() => {
    mount.cleanUp();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'}/>
  , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render with the wrapper class', () => {
    const wrapper = shallow(<Hero value={1} label={'test'} icon={'a'}/>);
    expect(wrapper.hasClass(classes.wrapper)).toEqual(true);
  });
  it('renders without children', () => {
    const wrapper = shallow(
      <Hero value={1} label={'test'} icon={'a'}>
      </Hero>
    );
    expect(wrapper.find(ChannelValue).length).toEqual(1);
  });
  it('renders with children', () => {
    const wrapper = shallow(
      <Hero value={1} label={'test'} icon={'a'}>
        <ChannelValue value={1}/>
        <ChannelValue value={1}/>
      </Hero>
    );
    expect(wrapper.find(ChannelValue).length).toEqual(2);
  });
});
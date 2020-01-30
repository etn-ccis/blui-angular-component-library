import React from 'react';
import ReactDOM from 'react-dom';
import { HeroBanner } from './HeroBanner';
import { Hero } from '../Hero';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('HeroBanner', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HeroBanner />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders only 4 children', () => {
        const hero = mount(
            <HeroBanner>
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
            </HeroBanner>
        );
        expect(hero.find(Hero).length).toEqual(4);
    });
});

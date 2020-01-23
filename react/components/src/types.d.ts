import {mount, shallow} from 'enzyme';

export type Mount = typeof mount & {
   attachTo: HTMLElement;
   cleanUp(): void;
};

export type Shallow = typeof shallow;

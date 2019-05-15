import React from 'react';
import ReactDOM from 'react-dom';
import HeroChannel from './HeroChannel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroChannel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

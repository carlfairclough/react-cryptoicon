import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DAI } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DAI />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

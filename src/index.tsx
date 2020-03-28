import * as React from 'react';
import { render } from 'react-dom';

const container = document.querySelector('#root');

if (container) {
  render(<div>Hello World</div>, container);
}

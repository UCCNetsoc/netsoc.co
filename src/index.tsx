import * as React from 'react';
import { render, hydrate } from 'react-dom';
import Root from './containers/Root';

const container = document.querySelector('#root');

if (container) {
  if (container.hasChildNodes()) {
    hydrate(<Root />, container);
  } else {
    render(<Root />, container);
  }
}

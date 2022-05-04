import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';
import Index from '../index.js';



// index.test.js

it('renders without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});
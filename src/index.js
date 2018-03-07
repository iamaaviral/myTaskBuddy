// var React = require{'react'}
// var render = require{'react-dom'}.render;
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './style/style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Routes from './routes';

const initialState = {

  Todo: [
    {
      name: 'primary',
      todos: [],
    },
    {
      name: 'Secondary',
      todos: [],
    },
  ],
  filter: [{ keyword: '', Status: 'SHOW_ALL' }],
  selectedCategory: '0',
  collapsed: false,
};
//  configured and created our store
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

// var React = require{'react'}
// var render = require{'react-dom'}.render;
import React from 'react'
import { render } from 'react-dom'
import {Route, Link, Switch  } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../components/App'
import SignUp from '../components/SignUp'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import './style.css'
import Routes from './routes'

let initialState = {
                todos: []
}
//configured and created our store
let store = configureStore(initialState)

render(
        <Provider store={store}>
          <Routes />
        </Provider>,
        document.getElementById('root')
)

// var React = require{'react'}
// var render = require{'react-dom'}.render;
import React from 'react'
import { render } from 'react-dom'
import {Route, Link, Switch  } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import './style/style.css'
import Routes from './routes'

let initialState = {

                Todo: [
                  {
                    name:"primary",
                    todos:[]
                    },
                    {
                      name:"Secondary",
                      todos:[]
                      }
                ],
                filter:[{keyword:'',Status:"SHOW_ALL"}],
                selectedCategory:"0"
}
//configured and created our store
let store = configureStore(initialState)

render(
        <Provider store={store}>
          <Routes />
        </Provider>,
        document.getElementById('root')
)

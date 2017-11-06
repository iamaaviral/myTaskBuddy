// var React = require{'react'}
// var render = require{'react-dom'}.render;
import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import './style.css'

let initialState = {
                todos: [{
                        id: 0,
                        completed: false,
                        text: 'Make this Project'
                }]
}
//configured and created our store
let store = configureStore(initialState)

render(
        <Provider store={store}>
        <App/>
        </Provider>,
        document.getElementById('app')
)

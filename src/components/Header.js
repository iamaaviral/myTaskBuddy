import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'


const Header = React.createClass({

    handleCollapsed(event) {
        this.props.dispatch(actions.handleCollapsed())
    },

    render(){
        return (
        <ul>
            <li><button onClick={this.handleCollapsed}>collapse</button></li>
            <li><a href="#">To DO</a></li>
            <li><a href="#">Notifs</a></li>
            <li><a href="#">Signout</a></li>
        </ul>
        )
    }
})


export default Header
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
            <span className="left">
            <li><i className="fa fa-bars" onClick={this.handleCollapsed}></i></li>
            </span>
            <span className="right">
            <li><a href="#">To DO</a></li>
            <li><a href="#">Notifs</a></li>
            <li><a href="#">Signout</a></li>
            </span>
        </ul>
        )
    }
})


export default Header
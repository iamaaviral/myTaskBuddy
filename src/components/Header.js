import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import { browserHistory } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
var createReactClass = require('create-react-class');



const Header = createReactClass({
    getInitialState () {
        return {
            redirect: false
        };
    },

    handleCollapsed(event) {
        this.props.dispatch(actions.handleCollapsed())
    },

    signOut(e) {
        e.preventDefault();
        this.setState({ redirect: true });
        //  <Redirect to={'/main'} />
    },

    render(){
        if (this.state.redirect) {
            return (<Redirect to={'/'} />)
        }
        return (
        <ul>
            <span className="left">
            <li><a><i className="fa fa-bars" onClick={this.handleCollapsed}></i></a></li>
            </span>
            <span className="right">
            {/* <li><a href="#">To DO </a></li> */}
            <li><a href="#">Notifs <i className="fa fa-bell-o"></i> </a></li>
            <li><a onClick={e => this.signOut(e)}>SignOut <i className="fa fa-sign-out"></i> </a></li>
            </span>
        </ul>
        )
    }
})


export default Header
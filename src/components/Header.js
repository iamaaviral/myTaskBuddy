import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import actions from '../redux/actions';

const createReactClass = require('create-react-class');

const Header = createReactClass({

// class Header extends Component {
  getInitialState() {
    return {
      redirect: false,
    };
  },

  handleCollapsed() {
    this.props.dispatch(actions.handleCollapsed());
  },

  signOut(e) {
    e.preventDefault();
    this.setState({ redirect: true });
    //  <Redirect to={'/main'} />
  },

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />);
    }
    return (
      <ul>
        <span className="left">
          <li><a><i className="fa fa-bars" onClick={this.handleCollapsed} /></a></li>
        </span>
        <span className="right">
          {/* <li><a href="#">To DO </a></li> */}
          <li><a href="#">Notifs <i className="fa fa-bell-o" /> </a></li>
          <li><a onClick={e => this.signOut(e)}>SignOut <i className="fa fa-sign-out" /></a></li>
        </span>
      </ul>
    );
  }
});

export default Header;

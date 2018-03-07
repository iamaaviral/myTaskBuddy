import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import actions from '../redux/actions';

// const Header = createReactClass({

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleCollapsed = this.handleCollapsed.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  handleCollapsed() {
    this.props.dispatch(actions.handleCollapsed());
  }

  signOut(e) {
    e.preventDefault();
    this.setState({ redirect: true });
    //  <Redirect to={'/main'} />
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />);
    }
    return (
      <ul>
        <span className="left">
          <li><a><i className="fa fa-bars" role="presentation" onClick={this.handleCollapsed} /></a></li>
        </span>
        <span className="right">
          {/* <li><a href="#">To DO </a></li> */}
          <li><a>Notifs <i className="fa fa-bell-o" /> </a></li>
          <li><a role="presentation" onClick={e => this.signOut(e)}>SignOut <i className="fa fa-sign-out" /></a></li>
        </span>
      </ul>
    );
  }
}

export default Header;

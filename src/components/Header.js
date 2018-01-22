import React, { Component } from 'react'
import {connect} from 'react-redux'


class Header extends Component{

    isActive(value){
        return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
    }
    render(){
        return (
        <ul>
            <li><a href="#">To DO</a></li>
            <li><a href="#">Notifs</a></li>
            <li><a href="#">Signout</a></li>
        </ul>
        )
    }
}


export default Header
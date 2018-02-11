            
import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'
               
               
var DeleteCompleted  = React.createClass({
    
    handleDelete(event){
        this.props.dispatch(actions.deleteCompleted())
    },

render: function(){	
    
        return (
        <div className="deleteCompleted">
            <button onClick={this.handleDelete}  className={this.props.filter[0].Status === "true" ? '' : 'hidden'}>Delete all completed</button>
        </div>

        )}
});
               
export default DeleteCompleted
            
import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'
var createReactClass = require('create-react-class');
              
               
var DeleteCompleted  = createReactClass({
    
    handleDelete(event){
        this.props.dispatch(actions.deleteCompleted())
    },

render: function(){	
    
        return (
        <div  className={this.props.filter[0].Status !== "true" || this.props.todos.filter((todo) => { return todo.completed}).length==0 ? 'hidden' : 'deleteCompleted btn hover'}>
            <button onClick={this.handleDelete} className="del">Delete all completed</button>
        </div>

        )}
});
               
export default DeleteCompleted
import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'
var createReactClass = require('create-react-class');

const CategoryInput = createReactClass({
    getInitialState () {
        return {
            inputText: '',
            editing:true
        };
    },
    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    },
    handleSubmit(event){
        event.preventDefault()
        // console.log("submit button is woking?");
        if(this.state.inputText !== ""){
                // console.log("no input");
                this.props.dispatch(actions.addCategory(this.state.inputText))
                this.setState({
                    inputText: '',
                    editing: true
                })
        
      }
    },
    handleEdit(event) {
        if(this.props.collapsed){
        // console.log(this.props.collapsed);
        this.props.dispatch(actions.handleCollapsed())
        this.setState({
            editing:false
        })
    }else{
        this.setState({
            editing:false
        })
    }
    },

    render(){
        if(this.state.editing){
            return(
                <div className="sidebarItem categoryInput">
                    {/* <button onClick={this.handleEdit}>Add a new category</button> */}
                    <a onClick={this.handleEdit}>
                        <span className="list-icon"> <i className="fa fa-plus"></i></span>
                       <span className="title">Add a new category</span>
                    </a>
                 </div>
            );
        }
        else{
        return(
            <div className="categoryInput">
                <form onSubmit={this.handleSubmit}>
                    <input className="new-todo" type="text" placeholder="Enter your Category" value={this.state.inputText} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
    }

});

export default CategoryInput
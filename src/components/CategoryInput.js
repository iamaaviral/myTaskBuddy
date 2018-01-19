import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

const CategoryInput = React.createClass({
    getInitialState () {
        return {
            inputText: ''
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
                    inputText: ''
                })
        
      }
    },

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your Category" value={this.state.inputText} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }

});

export default CategoryInput
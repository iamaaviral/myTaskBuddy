import React, { Component } from 'react'
import TextInput from './TextInput'
import List from './List'
import {connect} from 'react-redux'



// class App extends Component 
var App =React.createClass({

    

    render(){
        return (
        <div>
         <h2>To-Do App!</h2>
         <div id ="app">
            <TextInput dispatch={this.props.dispatch}/>
            <List dispatch={this.props.dispatch} todos={this.props.todos}/>
            <p>Total no of itmes are: {this.props.todos.length}</p> 
            <p>Total no of completed items are itmes are: {this.props.todos.filter((todo) => { return todo.completed}).length}</p> 
            <p>Total no of itmes important: {this.props.todos.filter((todo) => { return todo.important}).length}</p> 
            </div>
        </div>
        )
    }
})

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(App)
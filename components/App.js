import React, { Component } from 'react'
import TextInput from './TextInput'
import List from './List'
import {connect} from 'react-redux'


// class App extends Component 
var App =React.createClass({

    render(){
        return (
        <div>
            <TextInput dispatch={this.props.dispatch}/>
            <List dispatch={this.props.dispatch} todos={this.props.todos}/> 
        </div>
        )
    }
})

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(App)
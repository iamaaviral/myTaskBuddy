import React, { Component } from 'react'
import TextInput from './TextInput'
import List from './List'

// class App extends Component 
var App =React.createClass({

    render(){
        return (
        <div>
            <div>ToDo List</div>
            <TextInput />
            <List /> 
        </div>
        )
    }
})

export default App
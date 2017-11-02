import React, { Component } from 'react'
import TextInput from './TextInput'

// class App extends Component 
var App =React.createClass({

    render(){
        return (
        <div>
            <div>App component</div>
            <TextInput />
        </div>
        )
    }
})

export default App
import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

// class App extends Component 
var App =React.createClass({

    render(){
        return (
        <div>
            <div>App component</div>
            <TextDisplay />
        </div>
        )
    }
})

export default App
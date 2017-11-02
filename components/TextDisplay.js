import React, {Component} from 'react'

class TextDisplay extends Component{

    // getInitialState(){
    //     return {
    //         inputText: 'initial text'
    //     }
    // }
    constructor(props,context){
        super(props, context)
        this.state={
            inputText: 'initial txt'
        }
    }
    render(){
        return <input type="text" placeholder="Enter your Task here" value={this.state.inputText} />
    }
}

export default TextDisplay
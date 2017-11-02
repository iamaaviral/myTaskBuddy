import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component{

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

    handleChange(event) {
        // console.log("change");
        // console.log(event.target.value);
        this.setState({
            inputText: event.target.value
        })
    }
    render(){
        return (
        <div>
            <input type="text" placeholder="Enter your Task here" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
            <hr/>
            <TextDisplay text={this.state.inputText}/>
        </div>
        )
     }
}

export default TextInput
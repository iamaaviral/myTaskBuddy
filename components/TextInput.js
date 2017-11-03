import React, {Component} from 'react'
// import TextDisplay from './TextDisplay'
import actions from '../redux/actions'

class TextInput extends Component{

    // getInitialState(){
    //     return {
    //         inputText: 'initial text'
    //     }
    // }
    constructor(props,context){
        super(props, context)
        this.state={
            inputText: ''
        }
    }

    handleChange(event) {
        // console.log("change");
        // console.log(event.target.value);
        this.setState({
            inputText: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("submit button is woking?");
        this.props.dispatch(actions.addTodo(this.state.inputText))
    }
    render(){
        return (
        <div>
            <input type="text" placeholder="Enter your Task here" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
           
            <button onClick={this.handleSubmit.bind(this)}>Submit this task</button>
            <hr/>
            {/* <TextDisplay text={this.state.inputText}/> */}
        </div>
        )
     }
}

export default TextInput
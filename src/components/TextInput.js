import React, { Component } from 'react';
// import TextDisplay from './TextDisplay'
import actions from '../redux/actions';

class TextInput extends Component {
  // getInitialState(){
  //     return {
  //         inputText: 'initial text'
  //     }
  // }
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log("change");
    // console.log(event.target.value);
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("submit button is woking?");
    if (this.state.inputText !== '') {
    // console.log("no input");
      this.props.dispatch(actions.addTodo(this.state.inputText));
      this.setState({
        inputText: '',
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="new-todo" type="text" placeholder="Enter your Task here" value={this.state.inputText} onChange={this.handleChange} />
          {/* <input type="Submit" /> */}
          {/* <TextDisplay text={this.state.inputText}/> */}
        </form>
      </div>
    );
  }
}

export default TextInput;

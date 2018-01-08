import React, {Component} from 'react'

class TextDisplay extends Component{

    render(){
        return (
              // <div>Display some text</div>
            <div>{this.props.text}</div>
            )
     }
}

export default TextDisplay
import React, {Component} from 'react'

class TodoiItem extends Component{

    render(){
        return (
            <li>
               <div> {this.props.todo.text} </div>
               <button onClick={this.handleComplete.bind(this)}> Mark as completed</button>
               <button onClick={this.handleDelete.bind(this) > Delete this todo</button>
            </li>
          
            )
     }
}

export default TodoiItem
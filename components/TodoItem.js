import React, {Component} from 'react'
import actions from '../redux/actions'

class TodoiItem extends Component{

    handleComplete(){
            this.props.dispatch(actions.completeTodo(this.props.todo.id))
    }

    handleDelete(){
        this.props.dispatch(actions.deleteTodo(this.props.todo.id))
    }

    render(){
        return (
            <li>
               <div> {this.props.todo.text} </div>
               <button onClick={this.handleComplete.bind(this)}> Mark as completed</button>
               <button onClick={this.handleDelete.bind(this)} > Delete this todo</button>
            </li>
          
            )
     }
}

export default TodoiItem
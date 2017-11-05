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
                <input type="checkbox" onChange={this.handleComplete.bind(this)} />
               <span  className={this.props.todo.completed ? 'completed' : 'none' }> { this.props.todo.text} </span>
              <button onClick={this.handleDelete.bind(this)} >&#x2718;</button>
               {/* <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete.bind(this) > */}
            </li>
          
            )
     }
}

export default TodoiItem
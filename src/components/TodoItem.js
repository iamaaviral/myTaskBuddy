import React, {Component} from 'react'
import actions from '../redux/actions'

class TodoiItem extends Component{
    

    handleComplete(){
            this.props.dispatch(actions.completeTodo(this.props.todo.id))
    }

    handleDelete(){
        this.props.dispatch(actions.deleteTodo(this.props.todo.id))
    }

    handleImportant(){
        this.props.dispatch(actions.importantTodo(this.props.todo.id))
    }


    render(){
        return (
            <li >
                <input type="checkbox"  onChange={this.handleComplete.bind(this)} />
               <span  className={this.props.todo.completed ? 'completed' : 'none' }> { this.props.todo.text} </span>
               <div className="btn">
               <button  className={this.props.todo.important ? 'important' : 'imp' } onClick={this.handleImportant.bind(this)} >&#x2764;</button>
              <button  className="del" onClick={this.handleDelete.bind(this)} >&#x2716;</button>
              </div>
               {/* <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete.bind(this) > */}
            </li>
          
            )
     }
}

export default TodoiItem
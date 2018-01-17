import React, {Component} from 'react'
import actions from '../redux/actions'

import {connect} from 'react-redux'

class TodoiItem extends Component{
    

    handleComplete(){
            this.props.dispatch(actions.completeTodo(this.props.children.id))
    }

    handleDelete(){
        this.props.dispatch(actions.deleteTodo(this.props.children.id))
    }

    handleImportant(){
        this.props.dispatch(actions.importantTodo(this.props.children.id))
    }


    render(){
        return (
            <li data-id={this.props.value} key={this.props.value} >
               <span  onClick={this.handleComplete.bind(this)} className={this.props.children.completed ? 'completed' : '' }>{this.props.children.text}</span>
               <div className="btn">
               <button  className={this.props.children.important ? 'important' : 'imp' } onClick={this.handleImportant.bind(this)} >&#x2764;</button>
              <button  className="del" onClick={this.handleDelete.bind(this)} >&#x2716;</button>
              </div>
               {/* <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete.bind(this) > */}
            </li>
          
            )
     }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(TodoiItem)

// export default TodoiItem
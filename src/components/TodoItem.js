import React, { Component } from 'react';
import actions from '../redux/actions';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleImportant = this.handleImportant.bind(this);
  }
  handleComplete() {
    this.props.dispatch(actions.completeTodo(this.props.children.id));
  }

  handleDelete() {
    this.props.dispatch(actions.deleteTodo(this.props.children.id));
  }

  handleImportant() {
    this.props.dispatch(actions.importantTodo(this.props.children.id));
  }


  render() {
    return (
      <li data-id={this.props.value} key={this.props.value} >
        <span role="presentation" onClick={this.handleComplete} className={this.props.children.completed ? 'completed' : ''}>{this.props.children.text}</span>
        <div className="btn">
          <button className={this.props.children.important ? 'important' : 'imp'} onClick={this.handleImportant} > <i className="fa fa-star-o" /></button>
          <button className="del" onClick={this.handleDelete} > <i className="fa fa-trash-o" /></button>
        </div>
        {/* <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete.bind(this) > */}
      </li>
    );
  }
}

// function mapStateToProps(state){
//     return state;
// }

// export default connect(mapStateToProps)(TodoiItem)

export default TodoItem;

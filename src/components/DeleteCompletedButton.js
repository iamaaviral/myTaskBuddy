import React, { Component } from 'react';
import actions from '../redux/actions';

const createReactClass = require('create-react-class');


const DeleteCompleted = createReactClass({
// class DeleteCompleted extends Component {
  handleDelete() {
    this.props.dispatch(actions.deleteCompleted());
  },
  render() {
    return (
      <div className={this.props.filter[0].Status !== 'true' || this.props.todos.filter((todo) => { return todo.completed; }).length === 0 ? 'hidden' : 'deleteCompleted btn hover'}>
        <button onClick={this.handleDelete} className="del">Delete all completed</button>
      </div>
    );
  }
});

export default DeleteCompleted;

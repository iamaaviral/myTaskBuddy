import React, { Component } from 'react';
import TodoItem from './TodoItem';

// class List extends Component{
//     render(){
//         return (
//             // <div>Display some text</div>
//             // <div>This is my List</div>
//             <ul>
//                 {/* <li>todo id: 0</li> */}
//                 {
//                     this.props.todos.map((todo) => {
//                         // return <li key={todo.id}>{todo.text}</li>
//                         return  <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>
//                     })
//                 }
//             </ul>
//             )
//     }
// }
// var List = createReactClass({

class List extends Component {
  render() {
    const createItem = function item(itemText, i) {
      return (
        <TodoItem dispatch={this.props.dispatch} key={i} value={i}>{itemText}</TodoItem>
      );
    };
    let allitems = this.props.todos;
    // Here is the filter function
    const status = this.props.filter[0].Status;
    switch (status) {
      case 'false':
        allitems = allitems.filter(t => t.important);
        break;
      case 'true':
        allitems = allitems.filter(t => t.completed);
    }
    return <ul>{allitems.map(createItem, this)}</ul>;
  }
}
export default List;

    import React, {Component} from 'react'
    import TodoItem from './TodoItem'
    import actions from '../redux/actions'

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
    var List = React.createClass({
    render: function() {
			
        var createItem = function(itemText,i,todo) {
        
            return (
                <TodoItem dispatch={this.props.dispatch} key={todo.id}>{itemText}</TodoItem>
            );
        };
        var allitems = this.props.todos;
        // Here is the filter function 
        var status = this.props.filter[0].Status;
        switch (status){
            case 'false':
             allitems = allitems.filter(t => !t.completed)
             break;
             case 'true':
             allitems = allitems.filter(t => t.completed)
        };
        return <ul>{allitems.map(createItem,this)}</ul>;
    }
});

    export default List
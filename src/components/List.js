    import React, {Component} from 'react'
    import TodoItem from './TodoItem'
    import actions from '../redux/actions'

    class List extends Component{

        render(){
            return (
                // <div>Display some text</div>
                // <div>This is my List</div>
                <ul>
                    {/* <li>todo id: 0</li> */}
                    {
                        this.props.todos.map((todo) => {
                            // return <li key={todo.id}>{todo.text}</li>
                            return  <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>
                        })
                    }
                </ul>
                )
        }
    }

    export default List
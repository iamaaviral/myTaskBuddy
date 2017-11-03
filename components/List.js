import React, {Component} from 'react'

class List extends Component{

    render(){
        return (
              // <div>Display some text</div>
            // <div>This is my List</div>
            <ul>
                {/* <li>todo id: 0</li> */}
                {
                    this.props.todos.map((todo) => {
                        return <li key={todo.id}>{todo.text}</li>
                    })
                }
             </ul>
            )
     }
}

export default List
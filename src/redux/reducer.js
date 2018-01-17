function getId(state){
    return state.Todo[state.selectedCatelog].todos.reduce((maxId,todo) => {
        return Math.max(todo.id,maxId)
    }, -1) + 1
}

let reducer = function(state, action){
    switch (action.type) {
        case 'ADD_TODO':
                //  console.log("this.props.dispatch error");
                //Have used ES6 syntax object.assign
                    return Object.assign({},state,{
                    // todos: [{
                    //     //add new todo info
                    // text: action.text,
                    // completed: false,
                    // important: false,
                    // id: getId(state)
                    // }, ...state.todos]
                    Todo: [{
                        todos: [{
                                //add new todo info
                            text: action.text,
                            completed: false,
                            important: false,
                            id: getId(state)
                            }, ...state.Todo[state.selectedCatelog].todos]
                    }, ...state.Todo]
                })
        case 'COMPLETE_TODO':
                    return Object.assign({},state, {
                       Todo:[{
                        todos: state.Todo[state.selectedCatelog].todos.map((todo) => {
                            return todo.id === action.id ? Object.assign({}, todo, {completed : !todo.completed}) : todo
                        })
                       }]
                    })
        
        
          case 'IMPORTANT_TODO':
                    return Object.assign({},state, {
                        Todo:[{
                            todos: state.Todo[state.selectedCatelog].todos.map((todo) => {
                                return todo.id === action.id ? Object.assign({}, todo, {important : !todo.important}) : todo
                            })
                         }]
                    })

        case 'DELETE_TODO':
                    return Object.assign({},state, {
                        todos: state.todos.filter((todo) => {
                            return todo.id !== action.id
                        })
                    })

        default: 
                return state;
    }
}

export default reducer
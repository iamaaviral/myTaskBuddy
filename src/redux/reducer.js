function getId(state){
    return state.Todo[state.selectedCategory].todos.reduce((maxId,todo) => {
        return Math.max(todo.id,maxId)
    }, -1) + 1
}

let reducer = function(state, action){
    switch (action.type) {
        case 'ADD_TODO':
                var item = {text: action.text,
                                completed: false,
                                important: false,
                                id: getId(state)};
		
                var newtodo = state.Todo;
                // console.log(newtodo);
                var allItems = state.Todo[state.selectedCategory].todos.concat([item]);
                // console.log(allItems);
                newtodo[state.selectedCategory].todos = allItems;
                return Object.assign({},state, {
                     state : {newtodo, ...state }
                })
        case 'COMPLETE_TODO':
                        var newtodo = state.Todo;
                        var allItems = state.Todo[state.selectedCategory].todos.map((todo) => {
                            return todo.id === action.id ? Object.assign({}, todo, {completed : !todo.completed}) : todo
                        });
                        newtodo[state.selectedCategory].todos = allItems;

                        return Object.assign({},state, {
                            state : {newtodo, ...state }
                    })
        
          case 'IMPORTANT_TODO':
                        var newtodo = state.Todo;
                        var allItems = state.Todo[state.selectedCategory].todos.map((todo) => {
                            return todo.id === action.id ? Object.assign({}, todo, {important : !todo.important}) : todo
                        });
                        newtodo[state.selectedCategory].todos = allItems;

                        return Object.assign({},state, {
                            state : {newtodo, ...state }
                    })

        case 'DELETE_TODO':
                        var newtodo = state.Todo;
                        var allItems = state.Todo[state.selectedCategory].todos.filter((todo) => {
                            return todo.id !== action.id
                        })
                        newtodo[state.selectedCategory].todos = allItems;

                        return Object.assign({},state, {
                            state : {newtodo, ...state }
                    })

        default: 
                return state;
    }
}

export default reducer
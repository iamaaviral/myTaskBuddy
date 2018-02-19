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
            // console.log(state.Todo[state.selectedCategory].todos);
            // console.log(action.id);
            // console.log(action.id);
            var allItems = state.Todo[state.selectedCategory].todos.map((todo) => {
                return todo.id === action.id ? Object.assign({}, todo, {completed : !todo.completed}) : todo
            });
            // console.log(allItems);
            newtodo[state.selectedCategory].todos = allItems
            return Object.assign({},state, {
                state : {newtodo, ...state }
             })
        
        case 'IMPORTANT_TODO':
            var newtodo = state.Todo;
            var allItems = state.Todo[state.selectedCategory].todos.map((todo) => {
                return todo.id === action.id ? Object.assign({}, todo, {important : !todo.important}) : todo
            });
            newtodo[state.selectedCategory].todos = allItems
            return Object.assign({},state, {
                state : {newtodo, ...state }
            })

        case 'DELETE_TODO':
            var newtodo = state.Todo;
            var allItems = state.Todo[state.selectedCategory].todos.filter((todo) => {
                return todo.id !== action.id
            })
            newtodo[state.selectedCategory].todos = allItems
            return Object.assign({},state, {
                state : {newtodo, ...state }
        })
        
        case 'ADD_CATEGORY':
            var Category = {todos:[],name:action.text};
            var newtodo = state.Todo.concat([Category]);
            return Object.assign({},state,{
                Todo : newtodo 
            })

         case 'CHANGE_CATEGORY':
            return Object.assign({},state, {
                selectedCategory : action.payload
        })

        case 'DELETE_CATEGORY':
        // state.selectedCategory--;
        var newtodo = state;
        var allItems = state.Todo.slice(); //copy array
            allItems.splice(action.id, 1); //remove element
            // console.log(allItems);
            newtodo.Todo = allItems;
            state.selectedCategory = action.id-1;
        return Object.assign({},state, {
            state : {newtodo, ...state }
    })

    case 'DELETE_COMPLETED':
            var newtodo = state.Todo;
            var allItems = state.Todo[state.selectedCategory].todos.filter((todo) => {
                return !todo.completed
            })
            newtodo[state.selectedCategory].todos = allItems
            return Object.assign({},state, {
                state : {newtodo, ...state }
        })
    
    case 'HANDLE_COLLAPSED':
        var new_collapsed = !state.collapsed;
        console.log(new_collapsed);
        return Object.assign({},state, {
            collapsed : new_collapsed
    })

        default: 
                return state;
    }
}

export default reducer
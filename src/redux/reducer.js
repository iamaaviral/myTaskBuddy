function getId(state) {
  return state.Todo[state.selectedCategory].todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}


const reducer = function reduce(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const item = {
        text: action.text,
        completed: false,
        important: false,
        id: getId(state),
      };

      const newtodo = state.Todo;
      // console.log(newtodo);
      const allItems = state.Todo[state.selectedCategory].todos.concat([item]);
      // console.log(allItems);
      newtodo[state.selectedCategory].todos = allItems;
      return Object.assign({}, state, {
        state: { newtodo, ...state },
      });
    }

    case 'COMPLETE_TODO': {
      const newtodo = state.Todo;
      // console.log(state.Todo[state.selectedCategory].todos);
      // console.log(action.id);
      // console.log(action.id);
      const allItems = state.Todo[state.selectedCategory].todos.map(todo => (todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
      // console.log(allItems);
      newtodo[state.selectedCategory].todos = allItems;
      return Object.assign({}, state, {
        state: { newtodo, ...state },
      });
    }

    case 'IMPORTANT_TODO': {
      const newtodo = state.Todo;
      const allItems = state.Todo[state.selectedCategory].todos.map(todo => (todo.id === action.id ? Object.assign({}, todo, { important: !todo.important }) : todo));
      newtodo[state.selectedCategory].todos = allItems;
      return Object.assign({}, state, {
        state: { newtodo, ...state },
      });
    }

    case 'DELETE_TODO': {
      const newtodo = state.Todo;
      const allItems = state.Todo[state.selectedCategory].todos.filter(todo => todo.id !== action.id);
      newtodo[state.selectedCategory].todos = allItems;
      return Object.assign({}, state, {
        state: { newtodo, ...state },
      });
    }

    case 'ADD_CATEGORY': {
      const Category = { todos: [], name: action.text };
      const newtodo = state.Todo.concat([Category]);
      return Object.assign({}, state, {
        Todo: newtodo,
      });
    }

    case 'CHANGE_CATEGORY':
      return Object.assign({}, state, {
        selectedCategory: action.payload,
      });

    case 'DELETE_CATEGORY': {
      // state.selectedCategory--;
      const newtodo = state;
      const allItems = state.Todo.slice(); // copy array
      allItems.splice(action.id, 1); // remove element
      // console.log(allItems);
      newtodo.Todo = allItems;
      state.selectedCategory = action.id - 1;
      return Object.assign({}, state, {
        state: { newtodo, ...state },
      });
    }

    case 'DELETE_COMPLETED': {
      const newtodo = state.Todo;
      const allItems = state.Todo[state.selectedCategory].todos.filter(todo => !todo.completed);
      newtodo[state.selectedCategory].todos = allItems;
      return Object.assign({}, state, {
        state: { newtodo, ...state },
      });
    }

    case 'HANDLE_COLLAPSED': {
      const newCollapsed = !state.collapsed;
      // console.log(new_collapsed);
      return Object.assign({}, state, {
        collapsed: newCollapsed,
      });
    }

    default:
      return state;
  }
};

export default reducer;

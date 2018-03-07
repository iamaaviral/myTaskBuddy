// export default actions = {
//     addTodo(text) {
//         return {
//             type : 'ADD_TODO',
//             text: text
//         }
//     }
// }

const actions = {
  addTodo: text => ({
    type: 'ADD_TODO',
    text,
  }),

  completeTodo: id => ({
    type: 'COMPLETE_TODO',
    id,
  }),

  importantTodo: id => ({
    type: 'IMPORTANT_TODO',
    id,
  }),

  deleteTodo: id => ({
    type: 'DELETE_TODO',
    id,
  }),

  addCategory: text => ({
    type: 'ADD_CATEGORY',
    text,
  }),

  changeCategory: id => ({
    type: 'CHANGE_CATEGORY',
    payload: id,
  }),

  deleteCategory: id => ({
    type: 'DELETE_CATEGORY',
    id,
  }),

  deleteCompleted: () => ({
    type: 'DELETE_COMPLETED',
  }),

  handleCollapsed: () => ({
    type: 'HANDLE_COLLAPSED',
  }),
};

export default actions;

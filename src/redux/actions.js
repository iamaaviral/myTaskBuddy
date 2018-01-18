// export default actions = {
//     addTodo(text) {
//         return {
//             type : 'ADD_TODO',
//             text: text
//         }
//     }
// }

let actions = {
    addTodo: function(text) {
        return {
            type : 'ADD_TODO',
            text: text
        }
    },

    completeTodo: function(id) {
        return {
            type : 'COMPLETE_TODO',
            id: id
        }
    },

    importantTodo: function(id){
        return {
            type : 'IMPORTANT_TODO',
            id: id
        }
    },

    deleteTodo: function(id){
       return {
            type : 'DELETE_TODO',
            id: id
       }
    },

    changeCategory: function(id){
        return {
            type : 'CHANGE_CATEGORY',
            payload: id
        }
    }
}

export default actions

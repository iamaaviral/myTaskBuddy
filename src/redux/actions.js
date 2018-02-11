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

    addCategory: function(text){
        return {
            type : "ADD_CATEGORY",
            text: text
        }
    },

    changeCategory: function(id){
        return {
            type : 'CHANGE_CATEGORY',
            payload: id
        }
    },

    deleteCategory: function(id){
        return {
            type : 'DELETE_CATEGORY',
            id: id
        }
    },
    
    deleteCompleted:function(){
        return {
            type : 'DELETE_COMPLETED',
        }
    },
}

export default actions

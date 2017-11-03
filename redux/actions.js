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
    }
}

export default actions

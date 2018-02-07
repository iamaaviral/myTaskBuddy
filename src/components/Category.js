import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions'

// class Category extends Component{

//     render(){
//         return (
//          <div>
//             <h5>This is a category</h5>
//         </div>
//         )
//     }
// }

var Category  = React.createClass({
		
    // changeTodo : function(e){
    //     this.props.onSelected( e.currentTarget.dataset.id);
    // },
    handleCategory(event){
        // console.log(event);
        this.props.dispatch(actions.changeCategory(event.currentTarget.dataset.id))
    },

    handleDelete(event){
        // console.log(event.currentTarget.dataset);
        this.props.dispatch(actions.deleteCategory(event.currentTarget.dataset.id))
    },
    render: function(){	
    
        var allitems =this.props.todos;
        
        return <div>
        {
            allitems.map(function(item,i){ 
            return(
        
                <li key={i}>
                         <a href="#"  data-id={i} onClick={this.handleCategory} >
                             <span >{item.todos.length}</span>
                            {item.name}
                         </a>
                         <button  data-id={i} className="del" onClick={this.handleDelete} >&#x2716;</button>
                </li>
            )
        },this)}</div>;
    }
});

export default Category
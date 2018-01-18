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
        console.log(event);
        this.props.dispatch(actions.changeCategory(event.currentTarget.dataset.id))
    },
    render: function(){	
    
        var allitems =this.props.todos;
        
        return <div>
        {
            allitems.map(function(item,i){ 
            return(
        
                 <a href="#" key={i} data-id={i} onClick={this.handleCategory} >
                         <span >{item.todos.length}</span>{item.name}
                </a>
            )
        },this)}</div>;
    }
});

export default Category
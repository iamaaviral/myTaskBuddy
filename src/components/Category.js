import React, { Component } from 'react'
import {connect} from 'react-redux'


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
		
    changeTodo : function(e){
        this.props.onSelected( e.currentTarget.dataset.id);
    },
    render: function(){	
    
        var allitems =this.props.todos;
        
        return <div>
        {
            allitems.map(function(item,i){ 
            return(
        
                 <a href="#" key={i} data-id={i} onClick={this.changeTodo} >
                         <span >{item.todos.length}</span>{item.name}
                </a>
            )
        },this)}</div>;
    }
});

export default Category
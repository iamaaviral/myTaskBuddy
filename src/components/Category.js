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
        
        return <div className="category">
        {
            allitems.map(function(item,i){ 
            return(
                <li className={ i == this.props.selectedID ?"sidebarItem list hover":"sidebarItem list"}  key={i}>
                <a className="categoryList" key={i}>
                <span className="list-icon">
                    <svg className="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" > 
                            <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd">
                                     <g id="list"> 
                                         <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K">
                                        </path> 
                                     </g> 
                            </g> 
                    </svg>
                </span>
                         <span className="title" data-id={i} onClick={this.handleCategory} >
                            {item.name}
                         </span>
                         <span className="count"> {item.todos.length>0 ? item.todos.length : ''} </span>
                         <button  data-id={i} className={i == 0 ? "hidden" : "del" }onClick={this.handleDelete} >&#x2716;</button>
                </a>
                </li>
            )
        },this)}</div>;
    }
});

export default Category
import React, { Component } from 'react'
import {connect} from 'react-redux'


class Filter extends Component{

    isActive(value){
        return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
    }
    render(){
        return (
         <div id ="filterbar">
                    <ul>
                        <li className="sidebarItem"> 
                        <a>
                        <button className="title" onClick={this.props.onFilter} value="SHOW_ALL">
                            ALL
                         </button>
                         <span className="count"> {this.props.todos.length} </span>
                        
                          </a>
                         </li>

                        <li className="sidebarItem">
                          <a>
                        <button className="title" onClick={this.props.onFilter} value="false">
                        Incomplete
                         </button>
                         <span className="count"> {this.props.todos.filter((todo) => { return !todo.completed}).length} </span>
                        
                          </a>
                         </li>

                            <li className="sidebarItem">
                          <a>
                        <button className="title" onClick={this.props.onFilter} value="true">
                        Complete
                         </button>
                         <span className="count"> {this.props.todos.filter((todo) => { return todo.completed}).length} </span>
                        
                          </a>
                         </li>
                                 {/* <li><button onClick={this.props.onFilter} className={this.isActive('SHOW_ALL')} value="SHOW_ALL">All</button><span className="badge" >{this.props.todos.length}</span></li>
                                 <br/>
								  <li><button onClick={this.props.onFilter} className={this.isActive('false')} value="false">Incomplete</button><span className="badge" >{this.props.todos.filter((todo) => { return !todo.completed}).length}</span></li>
                                  <br/>
								 <li> <button onClick={this.props.onFilter}  className={this.isActive('true')} value="true">Complete</button><span className="badge" >{this.props.todos.filter((todo) => { return todo.completed}).length}</span></li>
                                  <br/> */}
                    </ul>
            </div>
        )
    }
}


export default Filter
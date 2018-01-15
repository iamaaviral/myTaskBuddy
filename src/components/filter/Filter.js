import React, { Component } from 'react'
// import FilterType from './FilterType'
// import FilterStatus from './FilterStatus'
import {connect} from 'react-redux'


class Filter extends Component{

    // showCompleted(){
    //     console.log(this.props.todos.filter((todo) => { return todo.completed}))
    // }

    // filterItem(event){
    //     // this.props.todos.filter[0].Status = event.target.value;
    //     // this.setState({
    //     //     filter: this.state.todos.filter
    //     // });
    // }
    isActive(value){
        return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
    }
    render(){
        // var onFilter1 = this.props.onFilter;
        return (
         <div id ="filterbar">
                    <ul>
                                 <li><button onClick={this.props.onFilter} className={this.isActive('SHOW_ALL')} value="SHOW_ALL">All</button></li>
                                 <br/>
								  <li><button onClick={this.props.onFilter} className={this.isActive('false')} value="false">Incomplete</button></li>
                                  <br/>
								 <li> <button onClick={this.props.onFilter}  className={this.isActive('true')} value="true">Complete</button></li>
                                  <br/>
                    </ul>
            {/* <FilterType onSearch = {this.searchItem} filter={this.props.filter}/>
            <FilterName />
            <p>Total no of itmes are: {this.props.todos.length}</p> 
            <p>Total no of completed items are itmes are: {this.props.todos.filter((todo) => { return todo.completed}).length}</p> 
            <p>Total no of itmes important: {this.props.todos.filter((todo) => { return todo.important}).length}</p> 
            <button onClick = {this.showCompleted.bind(this)} > Show completed</button> */}
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return state;
// }

export default Filter
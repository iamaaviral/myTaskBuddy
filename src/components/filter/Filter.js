import React, { Component } from 'react'
import FilterType from './FilterType'
import FilterStatus from './FilterStatus'
import {connect} from 'react-redux'


class Filter extends Component{

    showCompleted(){
        console.log(this.props.todos.filter((todo) => { return todo.completed}))
    }

    filterItem(event){
        // this.props.todos.filter[0].Status = event.target.value;
        // this.setState({
        //     filter: this.state.todos.filter
        // });
    }

    render(){
        return (
        <div>
         <div id ="filterbar">
            <FilterType onSearch = {this.searchItem} filter={this.props.filter}/>
            {/* <FilterName /> */}
            <p>Total no of itmes are: {this.props.todos.length}</p> 
            <p>Total no of completed items are itmes are: {this.props.todos.filter((todo) => { return todo.completed}).length}</p> 
            <p>Total no of itmes important: {this.props.todos.filter((todo) => { return todo.important}).length}</p> 
            <button onClick = {this.showCompleted.bind(this)} > Show completed</button>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Filter)
import React, { Component } from 'react'
import TextInput from './TextInput'
import List from './List'
import Filter from './Filter'
import Category from './Category'
import {connect} from 'react-redux'



// class App extends Component 
var App =React.createClass({

    filterItem : function(event){
        console.log(event.target.value);
        this.props.filter[0].Status = event.target.value;
        this.setState({
            filter: this.props.filter
        });
    },
    

    render(){
        return (
        <div>
         <h2>To-Do App!</h2>
         <div id ="app">
            <TextInput dispatch={this.props.dispatch}/>
            <List dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCatelog].todos} filter={this.props.filter}/>
            <Category/>
            <Filter dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCatelog].todos} onFilter={this.filterItem} filter={this.props.filter}/>
            </div>
        </div>
        )
    }
})

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(App)
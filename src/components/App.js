import React, { Component } from 'react'
import TextInput from './TextInput'
import List from './List'
import Filter from './Filter'
import CategoryInput from './CategoryInput'
import Category from './Category'
import Header from './Header'
import DeleteCompleted from './DeleteCompletedButton'
import {connect} from 'react-redux'
var createReactClass = require('create-react-class');


// class App extends Component 
var App =createReactClass({

    filterItem : function(event){
        // var x = document.getElementsByTagName("span")
        // console.log( event.target.getAttribute("value"));
        this.props.filter[0].Status =  event.target.getAttribute("value");
        this.setState({
            filter: this.props.filter
        });
    },

    render(){
        return (
        <div className="main_page">
         {/* <h2>To-Do App!</h2> */}
         <header className="header">
            <Header dispatch={this.props.dispatch} collpased={this.props.collapsed}/>
        </header>
         <div id ="app">
             <div className={this.props.collapsed ? "left-side-bar collapsed" : "left-side-bar"}>
                <div className="lists-scroll">
                <Filter dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCategory].todos} onFilter={this.filterItem} filter={this.props.filter}/>
                <Category dispatch={this.props.dispatch} selectedID ={this.props.selectedCategory} todos = {this.props.Todo}/>
                <CategoryInput dispatch={this.props.dispatch}  collapsed={this.props.collapsed}/>
                </div>
             </div>
            <div className="right-side-bar">
                <div className="main">
                    <TextInput dispatch={this.props.dispatch}/>
                    <List dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCategory].todos} filter={this.props.filter}/>
                </div>
                <DeleteCompleted dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCategory].todos} filter={this.props.filter} />
            </div>
         </div>
        </div>
        )
    }
})

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(App)
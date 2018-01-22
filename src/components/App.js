import React, { Component } from 'react'
import TextInput from './TextInput'
import List from './List'
import Filter from './Filter'
import CategoryInput from './CategoryInput'
import Category from './Category'
import Header from './Header'
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
         {/* <h2>To-Do App!</h2> */}
         <header>
            <Header />
        </header>
         <div id ="app">
             <div className="left-side-bar">
                <CategoryInput dispatch={this.props.dispatch} />
                <Category dispatch={this.props.dispatch} selectedID ={this.props.selectedCatelog} todos = {this.props.Todo}/>
                <Filter dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCategory].todos} onFilter={this.filterItem} filter={this.props.filter}/>
             </div>
            <div className="right-side-bar">
                <div className="main">
                    <TextInput dispatch={this.props.dispatch}/>
                    <List dispatch={this.props.dispatch} todos={this.props.Todo[this.props.selectedCategory].todos} filter={this.props.filter}/>
                </div>
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
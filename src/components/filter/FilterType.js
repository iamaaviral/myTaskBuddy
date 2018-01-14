import React, {Component} from 'react'
import {connect} from 'react-redux'



var FilterType = React.createClass({
    isActive:function(value){
        // return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
        console.log("sdfsdf");
    },
    
    render: function(){
        var onFilter1 = this.props.onFilter;
        return(
                <div className="row">
                        <ul className="nav nav-pills todo-filter">
                            <li><a onClick={onFilter1} className={this.isActive('SHOW_ALL')} value="SHOW_ALL" href="#">All</a></li>
                            <li><a onClick={onFilter1} className={this.isActive('false')} value="false">Incomplete</a></li>
                             <li><a onClick={onFilter1} className={this.isActive('true')} value="true">Complete</a></li>
                        </ul>
                </div>
        ); 
    }
});

function mapStateToProps(state){
    return state;
}


export default FilterType
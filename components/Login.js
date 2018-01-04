import React, {Component} from 'react';
import {browserHistory} from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            username: "",
            usernameError: "",
            password: "",
            passwordError: "",
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        // console.log("you clicked login button");
        if(this.state.username && this.state.password){
                this.setState({redirect:true});
        }
        else{
            console.log("empty fields");
        }
    }

    onChange(e){
        // console.log("onChange working");
        this.setState({[e.target.name]: e.target.value});
    }


    render() {

        if(this.state.redirect){
            return (<Redirect to={'/main'} />)
        }
        return (
        <div className="form">
            <h2>Login</h2>
            <form>
                    <input type="text" 
                              name="username"
                            placeholder="User Name" 
                            onChange={e => this.onChange(e)}
                              />
                            <br/>
                    <input type="password" 
                             name="password"
                            placeholder="password" 
                            onChange={e => this.onChange(e)}
                             />
                            <br/> 
         <button type="button" onClick={e => this.login(e)}>Login</button>
            </form>
        </div>
        )
    }
}

export default Login;
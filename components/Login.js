import React, {Component} from 'react';
import {browserHistory} from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';

class Login extends Component {

    render() {
        return (
        <div className="form">
            <h2>Login</h2>
            <form>
                    <input type="text" 
                              name="username"
                            placeholder="User Name" 
                              />
                            <br/>
                    <input type="password" 
                             name="password"
                            placeholder="password" 
                             />
                            <br/> 
         <button type="button" onClick={e => this.onSubmit(e)}>Sign Up</button>
            </form>
        </div>
        )
    }
}

export default Login;
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
            this.change = this.change.bind(this);
        }

        login(){
            // console.log("you clicked login button");
            if(this.state.username && this.state.password){
                    this.setState({redirect:true});
            }
            else{
                console.log("empty fields");
                this.setState({
                    password : this.state.passwordError
                  });
            }
        }

        validate = () => {
            let isError = false;
            const errors = {
              usernameError: "",
              passwordError: ""
            };
      
            if (this.state.username.length < 5) {
              isError = true;
              errors.usernameError = "Username needs to be atleast 5 characters long";
            }
      
            if (this.state.password.length <= 0) {
              isError = true;
              errors.passwordError = "Requires valid password";
            }
      
            this.setState({
                ...this.state,
                ...errors
              });
      
            return isError;
          };

        change(e){
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
            
            <div className="group">
        <input type="text"   name="username"
                                onChange={e => this.change(e)}
                                required="required"/><span className="highlight"></span><span className="bar"></span>
        <label>Username</label>
        </div>
        <div className="group">
        <input type="password"  name="password"
                                onChange={e => this.change(e)}
                                required="required"/><span className="highlight"></span><span className="bar"></span>
        <label>Password</label>
        </div>
        <div className="btn-box">
        <button className="button btn-submit"  onClick={e => this.login(e)} type="submit">login</button>
        </div>
                </form>
            </div>
            )
        }
    }

    export default Login;
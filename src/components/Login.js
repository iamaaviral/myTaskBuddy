import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false
        }
        this.login = this.login.bind(this);
        this.change = this.change.bind(this);
    }


    change(e) {
        // console.log("onChange working");
        this.setState({ [e.target.name]: e.target.value });
        this.showInputError(e.target.name);
    }

    login(e) {
        e.preventDefault();
        // console.log("you clicked login button");
        if (!this.validate()) {
            console.log("empty fields");

        }
        else {
            this.setState({ redirect: true });
            // this.setState({
            //     password : this.state.passwordError
            //   });
        }
    }

    validate = () => {

        const inputs = document.querySelectorAll('input');
        let isFormValid = true;


        // if (this.state.username.length < 5) {
        //   isError = true;
        //   errors.usernameError = "Username needs to be atleast 5 characters long";
        // }

        // if (this.state.password.length <= 0) {
        //   isError = true;
        //   errors.passwordError = "Requires valid password";
        // }
        inputs.forEach(input => {

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });


        return isFormValid;
    };

    showInputError(refName) {
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);
        const isPassword = refName.indexOf('password') !== -1;


        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 characters`;
            }
            return false;
        }

        error.textContent = '';
        return true;
    }


    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/main'} />)
        }
        return (
            <div className="wrapper">
                <form>

                    <div className="group">
                        <input type="text" name="username" ref="username"
                            onChange={e => this.change(e)}
                            required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label id="usernameLabel">Username</label>
                        <div className="error" id="usernameError" />
                    </div>
                    <div className="group">
                        <input type="password" name="password" ref="password"
                            pattern=".{5,}"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label id="passwordLabel">Password</label>
                        <div className="error" id="passwordError" />
                    </div>
                    <div className="btn-box">
                        <button className="button btn-submit" onClick={e => this.login(e)} type="submit">login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
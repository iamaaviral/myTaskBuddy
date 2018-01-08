    import React, {Component} from 'react';
    import {browserHistory} from 'react-router-dom';
    import { Route , withRouter} from 'react-router-dom';
    import { FacebookLogin } from 'react-facebook-login-component';

    class SignUp extends Component {
    constructor(props){
        super(props);
        this.state ={
            // email: '',
            // password: '',
            // error:{
            //     message: ''
            // }
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.change = this.change.bind(this);
    }



    // change(e) {
    //     // this.props.onChange({ [e.target.name]: e.target.value });
    //     this.setState({
    //       [e.target.name]: e.target.value
    //     });
    //   };
    change = e => {
        // this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
        this.showInputError(e.target.name);
      };


      onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        // console.log('submit is clicked');
        if (!this.validate()) {
          console.log('This form has errors');
          // console.log(this);
          // console.log(this.state.errorText);
          // console.log(this.state.value);
          //  console.log(e.target);
          // console.log(this.props);
      //     // this.setState({
      //     //  email : this.state.emailError
      //     // });
          // this.setState({
          //   email : this.state.emailError
          // });
        
        }
        else{
            // clear form
          this.setState({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
          });
          this.props.history.push('/main');
          // console.log(this.props);
          console.log('no errors');
        }
      };


      validate = () => {

        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

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
                    } else if (validity.typeMismatch) {
                      error.textContent = `${label} is not a valid email address`;
                  }
                    return false;
                }
        
                error.textContent = '';
                return true;
            }

     
      responseFacebook (response) {
        console.log(response);
        //anything else you want to do(save to localStorage)...
      }
      
      render() {
            return (
            <div className="wrapper">
              <form>
              
              <div className="group">
          <input type="text"   name="firstname" ref="firstname"
                                value={this.state.firstName}
                                onChange={e => this.change(e)}
                                // onChange={this.change.bind(this)}
                                required="required"/><span className="highlight"></span><span className="bar"></span>
          <label id="firstnameLabel"> First Name</label>
          <div className="error" id="firstnameError" />
        </div>
          <div className="group">
            <input type="text" name="lastname" ref="lastname"
                                  value={this.state.lastName}
                                  onChange={e => this.change(e)}
                                  // onChange={this.change.bind(this)}
                                  required="required"/><span className="highlight"></span><span className="bar"></span>
            <label id="lastnameLabel">Last Name</label>
            <div className="error" id="lastnameError" />
          </div>
          <div className="group">
          <input type="text" name="username" ref="username"
          value={this.state.username}
              onChange={e => this.change(e)}
              required="required" /><span className="highlight"></span><span className="bar"></span>
          <label id="usernameLabel">Username</label>
          <div className="error" id="usernameError" />
      </div>
        <div className="group">
          <input type="email"   name="email" ref="email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                // onChange={this.change.bind(this)}
                                required="required"/><span className="highlight"></span><span className="bar"></span>
          <label id="emailLabel">Email</label>
          <div className="error" id="emailError" />
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
          <button className="button btn-submit"  onClick={e => this.onSubmit(e)} type="submit">Sign Up</button>
          <FacebookLogin  socialId="158761201565558"
                              language="en_US"
                              scope="public_profile,email"
                              responseHandler={this.responseFacebook}
                              xfbml={true}
                              fields="id,email,name"
                              version="v2.5"
                              className="button btn-submit facebook-login"
                              buttonText="Login With Facebook"/>
          </div>
          <h4>Sign Up</h4>
            <p>Already registered? <a href="/login">Sign in</a></p>
                </form>
                {/* <div>{this.state.error.message}</div> */}
            </div>
            )
        }
    }

    export default SignUp;
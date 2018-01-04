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
          firstName: "",
          firstNameError: "",
          lastName: "",
          lastNameError: "",
          username: "",
          usernameError: "",
          email: "",
          emailError: "",
          password: "",
          passwordError: ""
      }
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
    };

    validate = () => {
      let isError = false;
      const errors = {
        firstNameError: "",
        lastNameError: "",
        usernameError: "",
        emailError: "",
        passwordError: ""
      };

      if (this.state.username.length < 5) {
        isError = true;
        errors.usernameError = "Username needs to be atleast 5 characters long";
      }

      if (this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email";
      }

      this.setState({
          ...this.state,
          ...errors
        });

      return isError;
    };

  
  
    onSubmit = e => {
      e.preventDefault();
      // this.props.onSubmit(this.state);
      // console.log('submit is clicked');
      const err = this.validate();
      if (!err) {
        // clear form
        this.setState({
          firstName: "",
          firstNameError: "",
          lastName: "",
          lastNameError: "",
          username: "",
          usernameError: "",
          email: "",
          emailError: "",
          password: "",
          passwordError: ""
        });
        this.props.history.push('/main');
        console.log(this.props);
        this.props.onChange({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: ""
        });
        console.log('no errors');
      }
      else{
          console.log('This form has errors');
          // console.log(this);
          // console.log(e.target);
          this.setState({
           email : this.state.emailError
          });
      }
    };


    responseFacebook (response) {
      console.log(response);
      //anything else you want to do(save to localStorage)...
    }
    
    render() {
          return (
            <div>
        
          <div className="wrapper">
            <form>
            
            <div className="group">
        <input type="text"   name="firstName"
                              value={this.state.firstName}
                              onChange={e => this.change(e)}
                              // onChange={this.change.bind(this)}
                              errorText={this.state.firstNameError}
                              required="required"/><span className="highlight"></span><span className="bar"></span>
        <label> First Name</label>
      </div>
        <div className="group">
          <input type="text" name="lastName"
                                value={this.state.lastName}
                                onChange={e => this.change(e)}
                                // onChange={this.change.bind(this)}
                                errorText={this.state.lastNameError}
                                required="required"/><span className="highlight"></span><span className="bar"></span>
          <label>Last Name</label>
        </div>
      <div className="group">
        <input type="text"   name="username"
                              value={this.state.username}
                              onChange={e => this.change(e)}
                              // onChange={this.change.bind(this)}
                              errorText={this.state.usernameError}
                              required="required"/><span className="highlight"></span><span className="bar"></span>
        <label>Username</label>
      </div>
      <div className="group">
        <input type="text"   name="email"
                              value={this.state.email}
                              onChange={e => this.change(e)}
                              // onChange={this.change.bind(this)}
                              errorText={this.state.emailError}
                              required="required"/><span className="highlight"></span><span className="bar"></span>
        <label>Email</label>
      </div>
      <div className="group">
        <input type="password"  name="password"
                              value={this.state.password}
                              onChange={e => this.change(e)}
                              // onChange={this.change.bind(this)}
                              errorText={this.state.passwordError}
                              required="required"/><span className="highlight"></span><span className="bar"></span>
        <label>Password</label>
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
          </div>
          )
      }
  }

  export default SignUp;
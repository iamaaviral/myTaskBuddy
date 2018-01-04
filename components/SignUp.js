import React, {Component} from 'react';
import {browserHistory} from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';

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
        
    }
  };

    render() {
        return (
        <div className="form">
            <h2>Sign Up</h2>
            <form>
                    <input type="text" 
                            name="firstName"
                            placeholder="First Name" 
                            value={this.state.firstName}
                            onChange={e => this.change(e)}
                            // onChange={this.change.bind(this)}
                            errorText={this.state.firstNameError} />
                            <br/>
                    <input type="text" 
                            name="lastName"
                            placeholder="Last Name" 
                            value={this.state.lastName}
                            onChange={e => this.change(e)}
                            // onChange={this.change.bind(this)}
                            errorText={this.state.lastNameError} />
                            <br/>
                    <input type="text" 
                              name="username"
                            placeholder="User Name" 
                            value={this.state.username}
                            onChange={e => this.change(e)}
                            // onChange={this.change.bind(this)}
                            errorText={this.state.usernameError} />
                            <br/>
                    <input type="text" 
                              name="email"
                            placeholder="email" 
                            value={this.state.email}
                            onChange={e => this.change(e)}
                            // onChange={this.change.bind(this)}
                            errorText={this.state.emailError} />
                            <br/>
                    <input type="password" 
                             name="password"
                            placeholder="password" 
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            // onChange={this.change.bind(this)}
                            errorText={this.state.passwordError} />
                            <br/> 
          <a href="#">Sign up with facebook</a>
                      
      
        <button type="button" onClick={e => this.onSubmit(e)}>Sign Up</button>
            </form>
            {/* <div>{this.state.error.message}</div> */}
        </div>
        )
    }
}

export default SignUp;
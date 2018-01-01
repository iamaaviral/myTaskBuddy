import React, {Component} from 'react';

class SignUp extends Component {
constructor(props){
    super(props);
    this.state ={
        email: '',
        password: ''
    }
}

signUp(){
    console.log('this.state',this.state);
}

    render() {
        return (
        <div className="form">
            <h2>Sign Up</h2>
            <div>
                    <input type="text" palaceholder="email" onChange={event => this.setState({email: event.target.value})} />
                    <input type="password" palaceholder="password" onChange={event => this.setState({password: event.target.value})}/>
                    <button type="button" onClick={() => this.signUp()}>Sign Up</button>
            </div>
        </div>
        )
    }
}

export default SignUp;
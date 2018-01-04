import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../components/App'
import SignUp from '../components/SignUp'

const Routes =() => (
<BrowserRouter>
    <Switch>
        <Route exact path='/' component ={SignUp} />
        <Route path='/main' component ={App} />
    </Switch>

</BrowserRouter>

);

export default Routes;


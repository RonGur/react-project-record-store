import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Signup from './Signup';
import {isAuthenticated} from './UserFunctions';

// Routes to the given path only if the use is logged in. Otherwise, redirect to Sign Up.
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (isAuthenticated())
            ? <Component {...props} />
            : <Redirect to='/' component={Signup} />
    )} />
)
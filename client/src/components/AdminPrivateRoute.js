import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Login from './Login';
import {isAdmin, isAuthenticated} from './UserFunctions';

// Routes to the given path only if admin is logged in. Otherwise, redirect to login.
export const AdminPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (isAuthenticated() && isAdmin())
            ? <Component {...props} />
            : <Redirect to='/login' component={Login} />
    )} />
)
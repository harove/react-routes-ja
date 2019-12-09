import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../../utils/session';

//const hasSession = true;

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => 
            isLogin() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
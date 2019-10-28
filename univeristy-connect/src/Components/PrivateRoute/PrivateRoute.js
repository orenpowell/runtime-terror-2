import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

// Utils
import auth from '../../Utils/auth'
const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    auth.getToken('loginUser') !== null ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/auth/Login',
        from: props.location
        }}
      />
    )
  )} />
);

export default PrivateRoute;  
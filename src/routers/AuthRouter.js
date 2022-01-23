import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginScreen } from '../components/Auth/LoginScreen';
import { RegisterScreen } from '../components/Auth/RegisterScreen';

export const AuthRouter = () => {
  return <div className="auth__main">

    <div className="auth__box-container">
    <Switch>      
        <Route
        exact
        path= "/auth/login"
        component={LoginScreen}
        />

        <Route
        exact
        path= "/auth/register"
        component={RegisterScreen}
        />

        <Redirect to="/auth/login"/>
      </Switch>

    </div>
      
  </div>;
};

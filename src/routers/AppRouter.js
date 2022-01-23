import React, { useEffect, useState } from 'react';
import { Route,BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import AdditionalPage from '../components/AdditionalPage';
import HomePage from '../components/HomePage';
import Navigation from '../components/Navigation';
import PokemonPage from '../components/PokemonPage';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [cheking, setCheking]= useState(true);
  const [isLoggedIn, setIsLoggedIn]= useState(false);

  useEffect(() =>{

    firebase.auth().onAuthStateChanged((user) => {


      if (user?.uid) {
        dispatch( login(user.uid, user.displayName));
        setIsLoggedIn( true);
      }else{
        setIsLoggedIn( false);
      }

      setCheking(false);
    });

  }, [ dispatch, setCheking, setIsLoggedIn])

  if (cheking) {
    return(
      <h1>Espere...</h1>
    )
  }



  return <Router>
        <header className="header">
       <div className="header">
       <Route component={Navigation} path="/" />
       </div>
       </header>
       <main className="main">
            <div className="container">


           <Switch>
               <PublicRoute
               path="/auth"
               component={AuthRouter}
               isAuthenticated={ isLoggedIn}
               />
             <PrivateRoute
             exact
             isAuthenticated={ isLoggedIn}
               path="/"
               component={HomePage}
               />



<Route 
component={AdditionalPage}
 path="/additional" />


              <Route 
              component={PokemonPage}
               path="/:id" />

               <Redirect to="/auth/login"/>



           </Switch>
      
      </div>
      </main>
  </Router>
  
 
};

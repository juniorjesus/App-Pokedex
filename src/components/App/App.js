import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import AdditionalPage from '../AdditionalPage';
import HomePage from '../HomePage';
import PokemonPage from '../PokemonPage';
import './App.scss';
import { LoginScreen } from '../Auth/LoginScreen';
import { RegisterScreen } from '../Auth/RegisterScreen';

const App = () => (
    <>
        <header className="header">
            <div className="container">
                <Route component={Navigation} path="/" />
            </div>
        </header>
        <main className="main">
            <div className="container">
                <Switch>
                    <Route component={HomePage} path="/" exact />
                    <Route component={AdditionalPage} path="/additional" />
                    <Route component={PokemonPage} path="/:id" />

                    <Route component={LoginScreen} 
                    exact
                    path="/login" />

                    <Route component={RegisterScreen}
                    exact
                    path="/register" />

                    <Redirect to="/login"/>
                </Switch>
            </div>
        </main>
    </>
)

export default App;
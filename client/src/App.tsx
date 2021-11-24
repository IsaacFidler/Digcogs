import React, {useState} from 'react';
import background from './assets/background.jpeg';
import './App.css';
import Auth0ProviderWithHistory from './auth0provider';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
} from 'react-bootstrap';

import ProtectedRoute from './routes/ProtectedRoutes';

//react router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

//components

import Header from './components/Header'
import Loading from './components/Loading'

//pages

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

//
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

function App() {

  const { loginWithRedirect, logout, user, isLoading, } = useAuth0();

  //check if auth on redux storeEnhancers
  const { auth } = useSelector((state :any) => state.auth)

  return (
    <Auth0ProviderWithHistory>
      <Router>
        <div className="App">
          <Header />
          <div className="top-block"></div>
          <div className="the-container flex-grow-1">
            <Route path="/">
              {auth ? <Redirect to="/dashboard" /> : <Home />}
            </Route>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    </Auth0ProviderWithHistory>
  );
}

export default App;

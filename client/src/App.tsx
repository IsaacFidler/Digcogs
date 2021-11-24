import React from 'react';
import logo from './logo.svg';
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

//react router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

//components

import Header from './components/Header'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {loginWithRedirect, logout, user, isLoading} = useAuth0();
  return (
    <Auth0ProviderWithHistory>
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    </Auth0ProviderWithHistory>
  );
}

export default App;

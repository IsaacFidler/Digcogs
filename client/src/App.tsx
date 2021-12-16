import React, {useState} from 'react';
import background from './assets/background.jpeg';
import './App.css';
import Auth0ProviderWithHistory from './auth0provider';

import { initializeApp } from 'firebase/app';
// import  {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

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
import ResultDetail from './pages/ResultDetail';
//
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

const firebaseConfig = {
  apiKey: 'AIzaSyDdft9MAXefF08AxH3swx91arQEIMVIAmM',
  authDomain: 'digcogs-47207.firebaseapp.com',
  projectId: 'digcogs-47207',
  storageBucket: 'digcogs-47207.appspot.com',
  messagingSenderId: '913240102320',
  appId: '1:913240102320:web:e84d9bc2a2f0481e897275',
  measurementId: 'G-9RN3M80Q5D',
};

const app = initializeApp(firebaseConfig);

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
            <ProtectedRoute
              path="/result/:id"
              component={ResultDetail}
            />
          </div>
        </div>
      </Router>
    </Auth0ProviderWithHistory>
  );
}

export default App;

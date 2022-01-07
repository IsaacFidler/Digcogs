import React, { useEffect, useState } from 'react';
import background from './assets/background.jpeg';
import './App.css';

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
  Switch,
} from 'react-router-dom';

//components

import Header from './components/Header';
import Loading from './components/Loading';
import Sidebar from './components/Sidebar';

//pages

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ResultDetail from './pages/ResultDetail';
import LoginSuccessful from './pages/LoginSuccessful';
//
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/auth';

function App() {
  const [auth1, setAuth1] = useState(false);
  // const { loginWithRedirect, logout, user, isLoading, } = useAuth0();

  //check if auth on redux storeEnhancers
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  // async function fetchText() {
  //   console.log('yes')
  //   let response = await fetch('http://localhost:9000/admin');
  //   let data = await response.json();
  //   console.log('this is cata  ' + data)
  //   console.log(auth + 'authash')
  //   if(data){
  //     setAuth1(true)
  //     dispatch(login());
  //   } else {
  //     setAuth1(false)
  //     dispatch(logout());
  //   }
  // }
  function fetchText() {
    fetch('http://localhost:9000/admin')
      //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  useEffect(() => {
    // getSearchResults('hessle+audio', setSearchResults )
    // fetchText();
    console.log(auth);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}

        <div className="the-container flex-grow-1">
          {/* <Button onClick={fetchText}>Primary</Button> */}
          <Switch>
            {/* <Route path="/">
              {auth1 ? <Redirect to="/dashboard" /> : <Home />}
            </Route> */}

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/result/:id">
              <ResultDetail />
            </Route>

            <Route path="/LoginSuccessful">
              <LoginSuccessful />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/result/:id" component={ResultDetail} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

// src/components/authentication-button.js

import React, { useEffect } from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/auth';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  async function fetchText() {
    let response = await fetch('http://localhost:9000/admin');
    let data = await response.text();

    if (data) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }

  useEffect(() => {
    // getSearchResults('hessle+audio', setSearchResults )
    fetchText();
  }, []);

  return auth ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;

// src/components/authentication-button.js

import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import {login, logout} from '../redux/auth'
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  isAuthenticated ? dispatch(login()) : dispatch(logout());
  console.log(auth)
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;

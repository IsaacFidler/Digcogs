// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../redux/auth'

const LoginButton = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();
  const { auth } = useSelector((state:any) => state.auth)
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-primary btn-block button"
      onClick={() => {
        loginWithPopup()}
      }
      style={{
        backgroundColor: '#69F0AE',
        border: '#69F0AE',
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;

// src/components/login-button.js

import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../redux/auth'
import {getTokenUrl} from '../auth/getTokenUrl'

const LoginButton = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();
  const { auth } = useSelector((state:any) => state.auth)
  const dispatch = useDispatch();

  function openDiscogsAuth() {
    window.location.href=`http://localhost:9000/authorize`;
  }

  return (

    <button
      className="btn btn-primary btn-block button"
      onClick={() => {
        openDiscogsAuth()
      }
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

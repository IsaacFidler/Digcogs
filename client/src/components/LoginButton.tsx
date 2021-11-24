// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block button"
      onClick={() => loginWithRedirect()}
      style = {{
        backgroundColor: '#69F0AE',
        border: '#69F0AE',
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;

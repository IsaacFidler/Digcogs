// src/components/logout-button.js
import {
  Button,
} from 'react-bootstrap';

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <Button
      variant="outline-primary"
      className="btn logout-button"
      style={{
        color: '#69F0AE',
        borderColor: '#69F0AE',
      }}
      onClick={() => {
        dispatch(logout());
        logout({
          returnTo: window.location.origin,
        });
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
